# Devlog - Historique du travail effectué


## 19/05/2020

* Suite de la restructuration du projet 
* Rencontre de problèmes d'imports à cause des entités typescript de typeorm


## 18/05/2020

* Étude des Middlewares d'express
* Résolution du problème de compilation NestJS
* Création d'un dockerfile + docker-compose projet nestjs


## 15/05/2020

* Restructuration du projet en repositoy/entity/routes
* Étude de tous les Middlewares disponibles pour Express


## 14/05/2020

* Définition de la logique de gestion des erreurs et de leur rendus sur l'interface graphique utilisateur
* implémentation de l'objet BaseDeDonnees et début d'adaptation des accesseurs
* Définition de droits d'écriture / lecture sur les objets affichés selon l'utilisateur connecté et adaptation des templates twig à cet effet.


## 13/05/2020

* Étude, essais et abandon de node-mysql dont je juge l'écriture horrible et trop éloignée des derniers standards de programmation.
* Étude de mysql2/promise afin d'implémenter les requêtes vers la base de données en Javascript ES6 / ES7 avec des try/catch, await/async


## 12/05/2020

* Gestion de la memoire session
* Implémentation des Accesseurs avec des données expérimentales statiques


## 11/05/2020

* Définition de la logique de navigation complete
* Définition de la logique de contrôle des évènements
* Mise en place des cookies


## 10/05/2020

* Mise en place de la base de données
* Définition de la navigation avec twig
* Mise en place du transpilateur babel


## 08/05/2020

* Création du projet express twig
* Étude et choix des dépendances du projet
* Réflexion sur la structure du projet
* Apprentissage du templating Twig