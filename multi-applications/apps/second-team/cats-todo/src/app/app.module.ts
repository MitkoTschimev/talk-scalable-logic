import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { TodolistComponent } from './todolist/todolist.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TodosModule } from '@multi-applications/shared/cat-utils';
import { HttpClientModule } from '@angular/common/http';
import { SecondTeamUtilsModule } from '@multi-applications/second-team/utils';

@NgModule({
  declarations: [AppComponent, TodolistComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    DragDropModule,
    TodosModule,
    HttpClientModule,
    SecondTeamUtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
