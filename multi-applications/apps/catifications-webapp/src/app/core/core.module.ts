import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsModule } from '@multi-applications/shared/cat-utils';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CatsModule
  ],
  declarations: []
})
export class CoreModule { }
