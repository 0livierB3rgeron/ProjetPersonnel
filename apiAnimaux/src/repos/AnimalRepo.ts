
import {ResultSetHeader, RowDataPacket} from 'mysql2';
import {connection} from '@src/constants/connexionBD';
import {IAnimal} from '@src/models/Animal';
import debugLog = jasmine.debugLog;


/**
 * Permet de trouver un seul animal dans la bd selon son ID
 * Auteur: Olivier Bergeron
 *
 * @param id de l'animal à trouver
 * @return L'animal trouver <IAnimal>
 */
async function GetById(animalId: number): Promise<IAnimal| undefined> {
	if (!Number.isInteger(animalId) || animalId <= 0) {
		throw new Error();
	}
	let animal: IAnimal | undefined;
	const query = "SELECT * FROM animaux WHERE id = ?;";
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
				image: result.image,
				description: result.description,
				favoris: result.favoris
			};

		}
	}catch (erreur) {
		throw new Error(erreur.toString());
	}
	
	return animal;
}


/**
 * Permet de trouver un seul animal dans la bd selon son ID
 * Auteur: Olivier Bergeron
 *
 * @param animalName le nom de l'animal à trouver
 * @return L'animal trouver <IAnimal>
 */
async function GetByName(animalName: string): Promise<IAnimal| undefined> {
	
	if (animalName == "" || animalName == null) {
		throw new Error("Nom vide");
	}
	let animal: IAnimal | undefined;
	const query = "SELECT * FROM animaux WHERE nom = ?;";
	const param = [animalName];
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
				image: result.image,
				description: result.description,
				favoris: result.favoris
			};

		}
	}catch (erreur) {
		throw new Error(erreur.toString());
	}
	
	return animal;
}






/**
 * Permet de trouver tout les animaux dans la bd
 * Auteur: Olivier Bergeron
 *
 * 
 * @return Le tableau de tout les animaux retrouvés <IAnimal[]>
 */
async function GetAll(): Promise<IAnimal[]| undefined> {
	let animaux: IAnimal[] | undefined = [];
	const query = "SELECT * FROM animaux ORDER BY nom DESC;";
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
					image: result.image,
					description: result.description,
					favoris: result.favoris
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
async function Insert(animal:  IAnimal ): Promise<IAnimal | undefined> {
	const query =  "INSERT INTO animaux (nom, espece, habitat, nourriture, image, description, favoris) VALUES(:nom, :espece, :habitat, :nourriture, :image, :description, :favoris)";
	
	
	const params = {nom: animal.nom, espece: animal.espece, habitat: animal.habitat, nourriture: animal.nourriture, image: animal.image, description: animal.description, favoris: animal.favoris};
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


async function Update(animal:  IAnimal ): Promise<IAnimal | undefined> {
	const query =  "UPDATE animaux SET favrois = :favrois WHERE nom = :nom";
	
	
	const params = {favoris: animal.favoris, nom: animal.nom};
	try{
		let [resultat] = await connection.promise().execute<ResultSetHeader>(query, params);
		
		if(resultat.affectedRows > 0){
			return animal
		}else{
			return undefined;
		}
	}catch (erreur){
		throw new Error(erreur.toString());
	}
}


async function Delete(animalId: number): Promise<boolean>{
	
	const existe = GetById(animalId);
	if(existe == null){
		return false
	}
	
	const query = "DELETE FROM animaux WHERE id = :id;"
	const param = {id: animalId};
	

	try{
		let [resultat] = await connection.promise().execute<ResultSetHeader>(query, param);
		console.log(resultat);
		return resultat.affectedRows > 0;
	}
	catch(erreur){
		throw new Error(erreur.toString());
	}
}



export default {
    GetAll,
	GetById,
	GetByName,
	Insert,
	Delete,
	Update
} as const

