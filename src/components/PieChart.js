import React from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


const state = {
    labels: ['P1', 'P2', 'P3',
             'P4', 'P5'],
    datasets: [
      {
        label: 'Parameter',
        fill: false,
        lineTension: 0.5,
        backgroundColor: [
            'rgba(79,115,223,1)',
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(255, 50, 86)'
          ],
        //borderColor: 'rgba(0,96,255,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
        hoverOffset: 4,
        spacing:0
      }
    ]
  }



class PieChart extends React.Component {
    render() {
      return (
        <div>
          <Pie
            data={state}
           
            options={{
                responsive: true,
              title:{
                display:true,
                text:'Parameter',
                fontSize:20
              },
              legend:{
                display:false,
                position:'right'
              }
            }}
          />
        </div>
      );
    }
  }
  

export default PieChart