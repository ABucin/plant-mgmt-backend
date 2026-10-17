import {Body, Controller, Get, Inject, Param, Post, Put} from "@nestjs/common";
import {HouseService} from "./house.service.js";
import {ResponseDto} from "../../utils/response.dto.js";
import {House} from "./house.entity.js";
import {InsertResult, UpdateResult} from "typeorm";
import type {HouseDto} from "./house.dto.js";

@Controller('api/v1/house')
export class HouseController {
    @Inject(HouseService)
    private readonly houseService: HouseService;

    @Get()
    getHouses(): Promise<ResponseDto<House>> {
        return this.houseService.findAll();
    }

    @Post()
    createHouse(@Body() house: HouseDto): Promise<House> {
        return this.houseService.create(house);
    }

    @Put(':id')
    updateHouse(@Param('id') id: number, @Body() house: HouseDto): Promise<UpdateResult> {
        return this.houseService.update(id, house);
    }
}