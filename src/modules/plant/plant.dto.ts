import { RoomDto } from "../location/room/room.dto.js";

export class PlantDto {
    id: number;
    name: string;
    scientificName: string;
    wateredOn: Date;
    room: RoomDto;
}