import { Controller, Get } from '@nestjs/common';
import { HealthService } from '../services/health.service.js';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  check() {
    return this.healthService.check();
  }
}
