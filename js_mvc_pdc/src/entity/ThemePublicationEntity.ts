import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export default class ThemePublicationEntity {

  @PrimaryGeneratedColumn()
  id_theme_publication: number

  @Column()
  titre: string

  
}