
import {ResultSetHeader, RowDataPacket} from 'mysql2';
import {connection} from '@src/constants/connexionBD';
import {Habitat, IAnimal} from '@src/models/Animal';
import debugLog = jasmine.debugLog;


async function GetById(animalId: number): Promise<IAnimal| undefined> {
	if (!Number.isInteger(animalId) || animalId <= 0) {
		throw new Error();
	}
	let animal: IAnimal | undefined;
	const query = "SELECT * FROM animal WHERE id = ?;";
	const param = [animalId];
	try{
		//Execute la requête à la bd
		let [resultat] = await connection.promise().execute<RowDataPacket[]>(query, param);

		//Vérification s'il y a bien des résultats
		if(resultat && resultat.length > 0){
			const result = resultat[0];
			animal ={
				id: result.id,
				nom: result.nom,
				espece: result.espece,
				habitat: result.habitat,
				nourriture: result.nourriture,
				image: result.image
			};

		}
	}catch (erreur) {
		throw new Error(erreur.toString());
	}
	
	return animal;
}







/**
 * Permet de trouver Tout les animaux dans la bd
 * Auteur: Olivier Bergeron
 *
 * 
 * @return Le locataire trouver <Ilocataire>
 */
async function GetAll(): Promise<IAnimal[]| undefined> {
	let animaux: IAnimal[] | undefined;
	const query = "SELECT * FROM animal ORDER BY nom DESC;";
	try{
		//Execute la requête à la bd
		let [resultat] = await connection.promise().execute<RowDataPacket[]>(query);

		//Vérification s'il y a bien des résultats
		if(resultat && resultat.length > 0){
			
			resultat.forEach((result =>{
				animaux?.push({
					id: result.id,
					nom: result.nom,
					espece: result.espece,
					habitat: result.habitat,
					nourriture: result.nourriture,
					image: result.image
				});
			}));

		}
	}catch (erreur) {
		throw new Error(erreur.toString());
	}
	
	return animaux;
}

/**
 * Permet d'insérer un nouvel animal dans le système.
 * Auteur: Olivier Bergeron
 * @param animal le model d'un animal
 * @return le nouvel animal créé
 */
async function Insert(animal: { animal: IAnimal }): Promise<IAnimal | undefined> {
	const query =  "INSERT INTO Animal (nom, espece, habitat, nourriture, image) VALUES(:nom, :espece, :habitat, :nourriture, :image)";
	
	
	const params = {nom: animal.animal.nom, espece: animal.animal.espece, habitat: animal.animal.habitat, nourriture: animal.animal.nourriture, image: animal.animal.image};
	try{
		let [resultat] = await connection.promise().execute<ResultSetHeader>(query, params);
		
		if(resultat.affectedRows > 0){
			return GetById(resultat.insertId);
		}else{
			return undefined;
		}
	}catch (erreur){
		throw new Error(erreur.toString());
	}
}


async function Delete(animalId: number): Promise<undefined>{

}



export default {
    GetAll,
	GetById,
	Insert,
	Delete
} as const

