/**
* Fichier permettant de se conencter à la base de donnée
*/
import { createPool } from "mysql2";
export const connection = createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'mysql',
    database: 'projetpersonnel',
    namedPlaceholders : true
});

