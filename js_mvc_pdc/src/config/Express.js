import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
import express from 'express'
import path from 'path'

const app = express()

app.set('views', path.dirname(require.main.filename) + '/' + 'templates')
app.set('view engine', 'twig')

app.use(express.static(path.dirname(require.main.filename) + '/' + 'public'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


export default app