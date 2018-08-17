import {NgModule} from '@angular/core';
import {ChartsComponent} from './ngx-chartjs.component';

import 'chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.js';

@NgModule({
  imports: [],
  declarations: [ChartsComponent],
  exports: [ChartsComponent]
})
export class ChartsModule {
}
