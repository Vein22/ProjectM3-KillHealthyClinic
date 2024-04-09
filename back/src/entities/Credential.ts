import { Column } from "typeorm/decorator/columns/Column"
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn"
import { Entity } from "typeorm/decorator/entity/Entity"


@Entity({
    name:"credentials"
})

export class Credential {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100
    })
    username: string

    @Column({
        length: 100
    })
    password: string
}
