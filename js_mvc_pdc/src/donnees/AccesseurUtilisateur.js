import BaseDeDonnees from 'donnees/BaseDeDonnees'
import SQLUtilisateur from 'donnees/SQLUtilisateur'
import Utilisateur from 'modeles/Utilisateur'
import mysql from 'mysql2/promise'

class AccesseurUtilisateur {

  recupererItemParId(id) {
     const liste = this.mockListe()
     for (let position = 0; position < liste.length; position++) {
       if (liste[position].id_utilisateur === id) {
         return liste[position]
       }
     }
     return null
  }
  
  async recupererListeComplete() {
    // try {
    //   const connexion = await mysql.createConnection({
    //     host: process.env.MYSQL_HOTE,
    //     port: process.env.MYSQL_PORT,
    //     database: process.env.MYSQL_BASE_DE_DONNEES,
    //     user: process.env.MYSQL_UTILISATEUR,
    //     password: process.env.MYSQL_MOT_DE_PASSE,
    //   })

    //   const enregistrements = await connexion.execute(
    //     SQLUtilisateur.RECUPERER_LISTE_COMPLETE, []
    //   )[0]
      
    //   while (cursor) {

    //   }
      
    // } catch (erreur) {
    //   console.log(erreur.stack)
    // }

    const liste = this.mockListe()

    for (let position = 0; position < liste.length; position++) {
      if (liste[position].id_utilisateur === id) {
        return liste[position]
      }
    }
    return null
  }

  recupererItemParPseudonyme(pseudonyme) {
    const liste = this.mockListe()
    for (let position = 0; position < liste.length; position++) {
      if (liste[position].pseudonyme === pseudonyme) {
        return liste[position]
      }
    }
    return null
  }

  mockListe() {
    return [
      new Utilisateur(1, 'demo1', 'demo1', '1234'),
      new Utilisateur(2, 'demo2', 'demo2', '1234'),
      new Utilisateur(3, 'demo3', 'demo3', '1234'),
    ]
  }
}

export default AccesseurUtilisateur