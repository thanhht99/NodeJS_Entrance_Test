import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    fullName: string;

    @Column({
        unique: true,
        nullable: false,
    })
    username: string;

    @Column({
        nullable: false,
    })
    password: string;

}
