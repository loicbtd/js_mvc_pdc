import AccesseurPublication from 'donnees/AccesseurPublication'
import { rendre } from 'ressources/configurations/twing.conf'

class ControleurFil {
  constructor() {
    this.accesseurPublication = new AccesseurPublication()
  }

  naviguer(requete, reponse) {
     rendre(reponse, {
      vue: requete.originalUrl,
      session: requete.session,
      publications: this.accesseurPublication.recupererListe()
    })
  }
}
export default ControleurFil