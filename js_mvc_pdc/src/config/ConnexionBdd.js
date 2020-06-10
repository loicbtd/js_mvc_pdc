import { getConnectionManager } from 'typeorm'

const connectionManager = getConnectionManager()
const ConnexionBdd = connectionManager.create({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'demo',
  password: 'demo',
  database: 'demo',
})

export default ConnexionBdd