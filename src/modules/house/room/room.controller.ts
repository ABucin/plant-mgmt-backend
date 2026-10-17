import {Body, Controller, Get, Inject, Param, Post, Put} from "@nestjs/common";
import {RoomService} from "./room.service.js";
import {ResponseDto} from "../../utils/response.dto.js";
import {Room} from "./room.entity.js";
import {InsertResult} from "typeorm";
import type {RoomDto} from "./room.dto.js";

@Controller('api/v1/room')
export class RoomController {
    @Inject(RoomService)
    private readonly roomService: RoomService;

    @Get()
    getRooms(): Promise<ResponseDto<Room>> {
        return this.roomService.findAll();
    }

    @Post()
    createRoom(@Body() room: RoomDto): Promise<InsertResult> {
        return this.roomService.create(room);
    }

    @Put(':id')
    updateRoom(@Param('id') id: number, @Body() room: RoomDto) {
        return this.roomService.update(id, room);
    }
}