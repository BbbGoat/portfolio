import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'STACK LEVEL 🧪',
      },
    },
    scales: {
      y: {
        min: 0,
        max: 10,
      }
    }
};

const labels = ['HTML / CSS', 'React', 'Next.js', 'Vue.js', 'Javascript', 'Typescript', 'Node.js', 'Figma', 'Photoshop', 'Illustrator'];

export const data = {
    labels,
    datasets: [
      {
        label: 'Level',
        data: [9,9,9,7,9,6,5,8,9,9],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
};


const ChartComp = () => {
  return (
    <>
      <div>
        <Bar options={options} data={data} />
      </div>
    </>
  );
};

export default ChartComp;
