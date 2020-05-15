import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
class Publication {
  static CLE_ID_PUBLICATION = 'id_publication'
  static CLE_TITRE = 'titre'
  static CLE_CONTENU = 'contenu'
  static CLE_ID_UTILISATEUR = 'id_utilisateur'

  @PrimaryGeneratedColumn()
  id_publication: number

  @Column()
  titre: string

  @Column()
  contenu: string

  @ManyToOne(type => Utilisateur)
  theme: Utilisateur

  @Column()
  theme: string

  constructor(id_publication, titre, contenu, utilisateur) {
    this.id_publication = id_publication
    this.titre = titre
    this.contenu = contenu
    this.theme = theme
    this.date = date
    this.nombre_vues = nombre_vue
    this.utilisateur = utilisateur
  }
}

export default Publication