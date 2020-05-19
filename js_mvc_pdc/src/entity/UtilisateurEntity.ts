import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
class Utilisateur {
  
  @PrimaryGeneratedColumn()
  id_utilisateur: number

  @Column()
  pseudonyme: string

  @Column()
  mot_de_passe: string

  @Column()
  jeton: string
}

export default Utilisateur