import {Component, OnInit} from '@angular/core';
import {Chart} from 'chart.js';

const color = Chart.helpers.color;
const min = -100;
const max = 100;
const randomScalingFactor = () => Math.floor(Math.random() * (max - min)) + min;
const chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
};

@Component({
  selector: 'app-demo-stacked-chart',
  templateUrl: './demo-stacked-chart.component.html',
  styleUrls: ['./demo-stacked-chart.component.css']
})
export class DemoStackedChartComponent implements OnInit {
  data = [{
    label: 'Dataset 1',
    backgroundColor: color(chartColors.red).alpha(0.5).rgbString(),
    borderWidth: 1,
    data: []
  }, {
    label: 'Dataset 2',
    backgroundColor: color(chartColors.blue).alpha(0.5).rgbString(),
    borderWidth: 1,
    data: []
  }];

  readonly chartColors = [
    color(chartColors.red).alpha(0.5).rgbString(),
    color(chartColors.blue).alpha(0.5).rgbString(),
    color(chartColors.orange).alpha(0.5).rgbString(),
    color(chartColors.yellow).alpha(0.5).rgbString(),
    color(chartColors.purple).alpha(0.5).rgbString(),
    color(chartColors.grey).alpha(0.5).rgbString(),
  ];

  labels = [];
  readonly _labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  readonly options = {
    responsive: true,
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart'
    }
  };

  readonly legend = true;

  readonly chartType = 'bar';

  constructor() {
  }

  ngOnInit() {
    this.updateYAxis();
    this.updateLabels();
  }

  randomize(): void {
    this.data = this.data.map(dataset => ({
      ...dataset,
      data: this.labels.map(() => randomScalingFactor())
    }));
  }

  updateLabels(): void {
    let totalLabels = Math.round(Math.random() * 5);
    while (totalLabels === this.data.length || totalLabels === 0) {
      totalLabels = Math.round(Math.random() * 5);
    }
    let data = [];
    for (let i = 0; i < totalLabels; i++) {
      data = [
        ...data,
        {
          label: `Dataset ${i}`,
          borderWidth: 1,
          data: []
        }
      ];
    }
    this.data = data;
    this.randomize();
  }

  updateYAxis(): void {
    let totalLabels = Math.round(Math.random() * this._labels.length);
    while (totalLabels === this.labels.length || totalLabels === 0) {
      totalLabels = Math.round(Math.random() * this._labels.length);
    }
    this.labels = this._labels.slice(0, totalLabels);
    this.randomize();
  }
}
