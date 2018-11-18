import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';
import { TNSFrescoModule } from 'nativescript-fresco/angular';

import { AppRoutingModule } from './app-routing.module.tns';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component.tns';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [NativeScriptModule, AppRoutingModule, NativeScriptUIListViewModule, TNSFrescoModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {}
