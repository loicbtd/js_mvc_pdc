import { rendre } from 'ressources/configurations/twing.conf'
class ControleurConnexion {
  naviguer(requete, reponse) {
    rendre(reponse, {
      vue: requete.originalUrl,
      session: requete.session,
    })
  }

  controler(requete, reponse) {
    requete.session.utilisateur = {
      pseudonyme: requete.body.pseudonyme,
    }
    reponse.redirect('/')
  }
}

export default ControleurConnexion