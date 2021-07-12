import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { ToDo } from "./ToDo";

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

    @OneToMany(() => ToDo, todo => todo.userId)
    todos: ToDo[];

}
