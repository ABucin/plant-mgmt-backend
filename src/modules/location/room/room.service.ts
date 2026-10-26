import {Injectable} from "@nestjs/common";
import {InsertResult, Repository, UpdateResult} from "typeorm";
import {Room} from "./room.entity.js";
import {InjectRepository} from "@nestjs/typeorm";
import {ResponseDto} from "../../utils/response.dto.js";
import {RoomDto} from "./room.dto.js";

@Injectable()
export class RoomService {
    @InjectRepository(Room)
    private repository: Repository<Room>;

    async findAll(): Promise<ResponseDto<Room>> {
        const repositoryData = await this.repository.findAndCount();

        return {
            count: repositoryData[1],
            data: repositoryData[0],
        }
    }

    create(room: RoomDto): Promise<InsertResult> {
        return this.repository.insert(room);
    }

    update(id: number, room: RoomDto): Promise<UpdateResult> {
        return this.repository.update(id, room);
    }
}