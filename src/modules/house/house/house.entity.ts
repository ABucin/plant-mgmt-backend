import {Column, Entity, OneToMany, PrimaryGeneratedColumn, type Relation} from "typeorm";
import {Room} from "../room/room.entity.js";

@Entity()
export class House {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @OneToMany(() => Room, (room) => room.house, {cascade: true})
    rooms: Relation<Room[]>;
}