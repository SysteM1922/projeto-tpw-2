import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
@Component({
  selector: 'app-profilestats',
  templateUrl: './profilestats.component.html',
  styleUrls: ['./profilestats.component.css']
})
export class ProfilestatsComponent implements OnChanges {
  @Input() labels?: string[];
  @Input() data?: number[] | any;
  public barChartLegend = false;
  public barChartPlugins = [];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.labels = changes['labels'].currentValue;
    this.data = changes['data'].currentValue;
    this.barChartData = {
      labels: this.labels,
      datasets: [
        { data: this.data, label: 'Posts', backgroundColor: "#491D96" },
      ]
    };
  }

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: this.labels,
    datasets: [
      { data: this.data, label: 'Posts',  backgroundColor: "#491D96"},
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };
}
