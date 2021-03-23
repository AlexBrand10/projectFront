
import { Options } from "highcharts";

export const donutChartOptions1: Options = {
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
    text: '<strong>IMPRESIONS</strong><br>50.000.000',
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
        { name: 'Tablet<br> 20.000.000', y: 40, color: '#3EBEFA' },
        { name: 'Smartphone<br> 30.000.000', y: 60, color: '#145BAB' },
      ],
    },
  ],
};