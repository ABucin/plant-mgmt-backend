import {Body, Controller, Get, Inject, Post} from "@nestjs/common";
import {Plant} from "./plant.entity.js";
import {PlantService} from "./plant.service.js";
import {PlantDto} from "./plant.dto.js";

@Controller('plant')
export class PlantController {
    @Inject(PlantService)
    private readonly plantService: PlantService;

    @Get()
    getPlants(): Promise<Plant[]> {
        return this.plantService.findAll();
    }

    @Post()
    createPlant(@Body() plant: PlantDto): Promise<Plant> {
        return this.plantService.create(plant);
    }
}