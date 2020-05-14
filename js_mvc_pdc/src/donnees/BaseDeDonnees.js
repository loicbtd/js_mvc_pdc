import mysql from 'mysql2/promise'
class BaseDeDonnees {
  
  static connexion

  static async getConnexion() {
    if (!BaseDeDonnees.connexion) {
      try {
        BaseDeDonnees.connexion = await mysql.createConnection({
          host: process.env.MYSQL_HOTE,
          port: process.env.MYSQL_PORT,
          database: process.env.MYSQL_BASE_DE_DONNEES,
          user: process.env.MYSQL_UTILISATEUR,
          password: process.env.MYSQL_MOT_DE_PASSE,
        })
      } catch (erreur) {
        console.log(erreur)
      }
    }
    return BaseDeDonnees.connexion
  }
}

export default BaseDeDonnees