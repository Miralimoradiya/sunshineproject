
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const MonthlyIncomeChart = () => {
  const data = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    datasets: [
      {
        label: "Monthly Income",
        data: [2235, 3250, 1890, 5400, 20240, 6254, 12325, 4856, 10325, 2254, 22356, 8486],
        backgroundColor: "#5D2BFF",
        borderColor: "#5D2BFF",
        borderRadius: 6,
        cubicInterpolationMode: 'monotone',
        fill: false,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    interaction: {
      intersect: false,
      mode: 'index'
    },
    elements: {
      point: {
        radius: 0
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        padding: { bottom: 8 },
        font: {
          size: 0,
          weight: "normal",
        },
      },
      tooltip: {
        backgroundColor: "whitesmoke",
        bodyColor: "#272626",
        yAlign: "bottom",
        cornerRadius: 4,
        titleColor: "#272626",
        usePointStyle: true,
        callbacks: {
          label: function(context) {
            if (context.parsed.y !== null) {
              return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
            }
            return null;
          }
        }
      },
    },
    scales: {
      x: {
        border: {
          dash: [4, 4],
        },
        title: {
          text: "2023",
        },
      },
      y: {
        grid: {
          color: "#27292D",
        },
        border: {
          dash: [1, 2],
        },
        title: {
          display: true,
          padding: { bottom: 0 }
        },
      },
    },
  };

  return (
    <div className="widget">
      <Line data={data} options={options} />
    </div>
  );
};

export default MonthlyIncomeChart;
