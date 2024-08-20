import * as React from 'react';
import { VerticalBarChart, IVerticalBarChartProps, IVerticalBarChartDataPoint } from '../../src/VerticalBarChart';

export const VCRotateLabels = () => {
  const points: IVerticalBarChartDataPoint[] = [
    {
      x: 'This is a medium long label. ',
      y: 3500,
      color: '#627CEF',
    },
    {
      x: 'This is a long label This is a long label',
      y: 2500,
      color: '#C19C00',
    },
    {
      x: 'This label is as long as the previous one',
      y: 1900,
      color: '#E650AF',
    },
    {
      x: 'A short label',
      y: 2800,
      color: '#0E7878',
    },
  ];
  const rootStyle = { width: '650px', height: '500px' };
  return (
    <>
      <div style={rootStyle}>
        <VerticalBarChart
          chartTitle="Vertical bar chart rotated labels example "
          data={points}
          height={350}
          width={650}
          hideLegend={true}
          rotateXAxisLables={true}
          enableReflow={true}
        />
      </div>
    </>
  );
};
VCRotateLabels.parameters = {
  docs: {
    description: {
      story: 'A Calendar Compat can be modified to allow selecting a contiguous (5 day) work week.',
    },
  },
};