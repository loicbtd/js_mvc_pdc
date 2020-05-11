class ControleurConnexion {
  naviguer(route, reponse) {
    rendre(reponse, {
      vue: route,
      navigation: false,
    })
  }

  controler() {
    
  }
}

export default ControleurConnexion