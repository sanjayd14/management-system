import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity("clients")
export class Client {
    @PrimaryGeneratedColumn()
    client_id!: number;

    @Column({ type: "varchar", length: 100 })
    name!: string;

    @Column({ type: "varchar", length: 20, nullable: true })
    phone!: string;

    @Column({ type: "text", nullable: true })
    address!: string;

    @CreateDateColumn()
    created_at!: Date;
}
