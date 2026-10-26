import {Column, Entity, ManyToOne, PrimaryGeneratedColumn, type Relation} from "typeorm";
import {Location} from "../location/location.entity.js";
import {Orientation} from "./room.enum.js";

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
    @Column({
        type: "enum",
        enum: Orientation,
        default: Orientation.SOUTH,
    })
    orientation: Orientation;
    @ManyToOne(() => Location, (location) => location.rooms, {onDelete: "CASCADE"})
    location: Relation<Location>;
}