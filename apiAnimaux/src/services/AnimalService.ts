import RouteError from '@src/common/RouteError';
import HttpStatusCodes from '@src/common/HttpStatusCodes';

import AnimalRepo from '@src/repos/AnimalRepo';
import { IAnimal } from '@src/models/Animal';


// **** Variables **** //

export const ANIMAL_NOT_FOUND_ERR = 'Animal non trouvé';


// **** Functions **** //

/**
 * Get tout les animaux.
 */
function getAll(): Promise<IAnimal[] |  undefined> {
  return AnimalRepo.GetAll();
}

/**
 * Get un animal selon son nom.
 */
function getOne(nom: string): Promise<IAnimal |  undefined> {
  return AnimalRepo.GetByName(nom);
}


/**
 * Ajoute un animal.
 */
function addOne(animal:  IAnimal): Promise<IAnimal | undefined> {
  return AnimalRepo.Insert(animal);
}


/**
 * Delete un animal selon son id.
 */
async function _delete(id: number): Promise<boolean> {
  const existe = await AnimalRepo.GetById(id);
  
  // Vérifie si l'animal existe vraiment avant de le delete
  if (!existe) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      ANIMAL_NOT_FOUND_ERR,
    );
  }
  // Delete l'animal
  return AnimalRepo.Delete(id);
}


// **** Export default **** //

export default {
  getAll,
  addOne,
  getOne,
  delete: _delete,
} as const;
