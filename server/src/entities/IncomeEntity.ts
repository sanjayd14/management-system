import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity("income")
export class Income {
    @PrimaryGeneratedColumn()
    income_id!: number;

    @Column({ type: "varchar", length: 100, nullable: true })
    source!: string;

    @Column({ type: "int", nullable: true })
    order_id!: number;

    @Column({ type: "numeric", precision: 10, scale: 2 })
    amount!: number;

    @Column({ type: "date", default: () => "CURRENT_DATE" })
    date!: Date;

    @Column({ type: "text", nullable: true })
    notes!: string;

    @Column({ type: "int", nullable: true })
    created_by!: number;

    @CreateDateColumn()
    created_at!: Date;
}
