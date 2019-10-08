import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Tree, TreeChildren, TreeParent } from "typeorm";

@Entity()
@Tree("closure-table")
export class Category {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;


    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date;

    @TreeChildren()
    children: Category[];

    @TreeParent()
    parent: Category;

}
