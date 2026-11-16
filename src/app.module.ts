import {Module} from '@nestjs/common';
import {AppController} from './app.controller.js';
import {AppService} from './app.service.js';
import {PlantModule} from "./modules/plant/plant.module.js";
import {TypeOrmModule} from "@nestjs/typeorm";
import {LocationModule} from "./modules/location/location.module.js";
import {ConfigModule, ConfigService} from "@nestjs/config";

@Module({
    imports: [PlantModule, LocationModule,
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: 'mysql',
                host: configService.get('DB_HOST'),
                port: configService.get('DB_PORT'),
                username: configService.get('DB_USER'),
                password: configService.get('DB_PASSWORD'),
                database: configService.get('DB_NAME'),
                synchronize: true, //TODO: disable on prod
                autoLoadEntities: true,
            })
        })],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
