"use client"
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const Token = () => {
  const data = {
    labels: ['Crowdsale Investors', 'Foundation'],
    datasets: [
      {
        data: [80, 20], // Corresponding percentages
        backgroundColor: ['#3b82f6', '#f97316'], // Tailwind CSS colors for blue-500 and orange-500
        hoverBackgroundColor: ['#60a5fa', '#fb923c'], // Slightly lighter shades for hover effect
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true, // Use circular dots instead of boxes
          boxWidth: 0, // Hide box width to ensure only dots appear
          textAlign: 'center', // Align the dots centrally
          color: 'transparent', // Hide the text label by making it transparent
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}%`;
          },
        },
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Tokenomics</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Doughnut Chart */}
          <div className="w-48 h-48">
            <Doughnut data={data} options={options} />
          </div>
          {/* Legend */}
          <div className="space-y-3">
            {data.labels.map((label, index) => (
              <div key={label} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
                />
                <span className="text-sm">
                  {label}: {data.datasets[0].data[index]}%
                </span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-gray-600 mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat.
        </p>
      </div>
    </div>
  );
};

export default Token;
