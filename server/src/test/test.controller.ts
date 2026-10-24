import { Body, Controller, Get, Patch } from '@nestjs/common';
import { SetCheckedDto } from './dto/set-checked.dto.js';
import { TestService } from './test.service.js';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  find() {
    return this.testService.find();
  }

  @Patch()
  setChecked(@Body() body: SetCheckedDto) {
    return this.testService.setChecked(body.checked);
  }
}
