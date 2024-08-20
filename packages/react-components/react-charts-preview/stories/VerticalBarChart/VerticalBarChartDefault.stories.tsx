import * as React from 'react';
import { VerticalBarChart, IVerticalBarChartProps, IVerticalBarChartDataPoint, ILineChartLineOptions} from '../../src/VerticalBarChart';
import { DefaultPalette } from '@fluentui/react/lib/Styling';
import { ChoiceGroup, IChoiceGroupOption } from '@fluentui/react/lib/ChoiceGroup';
import { Checkbox } from '@fluentui/react/lib/Checkbox';
import { Switch } from '@fluentui/react-components';
import { IRenderFunction } from '@fluentui/react/lib/Utilities';

export const VCBasic = () => {
  const [width, setWidth] = React.useState<number>(650);
  const [height, setHeight] = React.useState<number>(350);
  const [isCalloutselected, setIsCalloutSelected] = React.useState<boolean>(false);
  const [useSingleColor, setUseSingleColor] = React.useState<boolean>(false);
  const [hideLabels, setHideLabels] = React.useState<boolean>(false);
  const [showAxisTitles, setShowAxisTitles] = React.useState<boolean>(false);

  const options: IChoiceGroupOption[] = [
    { key: 'basicExample', text: 'Basic Example' },
    { key: 'calloutExample', text: 'Custom Callout Example' },
  ];

  const _onWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(parseInt(e.target.value, 10));
  };
  const _onHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(parseInt(e.target.value, 10));
  };

  const _onChange = (ev: React.FormEvent<HTMLInputElement>, option: IChoiceGroupOption): void => {
    if (isCalloutselected) {
      setIsCalloutSelected(false);
    } else {
      setIsCalloutSelected(true);
    }
  };
  const _onCheckChange = (ev: React.MouseEvent<HTMLElement>, checked: boolean) => {
    setUseSingleColor(checked);
  };
  const _onHideLabelsCheckChange = (ev: React.MouseEvent<HTMLElement>, checked: boolean) => {
    setHideLabels(checked);
  };
  const _onToggleAxisTitlesCheckChange = React.useCallback(
    ev => {
      setShowAxisTitles(ev.currentTarget.checked);
    },
    [showAxisTitles],
  );
  const points: IVerticalBarChartDataPoint[] = [
    {
      x: 0,
      y: 10000,
      legend: 'Oranges',
      color: DefaultPalette.accent,
      xAxisCalloutData: '2020/04/30',
      yAxisCalloutData: '4%',
      lineData: {
        y: 7000,
        yAxisCalloutData: '3%',
      },
    },
    {
      x: 10000,
      y: 50000,
      legend: 'Dogs',
      color: DefaultPalette.blueDark,
      xAxisCalloutData: '2020/04/30',
      yAxisCalloutData: '21%',
      lineData: {
        y: 30000,
        yAxisCalloutData: '12%',
      },
    },
    {
      x: 25000,
      y: 30000,
      legend: 'Apples',
      color: DefaultPalette.blueMid,
      xAxisCalloutData: '2020/04/30',
      yAxisCalloutData: '12%',
      lineData: {
        y: 3000,
        yAxisCalloutData: '1%',
      },
    },

    {
      x: 40000,
      y: 13000,
      legend: 'Bananas',
      color: DefaultPalette.blueLight,
      xAxisCalloutData: '2020/04/30',
      yAxisCalloutData: '5%',
    },
    {
      x: 52000,
      y: 43000,
      legend: 'Giraffes',
      color: DefaultPalette.blue,
      xAxisCalloutData: '2020/04/30',
      yAxisCalloutData: '18%',
      lineData: {
        y: 30000,
        yAxisCalloutData: '12%',
      },
    },
    {
      x: 68000,
      y: 30000,
      legend: 'Cats',
      color: DefaultPalette.blueDark,
      xAxisCalloutData: '2020/04/30',
      yAxisCalloutData: '12%',
      lineData: {
        y: 5000,
        yAxisCalloutData: '2%',
      },
    },
    {
      x: 80000,
      y: 20000,
      legend: 'Elephants',
      color: DefaultPalette.blue,
      xAxisCalloutData: '2020/04/30',
      yAxisCalloutData: '8%',
      lineData: {
        y: 16000,
        yAxisCalloutData: '7%',
      },
    },
    {
      x: 92000,
      y: 45000,
      legend: 'Monkeys',
      color: DefaultPalette.blueLight,
      xAxisCalloutData: '2020/04/30',
      yAxisCalloutData: '19%',
      lineData: {
        y: 40000,
        yAxisCalloutData: '16%',
      },
    },
  ];
  const lineOptions: ILineChartLineOptions = { lineBorderWidth: '2' };
  const rootStyle = { width: `${width}px`, height: `${height}px` };
  return (
    <>
      <p>
        In this example the <code>xAxisCalloutData</code> property overrides the x value that is shown on the callout.
        So instead of a numeric value, the callout will show the date that is passed in the{' '}
        <code>xAxisCalloutData</code> property.
      </p>
      <label htmlFor="changeWidth">Change Width:</label>
      <input
        type="range"
        value={width}
        min={200}
        max={1000}
        onChange={_onWidthChange}
        id="changeWidth"
        aria-valuetext={`ChangeWidthSlider${width}`}
      />
      <label htmlFor="changeHeight">Change Height:</label>
      <input
        type="range"
        value={height}
        min={200}
        max={1000}
        id="changeHeight"
        onChange={_onHeightChange}
        aria-valuetext={`ChangeHeightslider${height}`}
      />
      <ChoiceGroup options={options} defaultSelectedKey="basicExample" onChange={_onChange} label="Pick one" />
      <Checkbox
        label="use single color(This will have only one color)"
        checked={useSingleColor}
        onChange={_onCheckChange}
        styles={{ root: { marginTop: '20px' } }}
      />
      <Checkbox
        label="Hide labels"
        checked={hideLabels}
        onChange={_onHideLabelsCheckChange}
        styles={{ root: { marginTop: '10px' } }}
      />
      <Switch
        label={showAxisTitles ? 'Hide axis titles' : 'Show axis titles'}
        checked={showAxisTitles}
        onChange={_onToggleAxisTitlesCheckChange}
        style={{ marginTop: '10px' }}
      />
      {showAxisTitles && (
        <div style={rootStyle}>
          <VerticalBarChart
            chartTitle="Vertical bar chart basic example "
            culture={window.navigator.language}
            data={points}
            height={height}
            width={width}
            hideLegend={false}
            enableReflow={true}
            useSingleColor={useSingleColor}
            hideLabels={hideLabels}
            lineLegendText={'just line'}
            lineLegendColor={'brown'}
            lineOptions={lineOptions}
            {...(isCalloutselected && {
              onRenderCalloutPerDataPoint: (
                props: IVerticalBarChartDataPoint,
                defaultRender: IRenderFunction<IVerticalBarChartDataPoint>,
              ) => (props ? defaultRender(props) : null),
            })}
            yAxisTitle={showAxisTitles ? 'Different categories of animals and fruits' : undefined}
            xAxisTitle={showAxisTitles ? 'Values of each category' : undefined}
          />
        </div>
      )}
      {!showAxisTitles && (
        <div style={rootStyle}>
          <VerticalBarChart
            chartTitle="Vertical bar chart basic example "
            culture={window.navigator.language}
            data={points}
            height={height}
            width={width}
            hideLegend={false}
            enableReflow={true}
            useSingleColor={useSingleColor}
            hideLabels={hideLabels}
            lineLegendText={'just line'}
            lineLegendColor={'brown'}
            lineOptions={lineOptions}
            {...(isCalloutselected && {
              onRenderCalloutPerDataPoint: (
                props: IVerticalBarChartDataPoint,
                defaultRender: IRenderFunction<IVerticalBarChartDataPoint>,
              ) => (props ? defaultRender(props) : null),
            })}
            yAxisTitle={showAxisTitles ? 'Different categories of animals and fruits' : undefined}
            xAxisTitle={showAxisTitles ? 'Values of each category' : undefined}
          />
        </div>
      )}
    </>
  );
};
VCBasic.parameters = {
  docs: {
    description: {
      story: 'A Calendar Compat can be modified to allow selecting a contiguous (5 day) work week.',
    },
  },
};