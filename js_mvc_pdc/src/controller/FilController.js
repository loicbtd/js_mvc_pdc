import AccesseurPublication from 'Repositories/AccesseurPublication'
import { rendre } from 'config/Twig.conf'

class ControleurFil {
  #accesseurPublication
  
  constructor() {
    this.#accesseurPublication = new AccesseurPublication()
  }

  naviguer(requete, reponse) {
    const id_utilisateur = requete.session.utilisateur.id_utilisateur
    let liste = this.#accesseurPublication.recupererListeComplete()

    for (let position = 0; position < liste.length; position++) {
      if (liste[position].utilisateur.id_utilisateur === id_utilisateur) {
        liste[position].droits = {
          lecture: true,
          ecriture: true,
        }
      } else {
        liste[position].droits = {
          lecture: true,
          ecriture: false,
        }
      }
    }

    rendre(reponse, {
      vue: requete.originalUrl,
      session: requete.session,
      publications: liste,
    })
  }
}
export default ControleurFil