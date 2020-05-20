import { createConnection } from 'typeorm'

createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'demo',
    password: 'demo',
    database: 'demo'
})