import {Column, Entity, OneToMany, PrimaryGeneratedColumn, type Relation} from "typeorm";
import {Room} from "../room/room.entity.js";

@Entity()
export class Location {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @OneToMany(() => Room, (room) => room.location, {cascade: true})
    rooms: Relation<Room[]>;
}