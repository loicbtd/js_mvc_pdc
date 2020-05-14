import AccesseurUtilisateur from 'donnees/AccesseurUtilisateur'
import { rendre } from 'ressources/configurations/twing.conf'
class ControleurConnexion {
  naviguer(requete, reponse) {
    rendre(reponse, {
      vue: requete.originalUrl,
      session: requete.session,
      toasts: [
        {
          titre: 'titre',
          informations: 'informations',
          contenu: 'contenu',
        },
      ]
    })
  }

  controler(requete, reponse) {
    const saisies = {
      pseudonyme: requete.body.pseudonyme,
      mot_de_passe: requete.body.mot_de_passe,
    }
    let erreurs = {}    

    if (!saisies.pseudonyme) {
      erreurs.pseudonyme = {
        retroaction: 'Merci de saisir un pseudonyme.'
      }
    }
    if (!saisies.mot_de_passe) {
      erreurs.mot_de_passe = {
        retroaction: 'Merci de saisir un mot de passe.',
      }
    }
    if (Object.entries(erreurs).length > 0) {
      this.rendreErreurs(reponse, requete, saisies, erreurs)
      return
    }

    const accesseurUtilisateur = new AccesseurUtilisateur()
    const utilisateur =
      accesseurUtilisateur.recupererItemParPseudonyme(saisies.pseudonyme)
    
    if (!utilisateur) {
      erreurs.pseudonyme = {
        retroaction: 'Le pseudonyme n\'existe pas.'
      }
      this.rendreErreurs(reponse, requete, saisies, erreurs)
      return
    }
    
    if (utilisateur.mot_de_passe === saisies.mot_de_passe) {
      requete.session.utilisateur = {
        id_utilisateur: utilisateur.id_utilisateur,
        pseudonyme: utilisateur.pseudonyme,
        jeton: utilisateur.jeton
      }
      reponse.redirect('/')
      return
    }
    
    erreurs.mot_de_passe = {
      retroaction: 'Le mot de passe est incorrect.'
    }
    saisies.mot_de_passe = ''
    this.rendreErreurs(reponse, requete, saisies, erreurs)
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

export default ControleurConnexion