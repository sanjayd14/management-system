import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity("orders")
export class Order {
    @PrimaryGeneratedColumn()
    order_id!: number;

    @Column({ type: "int", nullable: true })
    client_id!: number;

    @Column({ type: "text", nullable: true })
    description!: string;

    @Column({ type: "date", default: () => "CURRENT_DATE" })
    order_date!: Date;

    @Column({ type: "date", nullable: true })
    due_date!: Date;

    @Column({ type: "varchar", length: 50, default: "pending" })
    status!: "pending" | "in-progress" | "completed";

    @Column({ type: "numeric", precision: 10, scale: 2, nullable: true })
    total_amount!: number;

    @Column({ type: "int", nullable: true })
    created_by!: number;

    @CreateDateColumn()
    created_at!: Date;
}
