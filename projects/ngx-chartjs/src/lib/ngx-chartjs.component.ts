import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';

import {Chart, ChartDataSets, ChartOptions} from 'chart.js';

@Component({
  selector: 'ngx-charts',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <canvas #canvas></canvas>
  `,
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit, OnDestroy {
  @Input() options: ChartOptions = {};
  @Input() chartType: string;
  @Input() colors: Array<any>;
  @Input() legend: boolean;

  @Output() chartClick: EventEmitter<any> = new EventEmitter();
  @Output() chartHover: EventEmitter<any> = new EventEmitter();

  @ViewChild('canvas')
  canvas: ElementRef;

  private chart: Chart;
  private chartOptions: any;
  private _data: Array<ChartDataSets>;
  private _labels: Array<any> = [];

  constructor() {
  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.clear();
      this.chart.destroy();
      this.chart = null;
    }
  }

  @Input() set labels(labels: Array<any>) {
    this._labels = labels;
    if (this.data) {
      if (this.chart) {
        this.ngOnDestroy();
      }
      this.buildChart();

    }
  }

  get labels() {
    return this._labels;
  }

  @Input() set datasets(data: Array<ChartDataSets>) {
    this._data = data;
    if (data) {
      if (this.chart) {
        this.updateChart();
      } else {
        this.buildChart();
      }
    }
  }

  get data() {
    return this._data;
  }

  private buildChart(): void {
    const ctx = this.canvas.nativeElement.getContext('2d');
    const legend = this.legend ? {display: true} : {display: false};
    const hover = this.options.hover || {};
    const localClick = (event: any, active: Array<any>) => {
      this.chartClick.emit({event, active});
    };

    if (!hover.onHover) {
      hover.onHover = (active: any) => {
        if (active && !active.length) {
          return;
        }
        this.chartHover.emit({active});
      };
    }

    let datasets = this.data;
    if (this.colors && this.colors.length) {
      datasets = this.data.map((dataset, index) => ({
        ...dataset,
        ... this.colors[index],
      }));
    }

    const options = {
      ...this.options,
      legend,
      hover: this.options.hover || {},
      onClick: this.options.onClick || localClick,
    };

    this.chartOptions = {
      type: this.chartType,
      data: {
        labels: this.labels,
        datasets,
      },
      options,
    };
    this.chart = new Chart(ctx, this.chartOptions);
  }

  private updateChart(): void {
    this.chartOptions.data.datasets.forEach((dataset, i) => {
        dataset.data = this.data[i].data;
      }
    );
    this.chart.update();
  }
}
