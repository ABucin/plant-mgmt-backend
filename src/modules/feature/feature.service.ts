import {Injectable} from "@nestjs/common";
import {Feature} from "./feature.entity.js";
import {Repository} from "typeorm";
import {EntityNotFoundException} from "../utils/exceptions.js";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class FeatureService {
    @InjectRepository(Feature)
    private repository: Repository<Feature>;

    async findByName(name: string): Promise<Feature> {
        const repositoryData = await this.repository.findOneBy({name});

        if (!repositoryData) {
            throw new EntityNotFoundException();
        }

        return repositoryData;
    }

    async update(name: string, enabled: boolean) {
        await this.repository.upsert({ name, enabled }, ['name']);
    }
}