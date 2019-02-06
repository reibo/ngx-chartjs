# ngx-chartjs 
[![npm](https://img.shields.io/npm/v/%40reibo%2Fngx-chartjs.svg?style=flat-square)](https://www.npmjs.com/package/%40reibo%2Fngx-chartjs)
![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)
[![npm](https://img.shields.io/npm/dt/%40reibo%2Fngx-chartjs.svg?style=flat-square)](https://www.npmjs.com/package/%40reibo%2Fngx-chartjs)


[![CircleCI](https://img.shields.io/circleci/project/github/reibo/ngx-chartjs.svg)](https://circleci.com/gh/reibo/ngx-chartjs)
[![CircleCI](https://img.shields.io/codecov/c/github/reibo/ngx-chartjs.svg)](https://codecov.io/gh/reibo/ngx-chartjs)


[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

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
