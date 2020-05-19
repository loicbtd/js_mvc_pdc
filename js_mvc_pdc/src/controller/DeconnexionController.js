export default class DeconnexionController {
  controler(requete, reponse) {
    requete.session = null
    reponse.redirect('/')
  }
}