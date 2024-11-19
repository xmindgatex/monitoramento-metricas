// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';   

import { MetricsDashboardComponent } from './metrics-dashboard/metrics-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MetricsDashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }