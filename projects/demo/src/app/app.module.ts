import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DemoBarChartComponent} from './demo-bar-chart/demo-bar-chart.component';
import {ChartsModule} from '@reibo/ngx-chartjs';

@NgModule({
  declarations: [
    AppComponent,
    DemoBarChartComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
