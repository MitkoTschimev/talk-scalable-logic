import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from '@multi-applications/shared/cat-utils';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  root(): Cat[] {
    return this.catsService.findAll();
  }
}
