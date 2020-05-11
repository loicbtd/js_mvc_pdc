import { TwingEnvironment, TwingLoaderFilesystem } from 'twing'

import path from 'path'

const chargeur = new TwingLoaderFilesystem(
  path.dirname(require.main.filename) + '/' + 'vues'
)

const twing = new TwingEnvironment(chargeur, {
  debug: false,
  charset: 'utf-8',
  cache: false,
  auto_reload: false,
  strict_variables: false,
  autoescape: false,
  optimizations: 0,
  source_map: false,
})


const rendre = (reponse, proprietes) => {  
  twing
    .render('app.twig', {
      proprietes: proprietes
    })
    .then((rendu) => {
      reponse.end(rendu)
    })
}

export default twing
export { rendre }