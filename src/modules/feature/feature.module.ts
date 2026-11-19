import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Feature} from "./feature.entity.js";
import {FeatureService} from "./feature.service.js";
import {FeatureController} from "./feature.controller.js";

@Module({
    imports: [TypeOrmModule.forFeature([Feature])],
    controllers: [FeatureController],
    providers: [FeatureService],
})
export class FeatureModule {
}