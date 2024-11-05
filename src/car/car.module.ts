import { Module } from '@nestjs/common';
import { ConditionerModule } from 'src/conditioner/conditioner.module';
import { EngineModule } from 'src/engine/engine.module';
import { CarController } from './car.controller';

@Module({
  controllers: [CarController],
  providers: [],
  imports: [EngineModule, ConditionerModule],
})
export class CarModule {}
