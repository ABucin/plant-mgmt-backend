import {Controller, Delete, Get, Inject, Param, Post} from "@nestjs/common";
import {FeatureService} from "./feature.service.js";
import {Feature} from "./feature.entity.js";

@Controller('api/v1/feature')
export class FeatureController {
    @Inject(FeatureService)
    private readonly featureService: FeatureService;

    @Get(':name')
    getFeature(@Param('name') name: string): Promise<Feature | null> {
        return this.featureService.findByName(name);
    }

    @Post(':name')
    activateFeature(@Param('name') name: string): Promise<void> {
        return this.featureService.update(name, true);
    }

    @Delete(':name')
    deactivateFeature(@Param('name') name: string): Promise<void> {
        return this.featureService.update(name, false);
    }
}