import 'ressources/configurations/dotenv.conf'

import ControleurConnexion from 'controleurs/ControleurConnexion'
import ControleurDeconnexion from 'controleurs/ControleurDeconnexion'
import ControleurEnregistrement from 'controleurs/ControleurEnregistrement'
import ControleurFil from 'controleurs/ControleurFil'
import app from 'ressources/configurations/express.conf'

class App {
  demarrer(port) {
    // Définition de la route de navigation
    app.route('/*').get(this.naviguer)

    // Définition de la route de contrôle
    app.route('/*').post(this.controler)

    // Démarrage du serveur
    app.listen(port, () => {
      console.log('Serveur en fonction à http://127.0.0.1:' + port)
    })
  }

  naviguer(requete, reponse) {
    let route = requete.originalUrl

    if (!requete.session.utilisateur && route !== '/enregistrement') {
      requete.originalUrl = '/connexion'
      route = '/connexion'
    }

    if (route === '/enregistrement') {
      const controleur = new ControleurEnregistrement()
      controleur.naviguer(requete, reponse)
    }
    else if (route === '/connexion') {
      const controleur = new ControleurConnexion()
      controleur.naviguer(requete, reponse)
    }
    else if (route === '/fil') {
      const controleur = new ControleurFil()
      controleur.naviguer(requete, reponse)
    }
    else if (route === '/fil/publier') {
      reponse.end()
    }
    else if (route.match(/^\/fil\/modifier\/.*/)) {
      reponse.end()
    }
    else {
      reponse.redirect('/fil')
    }
    // requete.session.test = (requete.session.test || 0) + 1
    // reponse.end(requete.originalUrl + '')
  }

  controler(requete, reponse) {
    let route = requete.originalUrl
    
    if (
      !requete.session.utilisateur
        && route !== '/enregistrement'
        && route !== '/connexion'
    ) {
      reponse.redirect('/connexion')
      return
    }

    if (route === '/connexion') {
      const controleur = new ControleurConnexion()
      controleur.controler(requete, reponse)
    }
    else if (route === '/deconnexion') {
      const controleur = new ControleurDeconnexion()
      controleur.controler(requete, reponse)
    }
    else if (route === '/enregistrement') {
      reponse.end()
    }
    else if (route === '/fil') {
      reponse.end()
    }
    else if (route === '/fil/publier') {
      reponse.end()
    }
    else if (route.match(/^\/fil\/modifier\/.*/)) {
      reponse.end()
    }
    else {
      reponse.redirect('/fil')
    }
  }
}

export default App

if (
  process.env.NODE_ENV === 'production' ||
  process.env.NODE_ENV === 'development'
) {
  const application = new App()
  application.demarrer(process.env.PORT)
}