import { Module } from '@nestjs/common';
import { HealthController } from './controllers/health.controller.js';
import { TestController } from './controllers/test.controller.js';
import { HealthService } from './services/health.service.js';
import { TestService } from './services/test.service.js';

@Module({
  controllers: [HealthController, TestController],
  providers: [HealthService, TestService],
})
export class DevModule {}
