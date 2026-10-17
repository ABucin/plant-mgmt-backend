import {Column, Entity, ManyToOne, PrimaryGeneratedColumn, type Relation} from "typeorm";
import {House} from "../house/house.entity.js";

@Entity()
export class Room {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column({
        default: 50
    })
    humidity: number;
    @Column({
        default: 20
    })
    temperature: number;
    @ManyToOne(() => House, (house) => house.rooms, {onDelete: "CASCADE"})
    house: Relation<House>;
}