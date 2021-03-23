
import { Options } from "highcharts";

export const donutChartOptions2: Options = {
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
    text: '<strong>VISITS</strong><br>600.000.000',
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
        { name: 'Tablet<br> 480.000.000', y: 80, color: '#D1BA1A' },
        { name: 'Smartphone<br> 120.000.000', y: 20, color: '#F48413' },
      ],
    },
  ],
};