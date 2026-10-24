import { Body, Controller, Get, Patch } from '@nestjs/common';
import { TestService } from './test.service.js';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  find() {
    return this.testService.find();
  }

  @Patch()
  setChecked(@Body() body: { checked?: unknown }) {
    return this.testService.setChecked(body.checked);
  }
}
