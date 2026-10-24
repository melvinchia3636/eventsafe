import { Module } from '@nestjs/common';
import { DevModule } from './dev/dev.module.js';

@Module({
  imports: [DevModule],
})
export class AppModule {}
