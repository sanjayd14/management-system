import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity("expenses")
export class Expense {
    @PrimaryGeneratedColumn()
    expense_id!: number;

    @Column({ type: "varchar", length: 100, nullable: true })
    category!: string;

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
