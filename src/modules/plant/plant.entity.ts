import {Column, Entity, ManyToOne, PrimaryGeneratedColumn, type Relation} from "typeorm";
import {Room} from "../location/room/room.entity.js";

@Entity()
export class Plant {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    scientificName: string;
    @Column({type: "timestamp", precision: 6, nullable: true})
    wateredOn: Date;
    @ManyToOne(() => Room, (room) => room.plants, {onDelete: "CASCADE"})
    room: Relation<Room>
}