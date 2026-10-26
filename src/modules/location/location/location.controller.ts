import {Body, Controller, Get, Inject, Param, Post, Put} from "@nestjs/common";
import {LocationService} from "./location.service.js";
import {ResponseDto} from "../../utils/response.dto.js";
import {UpdateResult} from "typeorm";
import type {LocationDto} from "./location.dto.js";

@Controller('api/v1/location')
export class LocationController {
    @Inject(LocationService)
    private readonly locationService: LocationService;

    @Get()
    getLocations(): Promise<ResponseDto<LocationDto>> {
        return this.locationService.findAll();
    }

    @Post()
    createLocation(@Body() location: LocationDto): Promise<LocationDto> {
        return this.locationService.create(location);
    }

    @Put(':id')
    updateLocation(@Param('id') id: number, @Body() location: LocationDto): Promise<UpdateResult> {
        return this.locationService.update(id, location);
    }
}