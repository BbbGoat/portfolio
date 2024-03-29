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

interface ICharCompProps {
  text: string;
  labels: string[];
  data: number[];
  bgc?: string;
  [x: string]: any;
}

const ChartComp = ({
  text,
  labels,
  data,
  bgc,
  ...restProps
}: ICharCompProps) => {
  
  const options = {
    responsive: true,
    // indexAxis: "y" as const,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: text,
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
  
  const setData = {
    labels,
    datasets: [
      {
        label: 'Level',
        data,
        backgroundColor: bgc,
      },
    ],
  };
  
  return (
    <div className={styles.chart_container}>
      <Bar options={options} data={setData} />
    </div>
  );
};

export default ChartComp;
