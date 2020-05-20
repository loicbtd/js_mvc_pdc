import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

import PublicationEntity from 'entity/PublicationEntity'

@Entity()
export default class UtilisateurEntity {
  
  @PrimaryGeneratedColumn()
  id_utilisateur: number

  @Column()
  pseudonyme: string

  @Column()
  mot_de_passe: string

  @Column()
  jeton: string

  @OneToMany(type => PublicationEntity, publication => publication.utilisateur)
  publications: PublicationEntity[]
}