class ControleurDeconnexion {
  controler(requete, reponse) {
    requete.session = null
    reponse.redirect('/')
  }
}

export default ControleurDeconnexion