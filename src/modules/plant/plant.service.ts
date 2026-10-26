import {Injectable} from "@nestjs/common";
import {Repository, UpdateResult} from "typeorm";
import {Plant} from "./plant.entity.js";
import {InjectRepository} from "@nestjs/typeorm";
import {PlantDto} from "./plant.dto.js";
import {ResponseDto} from "../utils/response.dto.js";

@Injectable()
export class PlantService {
    @InjectRepository(Plant)
    private repository: Repository<Plant>;

    async findAll(): Promise<ResponseDto<PlantDto>> {
        const repositoryData = await this.repository.findAndCount();
        return {
            count: repositoryData[1],
            data: repositoryData[0].map((this.toDto)),
        };
    }

    create(plantDto: PlantDto): Promise<Plant> {
        const plant = this.repository.create(plantDto);
        return this.repository.save(plant);
    }

    update(id: number, plant: PlantDto): Promise<UpdateResult> {
        return this.repository.update(id, plant);
    }

    private toDto(plant: Plant): PlantDto {
        return {
            name: plant.name,
            nameLatin: plant.nameLatin,
            wateredOn: plant.wateredOn
        };
    }
}