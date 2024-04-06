import { JoinColumn, OneToMany, OneToOne } from "typeorm"
import { Column } from "typeorm/decorator/columns/Column"
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn"
import { Entity } from "typeorm/decorator/entity/Entity"
import { Turn } from "./Turn"


@Entity({
    name:"users"
})

export class User {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({
        length: 100
    })
    name: string

    @Column()
    email: string

    @Column("integer")
    birthdate: number

    @Column()
    nDni: string

    @Column("integer")
    credentialsId: number

    @OneToMany(()=> Turn, (turn => turn.user))
    turns: Turn[]
    // @OneToOne(() => Turn)
    // @JoinColumn()
    // turn: Turn 
  }
  