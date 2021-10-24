import {Line } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 16,
    color:'#f0933d',
    padding: '3px',
    borderBottom: '1px solid #d3d3d3',
    fontWeight: '600',
  },
  linediv: {
  	    height: '300px !important'
  }
}));
const data = {
  labels: ["21 April","22 April","23 April","24 April",
        "25 April","26 April","27 April","28 April"],
  datasets: [
    {
      label: 'Clicks',
      data: [2916, 2206, 2742, 2851, 3490, 3282, 3121, 4034],
      fill: false,
      backgroundColor: '#5e9af4',
      borderColor: '#5e9af4',
	  pointStyle: 'circle',
	  yAxis: 0,
	  marker: {
            symbol: 'circle'
        },
        tooltips: {
            pointFormat: '<p class="mb-1 pt-1"><b style="color:{series.color}">•</b> <small class="text-dark pr-3">Clicks</small> <small class=" pull-right">{point.y}</small></p>'
        },
    },
    {
      label: 'Cost',
      data: [2342, 5345, 3988, 1169, 5112, 2452, 2400, 2727],
      fill: false,
      backgroundColor: '#a7c9e9',
      borderColor: '#a7c9e9',
      pointStyle:'circle',
    },
    {
      label: 'Impr',
      data: [3934, 5203, 5777, 6658, 6031, 3631, 4733, 6175],
      fill: false,
      backgroundColor: '#868688',
      borderColor: '#868688',
      pointStyle:'circle',
    },
    {
      label: 'Conv',
      data: [12, 10, 20, 10, 30, 15, 10, 20],
      fill: false,
      backgroundColor: '#b3eaa8',
      borderColor: '#b3eaa8',
      pointStyle:'circle',
    },
    {
      label: 'CTR',
      data: [10, 20, 10, 40, 20, 50, 10, 12],
      fill: false,
      backgroundColor: '#f0be94',
      borderColor: '#f0be94',
      pointStyle:'circle',
    },
    {
      label: 'CPL',
      data: [1.2, 1.0, 2.0, 1.0, 3.0, 1.5, 1.0, 2.0],
      fill: false,
      backgroundColor: '#aaace7',
      borderColor: '#aaace7',
      pointStyle:'circle',
    },
    {
      label: 'CVR',
      data: [5.2, 7.0, 4.5, 1.0, 3.0, 7,5, 6.0],
      fill: false,
      backgroundColor: '#ec94aa',
      borderColor: '#ec94aa',
      pointStyle:'circle',
    },
    {
      label: 'CPC',
      data: [2.2, 8.0, 5.5, 1.2, 3.5, 5,5, 6.5],
      fill: false,
      backgroundColor: '#e4da90',
      borderColor: '#e4da90',
      pointStyle: 'circle'
    },
  ],
};

const options = {
	plugins: {
    legend: {
    	display: true,
    	fontColor: "red",
      labels: {
        usePointStyle: true,
        boxWidth: 5,
      fontSize: 25,
      
      }
    }
  },
  legend: {
    labels: {
      boxWidth: 50,
      fontSize: 25,
      fontColor: "red",

    }
  },
  scales: {
    yAxis: [
        { // Primary yAxis
           title:{text: ''} 
        },
        { // Secondary yAxis
           title:{ text: ''},
            opposite: true
        }],
  },
  responsive: true,
  maintainAspectRatio: false,
};

function LineChart(){
	const classes = useStyles();
	return (
  <>
    <div className='header'>
      <h1 className={classes.title}>Campaigns</h1>
    </div>
    <div className={classes.linediv}>
    <Line data={data} options={options} />
    </div>
  </>
  );
};
export default LineChart