import app from 'app'
import http from 'http'

const serveur = http.createServer(app)

serveur.listen(process.env.PORT, () => {
  console.log("Application accessible à http://127.0.0.1:" + process.env.PORT)
})
