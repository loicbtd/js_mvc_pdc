import { Strategy } from 'passport-local'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import express from 'express'
import expressSession from 'express-session'
import passport from 'passport'
import path from 'path'

const app = express()

app.set('views', path.dirname(require.main.filename) + '/' + 'templates')
app.set('view engine', 'twig')

app.use(express.static(path.dirname(require.main.filename) + '/' + 'public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cookieParser())

app.use(expressSession({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}))

passport.use(new Strategy(
  (username, password, done) => {
    if (username === 'demo' && password === 'password') {
      return done(null, { username: username })
    }
    else {
      return done(null, false)
    }
  }
))

app.use(passport.initialize())

app.use(passport.session())

export default app