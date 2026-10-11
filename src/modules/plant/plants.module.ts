import {Module} from "@nestjs/common";
import {PlantController} from "./plant.controller.js";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Plant} from "./plant.entity.js";
import {PlantService} from "./plant.service.js";

@Module({
    imports: [TypeOrmModule.forFeature([Plant])],
    controllers: [PlantController],
    providers: [PlantService],
})
export class PlantModule {
}