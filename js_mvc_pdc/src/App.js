import 'ressources/configurations/dotenv.conf'

import ControleurConnexion from 'controleurs/ControleurConnexion'
import ControleurEnregistrement from 'controleurs/ControleurEnregistrement'
import ControleurFil from 'controleurs/ControleurFil'
import app from 'ressources/configurations/express.conf'

class App {
  constructor() {
    this.demarrer = this.demarrer.bind(this)
  }

  demarrer() {
    // Définition de la route de navigation
    app.route('/*').get(this.naviguer)

    // Définition de la route de contrôle
    app.route('/*').post(this.controler)

    // Démarrage du serveur
    app.listen(process.env.PORT, () => {
      console.log('Serveur en fonction à http://127.0.0.1:' + process.env.PORT)
    })
  }

  naviguer(requete, reponse) {
    const route = requete.originalUrl

    // if (!requete.session.utilisateur) {
    //   if (route === '/enregistrement') {
    //     const controleur = new ControleurEnregistrement()
    //     controleur.afficher(requete, reponse)
    //   }
    //   else {
    //     const controleur = new ControleurConnexion()
    //     controleur.afficher(requete, reponse)
    //   }
    // }

    if (route === '/fil') {
      const controleur = new ControleurFil()
      controleur.naviguer(route, reponse)
    } else if (route === '/fil/publier') {
      reponse.end()
    } else if (route.match(/^\/fil\/modifier\/.*/)) {
      reponse.end()
    } else {
      reponse.redirect('/fil')
    }
    // requete.session.test = (requete.session.test || 0) + 1
    // reponse.end(requete.originalUrl + '')
  }

  controler(requete, reponse) {
    if (!requete.session.utilisateur) {
      reponse.redirect('/')
    }

    const route = requete.originalUrl

    if (route === '/fil') {
      const controleur = new ControleurFil()
      controleur.afficher(reponse)
    } else if (route === '/fil/publier') {
      reponse.end()
    } else if (
      route.match(/^\/fil\/modifier\/.*/)
    ) {
      reponse.end()
    } else {
      reponse.redirect('/fil')
    }
  }
}

const application = new App()
application.demarrer()