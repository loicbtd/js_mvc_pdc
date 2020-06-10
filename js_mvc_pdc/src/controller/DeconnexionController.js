function controler(requete, reponse) {
  requete.session = null
  reponse.redirect('/')
}

export { controler }