import {Module} from '@nestjs/common';
import {AppController} from './app.controller.js';
import {AppService} from './app.service.js';
import {PlantModule} from "./modules/plant/plant.module.js";
import {TypeOrmModule} from "@nestjs/typeorm";
import {HouseModule} from "./modules/house/house.module.js";

@Module({
    imports: [PlantModule, HouseModule, TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'plant_mgmt',
        synchronize: true, //TODO: disable on prod
        autoLoadEntities: true,
    })],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
