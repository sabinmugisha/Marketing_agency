import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SalesTrendChart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Sales Trend',
                data: [1200, 1500, 1300, 1600, 1800, 1700, 2000],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.4,
            },
        ],
    };

    return (
        <div className="card shadow-sm mb-4">
            <div className="card-body">
                <h2 className="card-title text-center">Sales Trend Analysis</h2>
                <Line data={data} />
            </div>
        </div>
    );
};

export default SalesTrendChart;
