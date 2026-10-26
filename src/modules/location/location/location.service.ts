import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Location} from "./location.entity.js";
import {InsertResult, Repository, UpdateResult} from "typeorm";
import {ResponseDto} from "../../utils/response.dto.js";
import {LocationDto} from "./location.dto.js";

@Injectable()
export class LocationService {
    @InjectRepository(Location)
    repository: Repository<Location>;

    async findAll(): Promise<ResponseDto<Location>> {
        const repositoryData = await this.repository.findAndCount({
            loadEagerRelations: false,
        });
        return {
            count: repositoryData[1],
            data: repositoryData[0],
        }
    }

    create(location: LocationDto): Promise<Location> {
        const locationEntity = this.repository.create(location);
        return this.repository.save(locationEntity);
    }

    update(id: number, location: LocationDto): Promise<UpdateResult> {
        return this.repository.update(id, location);
    }
}