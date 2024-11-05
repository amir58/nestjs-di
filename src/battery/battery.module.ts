import { Module } from '@nestjs/common';
import { BatteryService } from './battery.service';

@Module({
  controllers: [],
  providers: [BatteryService],
  exports: [BatteryService],
})
export class BatteryModule {}
