import {Injectable} from "@nestjs/common";
import {Repository, UpdateResult} from "typeorm";
import {Plant} from "./plant.entity.js";
import {InjectRepository} from "@nestjs/typeorm";
import {PlantDto} from "./plant.dto.js";
import {ResponseDto} from "../utils/response.dto.js";
import {EntityNotFoundException} from "../utils/exceptions.js";

@Injectable()
export class PlantService {
    @InjectRepository(Plant)
    private repository: Repository<Plant>;

    async findById(id: number): Promise<PlantDto> {
        const repositoryData = await this.repository.findOneBy({id});
        if (!repositoryData) {
            throw new EntityNotFoundException();
        }
        return this.toDto(repositoryData);
    }

    async findAll(): Promise<ResponseDto<PlantDto>> {
        const repositoryData = await this.repository.findAndCount({
            relations: {
                room: true,
            }
        });
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
            id: plant.id,
            name: plant.name,
            scientificName: plant.scientificName,
            wateredOn: plant.wateredOn,
            room: plant.room,
        };
    }
}