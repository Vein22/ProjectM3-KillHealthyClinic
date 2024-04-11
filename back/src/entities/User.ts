import { JoinColumn, OneToMany, OneToOne } from "typeorm"
import { Column } from "typeorm/decorator/columns/Column"
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn"
import { Entity } from "typeorm/decorator/entity/Entity"
import { Credential } from "./Credential"
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

    @Column()
    username: string

    @Column()
    password: string

    @OneToMany(()=> Turn, (turn => turn.user))
    turns: Turn[]

    @OneToOne(() => Credential, (credential => credential.user))
    @JoinColumn()
    credential: Credential;
  }
  