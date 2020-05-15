import { rendre } from 'config/Twig.conf'

class ControleurEnregistrement {
  naviguer(route, reponse) {
    rendre(reponse, {
      vue: route,
      navigation: false,
    })
  }

  controler() {
    
  }
}

export default ControleurEnregistrement
