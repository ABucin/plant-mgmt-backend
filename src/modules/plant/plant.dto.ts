import { RoomDto } from "../location/room/room.dto.js";

export class PlantDto {
    name: string;
    scientificName: string;
    wateredOn: Date;
    room: RoomDto;
}