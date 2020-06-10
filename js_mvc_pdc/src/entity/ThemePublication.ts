import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'

import { Publication } from './Publication';

@Entity()
export class ThemePublication {

  @PrimaryGeneratedColumn()
  id_theme_publication: number

  @Column()
  titre: string

  @ManyToMany(type => Publication, publication => publication.themes)
  publications: Publication[]
}