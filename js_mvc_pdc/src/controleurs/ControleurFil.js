import { rendre } from 'ressources/configurations/twing.conf'

class ControleurFil {
  naviguer(route, reponse) {
    rendre(reponse, {
      vue: route,
      navigation: true
    })
  }
}
export default ControleurFil