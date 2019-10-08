import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Post } from "./Post";

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date;

    @OneToMany(type => Post, post => post.user)
    posts: Post[];

}