import AccesseurPublication from 'donnees/AccesseurPublication'

class ControleurPublication {
  constructor() {
    this.accesseurPublication = new AccesseurPublication()
  }

  lireListe(twing, reponse) {
    twing
      .render('publication/lecture-liste.twig', {
        items: this.accesseurPublication.recupererListe(),
      })
      .then((rendu) => {
        reponse.end(rendu)
      })
  }
}

export default ControleurPublication