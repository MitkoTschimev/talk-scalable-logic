import { Controller, Get } from '@nestjs/common';
import { catsList } from '../data/cats';

@Controller('cats')
export class CatsController {
  @Get()
  root(): any {
    return catsList;
  }
}
