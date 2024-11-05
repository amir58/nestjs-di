import { Module } from '@nestjs/common';
import { BatteryModule } from 'src/battery/battery.module';
import { EngineService } from './engine.service';

@Module({
  controllers: [],
  providers: [EngineService],
  exports: [EngineService],
  imports: [BatteryModule],
})
export class EngineModule {}
