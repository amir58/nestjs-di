import { Injectable } from '@nestjs/common';

@Injectable()
export class BatteryService {
  powerSupply() {
    return 'battery is working, you can start your engine';
  }
}
