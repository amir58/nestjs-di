import { Module } from '@nestjs/common';
import { EngineModule } from 'src/engine/engine.module';
import { ConditionerService } from './conditioner.service';

@Module({
  controllers: [],
  providers: [ConditionerService],
  imports: [EngineModule],
  exports: [ConditionerService],
})
export class ConditionerModule {}
