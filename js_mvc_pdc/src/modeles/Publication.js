import Utilisateur from 'modeles/Utilisateur'

class Publication {
  static CLE_ID_PUBLICATION = 'id_publication'
  static CLE_TITRE = 'titre'
  static CLE_CONTENU = 'contenu'
  static CLE_ID_UTILISATEUR = 'id_utilisateur'

  constructor(id_publication, titre, contenu, utilisateur) {
    this.id_publication = id_publication
    this.titre = titre
    this.contenu = contenu
    this.utilisateur = utilisateur
  }
}

export default Publication