import 'config/Dotenv'

import ConnexionRouter from 'routes/ConnexionRouter'
import DeconnexionRouter from 'routes/DeconnexionRouter'
import EnregistrementRouter from 'routes/EnregistrementRouter'
import FilRouter from 'routes/FilRoute'
import IndexRouter from 'routes/IndexRoute'
import app from 'config/Express'

app.all('*', (req, res, next) => {
  if (!req.user) {
    if (req.originalUrl !== '/connexion' && req.originalUrl !== '/enregistrement') {
      res.redirect('/connexion')
    }
  }
  next()
})

app.use('/enregistrement', EnregistrementRouter)
app.use('/connexion', ConnexionRouter)

app.set('port', process.env.PORT)

app.listen(process.env.PORT, () => {
  console.log('Application accessible à http://127.0.0.1:' + process.env.PORT)
})