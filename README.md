# ngx-chartsjs [![npm version](https://badge.fury.io/js/%40reibo%2Fngx-chartjs.svg)](https://badge.fury.io/js/%40reibo%2Fngx-chartjs) [![npm downloads](https://img.shields.io/npm/dm/@reibo/ngx-chartjs.svg)](https://npmjs.org/@reibo/ngx-chartjs) 
Beautiful charts for Angular 2,4,5,6 based on Chart.js

## Usage
### Installation
1. Install using npm
```bash
npm install @reibo/ngx-chartjs --save
```
or yarn
```bash
yarn add @reibo/ngx-chartjs
```
2. Install chart.js and chart.js typings
```bash
npm install chart.js --save
npm install @types/chart.js -D
```
or yarn
```bash
yarn add chart.js 
yarn add @types/chart.js -D
```
###Demo
Demo code can be found [/projects/demo/src](projects/demo/src)  

###Api
####Import
```typescript
import { ChartsModule } from '@reibo/ngx-chartjs';

@NgModule({
  imports: [
    ChartsModule,
    ...
  ],
  ...
})
export class MyModule {}

```
####Usage in your html
```html
<ngx-charts
      [datasets]="data"
      [labels]="labels"
      [options]="options"
      [legend]="legend"
      [colors]="chartColors"
      [chartType]="chartType"></ngx-charts>
```
One component can be used for all chart types of chart.js
- `datasets` (`Array<{data: Array<number[]> | number[], label: string}>`) - set of points of the chart
- `labels` (`?Array<any>`) - x axis labels. It's necessary for charts: `line`, `bar` and `radar`. And just labels (on hover) for charts: `polarArea`, `pie` and `doughnut`
- `chartType` (`?string`) - indicates the type of charts, it can be: `line`, `bar`, `radar`, `pie`, `polarArea`, `doughnut`
- `options` (`?any`) - chart options (as from [Chart.js documentation](http://www.chartjs.org/docs/))
- `colors` (`?Array<any>`) - data colors, will use default and|or random colors if not specified (see below)
- `legend`: (`?boolean=false`) - if true show legend below the chart, otherwise not be shown


#### Colors

There are a set several default colors. Colors can be replaced using the `colors` attribute. If there is more data than colors, colors are generated randomly.
