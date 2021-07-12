import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

export enum toDoStatuses {
    new = "NEW",
    complete = "COMPLETE"
}

@Entity()
export class ToDo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    name: string;

    @Column({
        nullable: false,
    })
    description: string;

    @ManyToOne(() => User, user => user.todos)
    userId: User;

    @Column({
        type: "enum",
        enum: toDoStatuses,
        default: toDoStatuses.new
    })
    status: toDoStatuses

    @Column({ type: "timestamp", nullable: false, default: () => "CURRENT_TIMESTAMP" })
    dateOfCompletion: Date;

    @Column({ type: "timestamp", nullable: false, default: () => "CURRENT_TIMESTAMP" })
    dateOfCreation: Date;

    @Column({ type: "timestamp", nullable: false, default: () => "CURRENT_TIMESTAMP" })
    dateOfModification: Date;

}
