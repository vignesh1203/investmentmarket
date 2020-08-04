import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
// import * as pluginAnnotations from 'chartjs-plugin-annotation';
@Component({
  selector: 'app-gold-list',
  templateUrl: './gold-list.component.html',
  styleUrls: ['./gold-list.component.css'],
})
export class GoldListComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Series C', yAxisID: 'y-axis-1' }
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  // public lineChartPlugins = [pluginAnnotations];

  samplejson = [
    {
      _id: '5f297f195b5a8800249dd65e',
      session: 'PM',
      amountfor22: 5202,
      amountfor24: 5462,
      createdagent: 'IM0001',
      date: '2020-08-04T00:00:00.000Z',
      createdAt: '2020-08-04T15:30:33.977Z',
      updatedAt: '2020-08-04T15:30:33.977Z',
      __v: 0,
    },
    {
      _id: '5f297ef85b5a8800249dd65d',
      session: 'PM',
      amountfor22: 5199,
      amountfor24: 5458,
      createdagent: 'IM0001',
      date: '2020-08-03T00:00:00.000Z',
      createdAt: '2020-08-04T15:30:00.872Z',
      updatedAt: '2020-08-04T15:30:00.872Z',
      __v: 0,
    },
    {
      _id: '5f297ee45b5a8800249dd65c',
      session: 'PM',
      amountfor22: 5196,
      amountfor24: 5456,
      createdagent: 'IM0001',
      date: '2020-08-02T00:00:00.000Z',
      createdAt: '2020-08-04T15:29:40.221Z',
      updatedAt: '2020-08-04T15:29:40.221Z',
      __v: 0,
    },
    {
      _id: '5f297ede5b5a8800249dd65b',
      session: 'PM',
      amountfor22: 5196,
      amountfor24: 5456,
      createdagent: 'IM0001',
      date: '2020-08-01T00:00:00.000Z',
      createdAt: '2020-08-04T15:29:34.295Z',
      updatedAt: '2020-08-04T15:29:34.295Z',
      __v: 0,
    },
    {
      _id: '5f297e725b5a8800249dd65a',
      session: 'PM',
      amountfor22: 5150,
      amountfor24: 5406,
      createdagent: 'IM0001',
      date: '2020-07-31T00:00:00.000Z',
      createdAt: '2020-08-04T15:27:47.001Z',
      updatedAt: '2020-08-04T15:27:47.001Z',
      __v: 0,
    },
    {
      _id: '5f297e4b5b5a8800249dd659',
      session: 'PM',
      amountfor22: 5093,
      amountfor24: 5348,
      createdagent: 'IM0001',
      date: '2020-07-30T00:00:00.000Z',
      createdAt: '2020-08-04T15:27:07.368Z',
      updatedAt: '2020-08-04T15:27:07.368Z',
      __v: 0,
    },
    {
      _id: '5f297e395b5a8800249dd658',
      session: 'PM',
      amountfor22: 5075,
      amountfor24: 5328,
      createdagent: 'IM0001',
      date: '2020-07-29T00:00:00.000Z',
      createdAt: '2020-08-04T15:26:49.130Z',
      updatedAt: '2020-08-04T15:26:49.130Z',
      __v: 0,
    },
    {
      _id: '5f297e2b5b5a8800249dd657',
      session: 'PM',
      amountfor22: 5037,
      amountfor24: 5289,
      createdagent: 'IM0001',
      date: '2020-07-28T00:00:00.000Z',
      createdAt: '2020-08-04T15:26:35.202Z',
      updatedAt: '2020-08-04T15:26:35.202Z',
      __v: 0,
    },
    {
      _id: '5f297e075b5a8800249dd656',
      session: 'PM',
      amountfor22: 5013,
      amountfor24: 5262,
      createdagent: 'IM0001',
      date: '2020-07-27T00:00:00.000Z',
      createdAt: '2020-08-04T15:25:59.313Z',
      updatedAt: '2020-08-04T15:25:59.313Z',
      __v: 0,
    },
    {
      _id: '5f297df15b5a8800249dd655',
      session: 'PM',
      amountfor22: 4904,
      amountfor24: 5148,
      createdagent: 'IM0001',
      date: '2020-07-26T00:00:00.000Z',
      createdAt: '2020-08-04T15:25:37.212Z',
      updatedAt: '2020-08-04T15:25:37.212Z',
      __v: 0,
    },
    {
      _id: '5f297dd25b5a8800249dd654',
      session: 'PM',
      amountfor22: 4904,
      amountfor24: 5148,
      createdagent: 'IM0001',
      date: '2020-07-25T00:00:00.000Z',
      createdAt: '2020-08-04T15:25:06.631Z',
      updatedAt: '2020-08-04T15:25:06.631Z',
      __v: 0,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  calculateDifference22(index) {
    for (let j = 0; j <= this.samplejson.length; j++) {
      if (this.samplejson[index + 1].amountfor22 !== undefined) {
        const current22amount = this.samplejson[index].amountfor22;
        const next22amount = this.samplejson[index + 1].amountfor22;
        return current22amount - next22amount;
      }
    }
  }
  calculateDifference24(index) {
    for (let j = 0; j <= this.samplejson.length; j++) {
      if (this.samplejson[index + 1].amountfor24 !== undefined) {
        const current24amount = this.samplejson[index].amountfor24;
        const next24amount = this.samplejson[index + 1].amountfor24;
        return current24amount - next24amount;
      }
    }
  }
}
