create database ProjetPersonnel;
use ProjetPersonnel;
CREATE TABLE animaux (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    espece VARCHAR(255) NOT NULL,
    habitat VARCHAR(255) NOT NULL,
    nourriture VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    favoris BOOLEAN NOT NULL
);

CREATE TABLE habitat (
id INT AUTO_INCREMENT,
nom VARCHAR(255) NOT NULL
);
