import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {House} from "./house.entity.js";
import {InsertResult, Repository, UpdateResult} from "typeorm";
import {ResponseDto} from "../../utils/response.dto.js";
import {HouseDto} from "./house.dto.js";

@Injectable()
export class HouseService {
    @InjectRepository(House)
    repository: Repository<House>;

    async findAll(): Promise<ResponseDto<House>> {
        const repositoryData = await this.repository.findAndCount({
            loadEagerRelations: false,
        });
        return {
            count: repositoryData[1],
            data: repositoryData[0],
        }
    }

    create(house: HouseDto): Promise<House> {
        const houseEntity = this.repository.create(house);
        return this.repository.save(houseEntity);
    }

    update(id: number, house: HouseDto): Promise<UpdateResult> {
        return this.repository.update(id, house);
    }
}