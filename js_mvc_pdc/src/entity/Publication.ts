import { Column, Entity, OneToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

import ThemePublication from 'entity/ThemePublication'
import Utilisateur from 'entity/Utilisateur'

@Entity()
class Publication {
  @PrimaryGeneratedColumn()
  id_publication: number

  @OneToMany(type => ThemePublication, theme => theme.)
  theme: ThemePublication[]

  @Column('varchar')
  titre: string

  @Column('text')
  contenu: string

  @Column('datetime')
  date: Date

  @Column('int')
  nombre_vues: string

  @OneToOne(type => Utilisateur)
  utilisateur: Utilisateur
}

export default Publication