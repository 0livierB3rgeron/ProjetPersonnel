import { Router } from 'express';
import jetValidator from 'jet-validator';

import Paths from '../common/Paths';
import Animal from '@src/models/Animal';
import AnimalRoutes from './AnimalRoutes';



// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();


// ** Add UserRouter ** //

const animalRouter = Router();


// Get all users
animalRouter.get(
  '/',
  AnimalRoutes.getAll,
);

animalRouter.get(
  Paths.Get,
  AnimalRoutes.getOne,
);

// Add one user
animalRouter.post(
  Paths.Add,
  //validate(['user', User.isUser]),
  AnimalRoutes.add,
);


// Delete one user
animalRouter.delete(
  Paths.Delete,
  validate(['id', 'number', 'params']),
  AnimalRoutes.delete,
);

// Add UserRouter
apiRouter.use(Paths.Base, animalRouter);


// **** Export default **** //

export default apiRouter;
