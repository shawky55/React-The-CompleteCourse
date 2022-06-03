import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css'
function Chart (props) {
const dataPointsValues=props.dataPoints.map(dataPoint=>dataPoint.value);
const totalMaximum=Math.max(...dataPointsValues);

    return (
      <div className="chart">
        {props.dataPoints.map((dataPoint) => {
          return (
            <ChartBar
              key={dataPoint.label}
              label={dataPoint.label}
              maxValue={totalMaximum}
              value={dataPoint.value}
            />
          );
        })}
      </div>
    );
}
export default Chart;