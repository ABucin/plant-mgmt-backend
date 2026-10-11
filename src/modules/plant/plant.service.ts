import {Injectable} from "@nestjs/common";
import {InsertResult, Repository, UpdateResult} from "typeorm";
import {Plant} from "./plant.entity.js";
import {InjectRepository} from "@nestjs/typeorm";
import {PlantDto} from "./plant.dto.js";

@Injectable()
export class PlantService {
    @InjectRepository(Plant)
    private plantRepository: Repository<Plant>;

    findAll(): Promise<Plant[]> {
        return this.plantRepository.find();
    }

    create(plant: PlantDto): Promise<InsertResult> {
        return this.plantRepository.insert(plant);
    }

    update(id: number, plant: PlantDto): Promise<UpdateResult> {
        return this.plantRepository.update(id, plant);
    }
}