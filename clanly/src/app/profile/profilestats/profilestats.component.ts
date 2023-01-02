import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
@Component({
  selector: 'app-profilestats',
  templateUrl: './profilestats.component.html',
  styleUrls: ['./profilestats.component.css']
})
export class ProfilestatsComponent {
  public barChartLegend = false;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Clan 1', 'Clan 2', 'Clan 3', 'Clan 4', 'Clan 5', ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56 ], label: 'Posts',  backgroundColor: "#491D96"},
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };
}
