import Utilisateur from 'modeles/Utilisateur'

const RECUPERER_LISTE_COMPLETE = `
  SELECT
    `+ Utilisateur.CLE_ID_UTILISATEUR +`,
    `+ Utilisateur.CLE_PSEUDONYME +`,
    `+ Utilisateur.CLE_MOT_DE_PASSE +`,
    `+ Utilisateur.CLE_JETON +`
  FROM `+ Utilisateur.CLE_TABLE_UTILISATEUR +`;
`

export default {
  RECUPERER_LISTE_COMPLETE
}