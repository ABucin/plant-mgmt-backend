import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Location} from "./location.entity.js";
import {Repository, UpdateResult} from "typeorm";
import {ResponseDto} from "../../utils/response.dto.js";
import {LocationDto} from "./location.dto.js";

@Injectable()
export class LocationService {
    @InjectRepository(Location)
    repository: Repository<Location>;

    async findAll(): Promise<ResponseDto<LocationDto>> {
        const repositoryData = await this.repository.findAndCount({
            loadEagerRelations: false,
        });
        return {
            count: repositoryData[1],
            data: repositoryData[0].map((this.toDto)),
        }
    }

    create(locationDto: LocationDto): Promise<LocationDto> {
        const location = this.repository.create(locationDto);
        return this.repository.save(location);
    }

    update(id: number, location: LocationDto): Promise<UpdateResult> {
        return this.repository.update(id, location);
    }

    private toDto(location: Location): LocationDto {
        return {
            name: location.name,
            rooms: location.rooms,
        };
    }
}