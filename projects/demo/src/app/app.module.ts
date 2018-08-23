import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DemoBarChartComponent} from './demo-bar-chart/demo-bar-chart.component';
import {ChartsModule} from '@reibo/ngx-chartjs';
import { DemoStackedChartComponent } from './demo-stacked-chart/demo-stacked-chart.component';
import { DemoPieChartComponent } from './demo-pie-chart/demo-pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoBarChartComponent,
    DemoStackedChartComponent,
    DemoPieChartComponent
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
