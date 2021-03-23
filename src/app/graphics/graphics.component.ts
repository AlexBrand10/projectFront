import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { donutChartOptions0 } from '../data/revenue';
import { donutChartOptions1 } from '../data/impresions';
import { donutChartOptions2 } from '../data/visits';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css']
})
export class GraphicsComponent implements OnInit {

  chart0 = new Chart(donutChartOptions0);
  chart1 = new Chart(donutChartOptions1);
  chart2 = new Chart(donutChartOptions2);

  constructor() { }

  ngOnInit(): void {
  }

}
