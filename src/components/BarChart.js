import React from 'react';
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const state = {
    labels: ['P1', 'P2', 'P3',
             'P4', 'P5'],
    datasets: [
      {
        label: 'Parameter',
        fill: false,
        lineTension: 0,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
          ],
        borderColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)'
        ],
        borderWidth: 0,
        data: [40, 25, 12, 21, 10]
      }
    ]
  }



class BarChart extends React.Component {
    render() {
      return (
        <div>
          <Bar
            data={state}
           
            options={{
                responsive: true,
              title:{
                display:true,
                text:'Parameter',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              },
              indexAxis: 'y',
              barThickness : 'flex'
            }}
          />
        </div>
      );
    }
  }
  

export default BarChart