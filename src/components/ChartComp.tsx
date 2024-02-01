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
import styles from './ChartComp.module.scss'

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
        text: 'TECH STACK 🧪',
      },
    },
    scales: {
      y: {
        min: 0,
        max: 10,
      }
    },
    animation: {
      duration: 1000,
    }
};

const labels = ['HTML / CSS', 'Javascript', 'React', 'Next.js', 'Vue.js', 'Typescript', 'Node.js', 'Figma', 'Photoshop', 'Illustrator'];

export const data = {
    labels,
    datasets: [
      {
        label: 'Level',
        data: [9,9,9,9,8,6,5,7,9,9],
        // backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backgroundColor: 'rgba(255, 231, 108, 0.5)',
      },
    ],
};


const ChartComp = () => {
  return (
    <div className={styles.chart_container}>
      <Bar options={options} data={data} />
    </div>
  );
};

export default ChartComp;
