import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { ThemePublication } from './ThemePublication'
import { Utilisateur } from './Utilisateur'

@Entity()
export class Publication {
  @PrimaryGeneratedColumn()
  id_publication: number

  @ManyToMany(type => ThemePublication, theme => theme.publications)
  @JoinTable()
  themes: ThemePublication[]

  @Column()
  titre: string

  @Column()
  contenu: string

  @Column()
  date: Date

  @Column()
  nombre_vues: number

  @ManyToOne(type => Utilisateur, utilisateur => utilisateur.publications)
  utilisateur: Utilisateur
}