import { Router } from 'express';
import jetValidator from 'jet-validator';

import Paths from '../common/Paths';
import AnimalRoutes from './AnimalRoutes';



// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();


// ** Add UserRouter ** //

const animalRouter = Router();


// Get tout les animaux.
animalRouter.get(
  '/',
  AnimalRoutes.getAll,
);

// Get tout les animaux favoris.
animalRouter.get(
  Paths.GetFavoris,
  AnimalRoutes.getAllFavoris,
);

// Get seulement un animal selon son nom
animalRouter.get(
  Paths.Get,
  AnimalRoutes.getOne,
);

// Ajouter un animal
animalRouter.post(
  Paths.Add,
  AnimalRoutes.add,
);

animalRouter.put(
  Paths.Update,
  AnimalRoutes.update
)

// Delete un animal selon son ID
animalRouter.delete(
  Paths.Delete,
  validate(['id', 'number', 'params']),
  AnimalRoutes.delete,
);

apiRouter.use(Paths.Base, animalRouter);


// **** Export default **** //

export default apiRouter;
