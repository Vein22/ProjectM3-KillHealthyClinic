import { ManyToOne } from "typeorm"
import { Column } from "typeorm/decorator/columns/Column"
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn"
import { Entity } from "typeorm/decorator/entity/Entity"
import { User } from "./User"


@Entity({
    name:"turns"
})

export class Turn {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    date: string
    
    @Column()
    time: string

    @Column("integer")
    userId: number

    @Column()
    status: "active" | "cancelled"

    @ManyToOne(() => User, (user) => user.turns)
    user: User
}