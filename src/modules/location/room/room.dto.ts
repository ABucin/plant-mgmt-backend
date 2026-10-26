import {Orientation} from "./room.enum.js";

export class RoomDto {
    name: string;
    humidity: number;
    temperature: number;
    orientation: Orientation;
    location: RoomLocationDto;
}

export class RoomLocationDto {
    id: number;
    name: string
}