import React from 'react';
import { Line } from 'react-chartjs-2';

const Graph = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'My Data',
        data: [12, 19, 3, 5, 2],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        type: 'linear', // Use 'linear' scale type
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Graph Example</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;
