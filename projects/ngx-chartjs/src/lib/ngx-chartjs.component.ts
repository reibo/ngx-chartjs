import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';

import {Chart, ChartDataSets, ChartOptions} from 'chart.js';

@Component({
  selector: 'ngx-charts',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <canvas #canvas></canvas>
  `,
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit, OnDestroy, OnChanges {
  @Input() options: ChartOptions = {};
  @Input() chartType: string;
  @Input() colors: Array<any>;
  @Input() legend: boolean;

  @Output() chartClick: EventEmitter<any> = new EventEmitter();
  @Output() chartHover: EventEmitter<any> = new EventEmitter();

  @ViewChild('canvas', { static: true })
  canvas: ElementRef;

  private chart: Chart;
  private chartOptions: any;
  private localOptions: any = {scales: {xAxes: [{}], yAxes: [{ticks: {}}]}};
  private _data: Array<ChartDataSets>;
  private _pie: boolean;
  @Input() labels: Array<string>;

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

  @Input() set datalabels(datalabels: boolean | any){
    if(!datalabels){
      this.localOptions = {
        ...this.localOptions,
        plugins: {
          datalabels: {
            display: false,
          },
        },
      };
    }
  }
  @Input() set stacked(stacked: boolean) {
    if (stacked) {
      this.chartType = 'bar';
      this.localOptions = {
        ...this.localOptions,
        scales: {
          xAxes: this.localOptions.scales.yAxes.map(yAxes => ({...yAxes, stacked: true})),
          yAxes: this.localOptions.scales.yAxes.map(yAxes => ({...yAxes, stacked: true}))
        },
      };
    }
  }

  @Input() set pie(pie: boolean) {
    this._pie = pie;
    if (pie) {
      this.chartType = 'pie';
      this.localOptions = {
        ...this.localOptions,
        scales: null,
      };
    }
  }

  get pie() {
    return this._pie;
  }

  @Input() set beginAtZero(beginAtZero: boolean) {
    this.localOptions = {
      ...this.localOptions,
      scales: {
        ...this.localOptions.scales,
        yAxes: this.localOptions.scales.yAxes.map(yAxes => ({...yAxes, ticks: {...yAxes.ticks, beginAtZero}}))
      }
    };
  }

  ngOnChanges(values: any): void {
    if (values.datasets || values.label) {
      if (!this.chart) {
        this.buildChart();
      } else {
        this.updateChart();
      }
    }
  }

  @Input() set animation(animation: boolean | number) {
    if (!animation) {
      this.localOptions = {
        ...this.localOptions,
        animation: {
          duration: 0
        }
      };
    } else {
      this.localOptions = {
        ...this.localOptions,
        animation: {
          duration: animation
        }
      };
    }
  }

  @Input() set datasets(data: Array<ChartDataSets>) {
    this._data = data;
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

    const options = {
      ...this.localOptions,
      ...this.options,
      legend,
      hover: this.options.hover || {},
      onClick: this.options.onClick || localClick,
    };

    this.chartOptions = {
      type: this.chartType,
      data: {
        labels: this.labels,
        datasets: this.addColorsToDataset(this.data),
      },
      options,
    };
    this.chart = new Chart(ctx, this.chartOptions);
  }

  private updateChart(): void {
    this.chartOptions.data.datasets = this.addColorsToDataset(this.data);
    this.chartOptions.data.labels = this.labels;
    this.chart.update();
  }

  private addColorsToDataset(datasets: Array<any>): any {
    if (datasets && this.colors && this.colors.length) {
      return datasets.map((dataset, index) => {
        let colors = this.colors[index];
        if (this._pie) {
          colors = {
            backgroundColor: this.colors
          };
        } else if (!colors.backgroundColor) {
          colors = {
            backgroundColor: colors
          };
        }
        return {
          ...dataset,
          ...colors
        };
      });
    }
    return datasets;
  }
}
