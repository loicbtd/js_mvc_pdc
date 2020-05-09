import Publication from 'modeles/Publication'
import Utilisateur from 'modeles/Utilisateur'

class AccesseurPublication {
  constructor() {
    this.publications = [
      new Publication(
        1,
        'titre1',
        'contenu1',
        new Utilisateur(1, 'demo', 'demo')
      ),
      new Publication(
        2,
        'titre2',
        'contenu2',
        new Utilisateur(1, 'demo', 'demo')
      ),
      new Publication(
        3,
        'titre3',
        'contenu3',
        new Utilisateur(1, 'demo', 'demo')
      ),
    ]
    this.recupererListe = this.recupererListe.bind(this)
  }

  recupererListe() {
    return this.publications
  }
}

export default AccesseurPublication