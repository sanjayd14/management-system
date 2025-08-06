import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BaseEntity } from "typeorm";

@Entity("users")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    user_id!: number;

    @Column({ type: "varchar", length: 100 })
    name!: string;

    @Column({ type: "varchar", length: 100, unique: true })
    username!: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    password!: string;

    @Column({ type: "varchar", length: 50 })
    role!: "admin" | "employee" | "owner";

    @CreateDateColumn()
    created_at!: Date;
}
