import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Location} from "./location/location.entity.js";
import {LocationService} from "./location/location.service.js";
import {LocationController} from "./location/location.controller.js";
import {RoomController} from "./room/room.controller.js";
import {RoomService} from "./room/room.service.js";
import {Room} from "./room/room.entity.js";

@Module({
    imports: [TypeOrmModule.forFeature([Location, Room])],
    controllers: [LocationController, RoomController],
    providers: [LocationService, RoomService],
})
export class LocationModule {
}