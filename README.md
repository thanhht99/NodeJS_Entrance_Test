# NodeJS_Entrance_Test

npm run build

open cmd
mysql -u root -p

* Input your password

mysql> CREATE DATABASE <database name>;
mysql> exit


export enum UserRole {
    ADMIN = "admin",
    EDITOR = "editor",
    GHOST = "ghost"
}

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.GHOST
    })
    role: UserRole

}