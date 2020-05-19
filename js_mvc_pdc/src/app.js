import 'config/Dotenv'

import ConnexionRouter from 'routes/ConnexionRouter'
import DeconnexionRouter from 'routes/DeconnexionRouter'
import EnregistrementRouter from 'routes/EnregistrementRouter'
import FilRouter from 'routes/FilRouter'
import IndexRouter from 'routes/IndexRouter'
import app from 'config/Express'
import httpError from 'http-erro'

app.use((req, res, next) => {
  if (!req.user) {
    app.use('/connexion', ConnexionRouter)
    app.use('/enregistrement', EnregistrementRouter)
  }
  else {
    next()
  }
})

// app.use('/deconnexion', DeconnexionRouter)
// app.use('/fil', FilRouter)
// app.use('/', IndexRouter)

app.use((req, res, next) => { next(httpError(404)) })

app.use((err, req, res, next) => {
  res.render('app', {
    proprietes: {
      vue: 'erreur',
      erreur: err
  }})
})

app.set('port', process.env.PORT)

export default app