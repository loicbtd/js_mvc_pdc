import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import ThemePublicationEntity from 'entity/ThemePublicationEntity'
import UtilisateurEntity from 'entity/UtilisateurEntity'

@Entity()
export default class PublicationEntity {
  @PrimaryGeneratedColumn()
  id_publication: number

  @ManyToMany(type => ThemePublicationEntity)
  @JoinTable()
  themes: ThemePublicationEntity[]

  @Column()
  titre: string

  @Column('text')
  contenu: string

  @Column('datetime')
  date: Date

  @Column('int')
  nombre_vues: string

  @ManyToOne(type => UtilisateurEntity, utilisateur => utilisateur.publications)
  utilisateur: UtilisateurEntity
}