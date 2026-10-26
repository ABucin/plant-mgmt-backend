import {Column, Entity, ManyToOne, PrimaryGeneratedColumn, type Relation} from "typeorm";
import {Location} from "../location/location.entity.js";

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
    @ManyToOne(() => Location, (location) => location.rooms, {onDelete: "CASCADE"})
    location: Relation<Location>;
}