import AccesseurPublication from 'Repositories/AccesseurPublication'
import { rendre } from 'config/Twig.conf'

class ControleurFilPublier {
  
  #accesseurPublication

  constructor() {
    this.#accesseurPublication = new AccesseurPublication()
  }

  naviguer(requete, reponse) {
    rendre(reponse, {
      vue: requete.originalUrl,
      session: requete.session,
    })
  }

  controler(requete, reponse) {
    const saisies = {
      titre: requete.body.titre,
      contenu: requete.body.contenu,
    }
    let erreurs = {}

    if (!saisies.titre) {
      erreurs.titre = {
        retroaction: 'Merci de saisir un titre.',
      }
    }
    if (!saisies.contenu) {
      erreurs.contenu = {
        retroaction: 'Merci de saisir le contenu de votre publication.',
      }
    }
    if (Object.entries(erreurs).length > 0) {
      this.rendreErreurs(reponse, requete, saisies, erreurs)
      return
    }

    const accesseurPublication = new AccesseurPublication()
    accesseurPublication.ajouterItem({
      titre: saisies.titre,
      contenu: saisies.contenu
    }, requete.session.utilisateur)
  }

  rendreErreurs(reponse, requete, saisies, erreurs) {
    rendre(reponse, {
      vue: requete.originalUrl,
      session: requete.session,
      saisies: saisies,
      erreurs: erreurs,
    })
  }
}

export default ControleurFilPublier