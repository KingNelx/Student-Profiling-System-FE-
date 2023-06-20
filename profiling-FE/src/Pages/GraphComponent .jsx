import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const GraphComponent = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    // Fetch data from API or backend
    const fetchData = async () => {
      const response = await fetch('your-data-api-endpoint');
      const data = await response.json();

      // Process data and format it for the chart
      const chartLabels = data.map(item => item.label);
      const chartValues = data.map(item => item.value);

      // Create chart configuration
      const chartConfig = {
        labels: chartLabels,
        datasets: [
          {
            label: 'Data',
            data: chartValues,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      };

      setChartData(chartConfig);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default GraphComponent;
