import HttpStatusCodes from '@src/common/HttpStatusCodes';

import AnimalService from '@src/services/AnimalService';
import { IAnimal} from '@src/models/Animal';
import { IReq, IRes } from './types/express/misc';
import { debug, log } from 'console';


// **** Functions **** //

/**
 * Get tout les animaux.
 */
async function getAll(_: IReq, res: IRes) {
  const animal = await AnimalService.getAll();
  return res.status(HttpStatusCodes.OK).json({ animal });
}


/**
 * Get tout les animaux favoris.
 */
async function getAllFavoris(_: IReq, res: IRes) {
  const animal = await AnimalService.getAllFavoris();
  return res.status(HttpStatusCodes.OK).json({ animal });
}


/**
 * Get un animal selon son nom
 */
async function getOne(req: IReq<{nom: string}>, res: IRes) {
  const nom = req.params.nom;
  const animal = await AnimalService.getOne(nom);
  return res.status(HttpStatusCodes.OK).json({ animal });
}

/**
 * Ajouter un animal.
 */
async function add(req: IReq<{animal: IAnimal}>, res: IRes) {
  const { animal } = req.body;
  await AnimalService.addOne(animal);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**Ajouter l'animal comme favoris */
async function update(req: IReq<{animal: IAnimal}>, res: IRes) {
  const { animal } = req.body;
  await AnimalService.updateOne(animal);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Delete un animal.
 */
async function delete_(req: IReq, res: IRes) {
  const id = +req.params.id;
  await AnimalService.delete(id);
  return res.status(HttpStatusCodes.OK).end();
}


// **** Export default **** //

export default {
  getAll,
  add,
  getOne,
  getAllFavoris,
  update,
  delete: delete_,
} as const;
