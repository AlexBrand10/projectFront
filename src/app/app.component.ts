import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { donutChartOptions } from '../app/data/values';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chart = new Chart(donutChartOptions);
}
