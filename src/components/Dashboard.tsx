import React, { useState } from 'react';
import '../styles/Dashboard.scss';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard: React.FC = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Mock data for charts
  const nationalityData = {
    labels: ['台灣', '越南', '印尼', '菲律賓'],
    datasets: [
      {
        label: '瀏覽人數',
        data: [200, 150, 100, 50],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const ageData = {
    labels: ['18-24', '25-34', '35-44', '45-54', '55+'],
    datasets: [
      {
        label: '年齡分佈',
        data: [50, 100, 80, 40, 30],
        backgroundColor: '#36A2EB',
      },
    ],
  };

  const cities = [
    { city: '台北', count: 120 },
    { city: '高雄', count: 100 },
    { city: '台中', count: 90 },
    { city: '新北', count: 80 },
    { city: '台南', count: 70 },
    { city: '基隆', count: 60 },
    { city: '桃園', count: 50 },
    { city: '彰化', count: 40 },
    { city: '宜蘭', count: 30 },
    { city: '屏東', count: 20 },
  ];

  return (
    <div className="dashboard-container">
      <h1>數據報表</h1>
      <div className="summary-row">
        <div className="summary-item">總評論數: 500</div>
        <div className="summary-item">總收藏數: 300</div>
        <div className="summary-item">平均星數: 4.5</div>
        <div className="summary-item">總回復數: 150</div>
      </div>
      <div className="filter-row">
        <label>
          開始時間:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label>
          結束時間:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
      </div>
      <div className="data-section">
        <div className="data-row">
          <div className="data-item">評論數: 200</div>
          <div className="data-item">收藏數: 150</div>
          <div className="data-item">曝光數: 300</div>
          <div className="data-item">點擊數: 100</div>
          <div className="data-item">瀏覽者: 500</div>
        </div>
        <div className="chart-row">
          <div className="chart-item">
            <h3>瀏覽者的國籍與性別比例</h3>
            <Pie data={nationalityData} />
          </div>
          <div className="chart-item">
            <h3>瀏覽者年齡分佈</h3>
            <Bar data={ageData} />
          </div>
        </div>
        <div className="cities-section">
          <h3>前十多瀏覽者所在城市</h3>
          <ul>
            {cities.map((item, index) => (
              <li key={index}>
                {item.city}: {item.count}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;