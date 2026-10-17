import {Injectable} from "@nestjs/common";
import {InsertResult, Repository, UpdateResult} from "typeorm";
import {Plant} from "./plant.entity.js";
import {InjectRepository} from "@nestjs/typeorm";
import {PlantDto} from "./plant.dto.js";
import {ResponseDto} from "../utils/response.dto.js";

@Injectable()
export class PlantService {
    @InjectRepository(Plant)
    private repository: Repository<Plant>;

    async findAll(): Promise<ResponseDto<Plant>> {
        const repositoryData = await this.repository.findAndCount();
        return {
            count: repositoryData[1],
            data: repositoryData[0]
        };
    }

    create(plant: PlantDto): Promise<InsertResult> {
        return this.repository.insert(plant);
    }

    update(id: number, plant: PlantDto): Promise<UpdateResult> {
        return this.repository.update(id, plant);
    }
}