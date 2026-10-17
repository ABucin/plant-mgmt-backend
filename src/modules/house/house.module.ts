import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {House} from "./house/house.entity.js";
import {HouseService} from "./house/house.service.js";
import {HouseController} from "./house/house.controller.js";
import {RoomController} from "./room/room.controller.js";
import {RoomService} from "./room/room.service.js";
import {Room} from "./room/room.entity.js";

@Module({
    imports: [TypeOrmModule.forFeature([House, Room])],
    controllers: [HouseController, RoomController],
    providers: [HouseService, RoomService],
})
export class HouseModule {
}