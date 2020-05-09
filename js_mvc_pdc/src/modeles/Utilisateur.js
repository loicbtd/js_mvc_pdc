class Utilisateur {
  static CLE_ID_UTILISATEUR = 'id_utilisateur'
  static CLE_PSEUDONYME = 'pseudonyme'
  static CLE_MOT_DE_PASSE = 'mot_de_passe'

  constructor(id_utilisateur, pseudonyme, mot_de_passe) {
    this.id_utilisateur = id_utilisateur
    this.pseudonyme = pseudonyme
    this.mot_de_passe = mot_de_passe
  }
}

export default Utilisateur