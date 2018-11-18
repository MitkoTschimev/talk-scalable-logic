import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsService } from './cats.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [CatsService]
})
export class CatsModule {}
