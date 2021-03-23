
import { Options } from "highcharts";

export const donutChartOptions0: Options = {
  chart: {
    type: 'pie',
    plotShadow: false,
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      innerSize: '99%',
      borderWidth: 40,
      borderColor: '',
      slicedOffset: 20,
      dataLabels: {
        connectorWidth: 0,
      },
    },
  },
  title: {
    verticalAlign: 'middle',
    floating: true,
    text: '<strong>REVENUE</strong><br>200.000€',
  },
  legend: {
    align:'center',
alignColumns:true,
backgroundColor:undefined,
borderColor:'#999999',
borderRadius:0,
borderWidth:0,
  },
  series: [
    {
      type: 'pie',
      data: [
        { name: 'Tablet<br> 120.000€', y: 60, color: '#5FE824' },
        { name: 'Smartphone<br> 80.000€', y: 40, color: '#2B8704' },
      ],
    },
  ],
};