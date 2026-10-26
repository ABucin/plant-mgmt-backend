import {Injectable} from "@nestjs/common";
import {Repository, UpdateResult} from "typeorm";
import {Room} from "./room.entity.js";
import {InjectRepository} from "@nestjs/typeorm";
import {ResponseDto} from "../../utils/response.dto.js";
import {RoomDto} from "./room.dto.js";

@Injectable()
export class RoomService {
    @InjectRepository(Room)
    private repository: Repository<Room>;

    async findAll(): Promise<ResponseDto<RoomDto>> {
        const repositoryData = await this.repository.findAndCount({
            relations: {
                location: true,
            }
        });

        return {
            count: repositoryData[1],
            data: repositoryData[0].map((this.toDto)),
        }
    }

    create(roomDto: RoomDto): Promise<Room> {
        const room: Room = this.repository.create(roomDto);
        return this.repository.save(room);
    }

    update(id: number, roomDto: RoomDto): Promise<UpdateResult> {
        const room: Room = this.repository.create(roomDto);

        return this.repository.update(id, room);
    }

    private toDto(room: Room): RoomDto {
        return {
            name: room.name,
            humidity: room.humidity,
            temperature: room.temperature,
            orientation: room.orientation,
            location: {
                id: room.location?.id,
                name: room.location?.name
            }
        };
    }
}