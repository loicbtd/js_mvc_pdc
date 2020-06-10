import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

import { Publication } from './Publication'

@Entity()
export class Utilisateur {
  
  @PrimaryGeneratedColumn()
  id_utilisateur: number

  @Column()
  pseudonyme: string

  @Column()
  mot_de_passe: string

  @OneToMany(type => Publication, publication => publication.utilisateur)
  publications: Publication[]
}