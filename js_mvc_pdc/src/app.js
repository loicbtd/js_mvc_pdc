import 'config/Dotenv'

import ConnexionRouter from 'routes/ConnexionRouter'
import DeconnexionRouter from 'routes/DeconnexionRouter'
import EnregistrementRouter from 'routes/EnregistrementRouter'
import FilRouter from 'routes/FilRouter'
import IndexRouter from 'routes/IndexRouter'
import app from 'config/Express'
import httpError from 'http-error'

app.use('/connexion', ConnexionRouter)
app.use('/deconnexion', DeconnexionRouter)
app.use('/enregistrement', EnregistrementRouter)
app.use('/fil', FilRouter)
app.use('/', IndexRouter)

app.use((req, res, next) => { next(httpError(404)) })

app.use((err, req, res, next) => {
  res.locals.message = err.message
  res.locals.error = process.env.NODE_ENV === 'development' ? err : {}
  res.status(err.status || 500)
  res.render('error')
})

app.set('port', process.env.PORT)

export default app