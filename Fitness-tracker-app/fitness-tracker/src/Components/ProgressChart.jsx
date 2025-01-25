 import React from 'react'
import { Bar } from 'react-chartjs-2'
import {  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,}from'chart.js'
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
  const ProgressChart = ({ exercises = [] }) => {
    
    if (exercises.length === 0) {
      return <p>No exercises available</p>;
    }

    const labels = exercises.map((exercise) => exercise.name);
    const data = {
      labels,
      datasets: [
        {
          label: 'Calories Burned',
          data: exercises.map((exercise) => exercise.calories),
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgb(61, 186, 186)',
          borderWidth: 1,
        },
      ],
    };
  
    const options = {
      responsive: true,
      plugins: {
        legend: { position: 'top' },
        title: {
          display: true,
          text: 'Progress Chart (Calories Burned)',
        },
      },
    };
  
    return <Bar data={data} options={options} />;
  };
  

export default ProgressChart
