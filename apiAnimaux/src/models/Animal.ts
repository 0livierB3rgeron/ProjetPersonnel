import moment from 'moment';


// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate user keys.';


  export enum Habitat {
    AmériqueDuNord = "Amérique du nord",
    AmériqueCentrale = "Amérique centrale",
    AmériqueDuSud = "Amérique du sud",
    Europe = "Europe",
    Asie = "Asie",
    Océanie = "Océanie"
  }

// **** Types **** //

export interface IAnimal {
  id: number;
  nom: string;
  espece: string;
  habitat: Habitat;
  nourriture: string;
  image: string;
  description: string;
}


// **** Functions **** //

/**
 * Créer un nouvel animal
 * @param {string=} nom - Le nom de l'animal
 * @param {string=} espece - L'espèce de l'animal
 * @param {Habitat=} habitat - l'habitat de l'animal
 * @param {string=} nourriture - la principale nourriture de l'animal
 * @param {string=} image - l'url d'une image qui représente l'animal
 * @param {string=} description - un brève text qui décrit l'animal
 * @param {number=} id - l'identifiant de l'animal dans la BD
 */
function new_(
  nom?: string,
  espece?: string,
  habitat?: Habitat,
  nourriture?: string, 
  image?: string,
  description?: string,
  id?: number // id last cause usually set by db
): IAnimal {
  return {
    id: (id ?? -1),
    nom: (nom ?? ''),
    espece: (espece ?? ''),
    habitat: (habitat ?? Habitat.AmériqueCentrale),
    nourriture: (nourriture ?? ''),
    image: (image ?? ''),
    description: (description?? '')
  };
}

/**
 * Retourne une instance d'un animaux
 */
function from(param: object): IAnimal {
  if (!isAnimal(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  const p = param as IAnimal;
  return new_(p.nom, p.espece, p.habitat, p.nourriture, p.image, p.description, p.id);
}

/**
 * Vérifie si l'argument passé en paramètre est un animal
 *  @param {unknow} arg - Paramètre potentiellement un animal
 *  @returns {boolean} - Vrai si c'est un animal
 */
function isAnimal(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg && typeof arg.id === 'number' && 
    'nom' in arg && typeof arg.nom === 'string' && 
    'espece' in arg && typeof arg.espece === 'string' &&
    'habitat' in arg && typeof arg.habitat === typeof Habitat &&
    'nourriture' in arg && typeof arg.nourriture === 'string' &&
    'image' in arg && typeof arg.image === 'string' &&
    'description' in arg && typeof arg.description === 'string'
  );
}


// **** Export default **** //

export default {
  new: new_,
  from,
  isAnimal,
} as const;
