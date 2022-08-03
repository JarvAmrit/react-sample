import React from 'react';
import {Line} from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const state = {
    labels: ['P1', 'P2', 'P3',
             'P4', 'P5'],
    datasets: [
      {
        label: 'Parameter',
        fill: false,
        lineTension: 0,
        backgroundColor: 'rgba(25,50,50,1)',
        borderColor: 'rgba(25,0,0,1)',
        borderWidth: 1,
        data: [0, 25, 12, 21, 10]
      }
    ]
  }



class LineChart extends React.Component {
    render() {
      return (
        <div>
          <Line
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
              }
            }}
          />
        </div>
      );
    }
  }
  

export default LineChart