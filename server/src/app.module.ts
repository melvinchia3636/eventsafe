import { Module } from '@nestjs/common';
import { HealthController } from './health.controller.js';
import { TestModule } from './test/test.module.js';

@Module({
  imports: [TestModule],
  controllers: [HealthController],
})
export class AppModule {}
