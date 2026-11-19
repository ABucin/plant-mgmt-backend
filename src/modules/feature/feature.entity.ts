import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class Feature {
    @PrimaryColumn()
    name: string;
    @Column()
    enabled: boolean;
}