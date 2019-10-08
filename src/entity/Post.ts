import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Category } from "./Category";
import { User } from "./User";

@Entity()
export class Post {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    @Column("text")
    text: string;


    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date;


    @ManyToMany(type => Category, {
        cascade: true
    })
    @JoinTable()
    categories: Category[];

    @ManyToOne(type => User, user => user.posts)
    user: User

}