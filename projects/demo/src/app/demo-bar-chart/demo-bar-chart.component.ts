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
  selector: 'app-demo-bar-chart',
  templateUrl: './demo-bar-chart.component.html',
  styleUrls: ['./demo-bar-chart.component.css']
})
export class DemoBarChartComponent implements OnInit {
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
    {
      // primary
      backgroundColor: 'rgba(68,108,179,0.8)',
      borderColor: 'rgba(68,108,179,1)',
      pointBackgroundColor: 'rgba(68,108,179,1)',
      pointBorderColor: '#446CB3',
      pointHoverBackgroundColor: '#446CB3',
      pointHoverBorderColor: 'rgba(148,159,177,0.2)',
    },
    {
      // secondary
      backgroundColor: 'rgba(46, 204, 113,0.8)',
      borderColor: 'rgba(46, 204, 113,1)',
      pointBackgroundColor: 'rgba(46, 204, 113,1)',
      pointBorderColor: '#2ECC71',
      pointHoverBackgroundColor: '#2ECC71',
      pointHoverBorderColor: 'rgba(77,83,96,0.2)',
    }];
  readonly labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
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

  readonly legend = {
    position: 'top',
  };

  readonly chartType = 'bar';

  constructor() {
  }

  ngOnInit() {
    this.randomize();
  }

  randomize(): void {
    this.data = this.data.map(dataset => ({
      ...dataset,
      data: this.labels.map(() => randomScalingFactor())
    }));
    console.log(this.data);
  }

}
