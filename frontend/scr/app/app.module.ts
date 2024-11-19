import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MetricsDashboardComponent } from './metrics-dashboard.component';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    AppComponent,
    MetricsDashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: MetricsDashboardComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }