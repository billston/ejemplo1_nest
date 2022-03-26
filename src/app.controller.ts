import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('gatos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hola')
  getHello(): string {
    return this.appService.getHello();
  }
}
