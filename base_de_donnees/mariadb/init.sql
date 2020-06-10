CREATE DATABASE IF NOT EXISTS demo;
GRANT ALL PRIVILEGES ON demo.* TO 'demo'@'%' IDENTIFIED BY 'demo';

-- USE demo;

-- DROP TABLE IF EXISTS publication;
-- DROP TABLE IF EXISTS utilisateur;

-- CREATE TABLE utilisateur(
--   id_utilisateur int auto_increment,
--   pseudonyme varchar(25),
--   mot_de_passe varchar(25),
--   jeton text,
--   PRIMARY KEY(id_utilisateur)
-- );

-- CREATE TABLE publication(
--   id_publication int auto_increment,
--   titre varchar(25),
--   contenu text,
--   id_utilisateur int,
--   PRIMARY KEY(id_publication),
--   CONSTRAINT utilisateur_publication_fk
--     FOREIGN KEY(id_utilisateur)
--     REFERENCES utilisateur(id_utilisateur)
--     ON DELETE CASCADE
-- );

-- INSERT INTO utilisateur (id_utilisateur, pseudonyme, mot_de_passe, jeton) VALUES (1, 'demo', 'demo', '1234');
-- INSERT INTO utilisateur (id_utilisateur, pseudonyme, mot_de_passe, jeton) VALUES (2, 'demo2', 'demo2', '1234');
-- INSERT INTO utilisateur (id_utilisateur, pseudonyme, mot_de_passe, jeton) VALUES (3, 'demo3', 'demo3', '1234');

-- INSERT INTO publication (titre, contenu, id_utilisateur) VALUES ('titre1', 'contenu1', 1);
-- INSERT INTO publication (titre, contenu, id_utilisateur) VALUES ('titre2', 'contenu2', 1);
-- INSERT INTO publication (titre, contenu, id_utilisateur) VALUES ('titre3', 'contenu3', 2);
-- INSERT INTO publication (titre, contenu, id_utilisateur) VALUES ('titre4', 'contenu4', 2);
-- INSERT INTO publication (titre, contenu, id_utilisateur) VALUES ('titre5', 'contenu5', 3);
-- INSERT INTO publication (titre, contenu, id_utilisateur) VALUES ('titre6', 'contenu6', 3);