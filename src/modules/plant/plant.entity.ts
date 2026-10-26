import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Plant {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    nameLatin: string;
    @Column({ type: "timestamp", precision: 6, nullable: true })
    wateredOn: Date;
}