import { TwingEnvironment, TwingLoaderFilesystem } from 'twing'

import ControleurAccueil from 'controleurs/ControleurAccueil'
import ControleurEvenement from 'controleurs/ControleurEvenement'
import ControleurPublication from 'controleurs/ControleurPublication'
import dotenv from 'dotenv'
import express from 'express'
import session from 'express-session'

// Chargement du fichier .env
dotenv.config()

// Instanciation et configuration des dépendances externes
const app = express()
const chargeur = new TwingLoaderFilesystem(__dirname + '/vues')
const twing = new TwingEnvironment(chargeur, {
  debug: false,
  charset: 'utf-8',
  cache: false,
  auto_reload: false,
  strict_variables: false,
  autoescape: false,
  optimizations: 0,
  source_map: false,
})
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  })
)

// Instanciation des controleurs
const controleurEvenement = new ControleurEvenement()
const controleurAccueil = new ControleurAccueil()
const controleurPublication = new ControleurPublication()

// Définition du gestionnaire d'évènements
app.route('/').post((requete, reponse) => {
  controleurEvenement.gerer(requete, reponse)
})

// Définition des vues
app.route('/').get((requete, reponse) => {
  controleurAccueil.rendre(twing, reponse)
})
app.route('/publication/creation').get((requete, reponse) => {
  controleurPublication.creer(twing, reponse)
})
app.route('/publication/lecture').get((requete, reponse) => {
  controleurPublication.lireListe(twing, reponse)
})
app.route('/publication/modification/:id').get((requete, reponse) => {
  controleurPublication.modifier(twing, reponse, requete.params.id)
})

// Démarrage du serveur
app.listen(process.env.PORT, () => {
  console.log('Serveur en fonction à http://127.0.0.1:' + process.env.PORT)
})