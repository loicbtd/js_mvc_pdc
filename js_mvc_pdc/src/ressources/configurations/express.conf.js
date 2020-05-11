import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
import express from 'express'

const app = express()

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)

app.set('trust proxy', 1)

app.use(
  cookieSession({
    name: 'session',
    keys: ['key0'],
  })
)

export default app