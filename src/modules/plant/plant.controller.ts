import {Body, Controller, Get, Inject, Param, Post, Put} from "@nestjs/common";
import {PlantService} from "./plant.service.js";
import {PlantDto} from "./plant.dto.js";
import {UpdateResult} from "typeorm";
import {ResponseDto} from "../utils/response.dto.js";
import {Plant} from "./plant.entity.js";

@Controller('api/v1/plant')
export class PlantController {
    @Inject(PlantService)
    private readonly plantService: PlantService;

    @Get()
    getPlants(): Promise<ResponseDto<PlantDto>> {
        return this.plantService.findAll();
    }

    @Post()
    createPlant(@Body() plant: PlantDto): Promise<Plant> {
        return this.plantService.create(plant);
    }

    @Put(':id')
    updatePlant(@Param('id') id: number, @Body() plant: PlantDto): Promise<UpdateResult> {
        return this.plantService.update(id, plant);
    }
}