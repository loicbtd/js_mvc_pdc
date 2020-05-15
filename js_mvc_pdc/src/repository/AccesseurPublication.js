import AccesseurUtilisateur from 'Repositories/AccesseurUtilisateur'
import BaseDeDonnees from 'config/ConnexionBdd'
import Publication from 'Entity/PublicationEntity'

class AccesseurPublication {
  
  #baseDeDonnees
  #accesseurUtilisateur
  
  constructor() {
    this.#accesseurUtilisateur = new AccesseurUtilisateur()
  }

  recupererItemParId(id) {
    const liste = this.mockListe()
    for (let position = 0; position < liste.length; position++) {
      if (liste[position].id_publication === id) {
        return liste[position]
      }
    }
    return null
  }

  recupererListeComplete() {
    return this.mockListe()
  }

  mockListe() {
    return [
      new Publication(
        1,
        'titre1',
        'contenu1',
        this.#accesseurUtilisateur.recupererItemParId(1)
      ),
      new Publication(
        2,
        'titre2',
        'contenu2',
        this.#accesseurUtilisateur.recupererItemParId(2)
      ),
      new Publication(
        3,
        'titre3',
        'contenu3',
        this.#accesseurUtilisateur.recupererItemParId(3)
      ),
    ]
  }
}

export default AccesseurPublication