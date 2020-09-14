A simple and lightweight official React component for FroalaCharts JavaScript charting library. `react-froalacharts` enables you to add JavaScript charts in your React application or project without any hassle.

## [Demo](https://github.com/froala/react-froalacharts-component/blob/master/README.md#demo)

- Github Repo: [https://github.com/froala/react-froalacharts-component](https://github.com/froala/react-froalacharts-component)
- Documentation: [https://www.fusioncharts.com/dev/getting-started/react/your-first-chart-using-react](https://www.fusioncharts.com/dev/getting-started/react/your-first-chart-using-react)
- Support: [support@froala.com](support@froala.com)
- FroalaCharts
  - Official Website: [https://www.fusioncharts.com/](https://www.fusioncharts.com/)
  - Official NPM Package: [https://www.npmjs.com/package/froalacharts](https://www.npmjs.com/package/froalacharts)
- Issues: [https://github.com/froala/react-froalacharts-component/issues](https://github.com/froala/react-froalacharts-component/issues)

---

## Table of Contents

- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Working with chart API](#working-with-apis)
  - [Working with events](#working-with-events)
- [Quick Start](#quick-start)
- [Custom Components](#custom-components)
  - [Drill Down](#drill-down-component)
- [Going Beyond Charts](#going-beyond-charts)
- [Usage and Integration of FusionTime](#usage-and-integration-of-fusionTime)
- [For Contributors](#for-contributors)
- [Licensing](#licensing)

## Getting Started

### Requirements

- **Node.js**, **NPM/Yarn** installed globally in your OS.
- **FroalaCharts** and **React** installed in your project, as detailed below:

### Installation

There are multiple ways to install `react-froalacharts` component.

**Direct Download**
All binaries are located on our [github repository](https://github.com/froala/react-froalacharts-component).

**Install from NPM**

```
npm install --save react-froalacharts
```

See [npm documentation](https://docs.npmjs.com/) to know more about npm usage.

**Install from Yarn**

```
yarn add react-froalacharts
```

See [yarn documentation](https://yarnpkg.com/en/docs) to know more about yarn usage.

For general instructions, refer to this [developer docs page](https://www.fusioncharts.com/dev/getting-started/react/your-first-chart-using-react#installation-2).

### Usage

#### If you have created your app using `create-react-app`

Import React, `react-froalacharts` and FroalaCharts in your app:

```
import React from 'react';
import ReactDOM from 'react-dom';
import FroalaCharts from 'froalacharts';
import ReactFC from 'react-froalacharts';

ReactFC.fcRoot(FroalaCharts);
```

#### If you have created your app using tools like `webpack` or `parcel`

Import React, `react-froalacharts` and FroalaCharts in your app:

```
import React from 'react';
import ReactDOM from 'react-dom';
import FroalaCharts from 'froalacharts/core';
import ReactFC from 'react-froalacharts';

ReactFC.fcRoot(FroalaCharts);
```

Note: This way of import will not work in IE11 and below.

## Quick Start

Here is a basic sample that shows how to create a chart using `react-froalacharts`:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import FroalaCharts from 'froalacharts';
import CandyTheme from 'froalacharts/themes/froalacharts.theme.candy';
import ReactFC from 'react-froalacharts';

ReactFC.fcRoot(FroalaCharts, CandyTheme);

const dataSource = {
  chart: {
    caption: 'Countries With Most Oil Reserves [2017-18]',
    subCaption: 'In MMbbl = One Million barrels',
    xAxisName: 'Country',
    yAxisName: 'Reserves (MMbbl)',
    numberSuffix: 'K',
    theme: 'candy'
  },
  data: [
    { label: 'Venezuela', value: '290' },
    { label: 'Saudi', value: '260' },
    { label: 'Canada', value: '180' },
    { label: 'Iran', value: '140' },
    { label: 'Russia', value: '115' },
    { label: 'UAE', value: '100' },
    { label: 'US', value: '30' },
    { label: 'China', value: '30' }
  ]
};

const chartConfigs = {
  type: 'pie',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: dataSource
};

ReactDOM.render(<ReactFC {...chartConfigs} />, document.getElementById('root'));
```

## Working with Events

To attach event callbacks to a FroalaCharts component, follow the pattern below.

Write the callback:

As a separate function:

```javascript
var chartEventCallback  = function (eventObj, dataObj) {
  [Code goes here]
}
```

Or, as a component class method:

```javascript
chartEventCallback (eventObj, dataObj) {
  [Code goes here]
}
```

Attach the callback to an event through the React-FC component:

```javascript
<ReactFC {...chartConfigs} fcEvent-EVENTNAME={this.chartEventCallback} />
```

Where, EVENTNAME is to be replaced by the event you want to track.

##### Consider the example below that tracks hover events on a data plot.

```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FroalaCharts from 'froalacharts';
import ReactFC from 'react-froalacharts';
import CandyTheme from 'froalacharts/themes/froalacharts.theme.candy';

ReactFC.fcRoot(FroalaCharts, CandyTheme);

const dataSource = /* Data Source A , given above */;

const chartConfigs = {
  type: 'pie',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: dataSource
};

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actualValue: 'Hover on the plot to see the value along with the label'
    };
    this.showPlotValue = this.showPlotValue.bind(this);
  }

  // Event callback handler for 'dataplotRollOver'.
  // Shows the value of the hovered plot on the page.
  showPlotValue(eventObj, dataObj) {
    this.setState({
      actualValue: `You’re are currently hovering over ${
        dataObj.categoryLabel
      } whose value is ${dataObj.displayValue}`
    });
  }

  render() {
    return (
      <div>
        <ReactFC
          {...chartConfigs}
          fcEvent-dataplotRollOver={this.showPlotValue}
        />
        <p style={{ padding: '10px', background: '#f5f2f0' }}>
          {this.state.actualValue}
        </p>
      </div>
    );
  }
}

ReactDOM.render(<Chart />, document.getElementById('root'));
```

## Usage and integration of FusionTime

From `froalacharts@1.0.6` and `react-froalacharts@1.0.0`, You can visualize timeseries data easily on react.

Learn more about FusionTime [here](https://www.fusioncharts.com/fusiontime).

### Consider the example below for integration of FusionTime

```javascript
import React from 'react';
import FroalaCharts from 'froalacharts';
import ReactFC from 'react-froalacharts';

ReactFC.fcRoot(FroalaCharts);

const jsonify = res => res.json();
const dataFetch = fetch(
  'https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/fusiontime-beta-release/charts-resources/fusiontime/online-sales-single-series/data.json'
).then(jsonify);
const schemaFetch = fetch(
  'https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/fusiontime-beta-release/charts-resources/fusiontime/online-sales-single-series/schema.json'
).then(jsonify);

class ChartViewer extends React.Component {
  constructor(props) {
    super(props);
    this.onFetchData = this.onFetchData.bind(this);
    this.state = {
      timeseriesDs: {
        type: 'timeseries',
        renderAt: 'container',
        width: '600',
        height: '400',
        dataSource: {
          caption: { text: 'Online Sales of a SuperStore in the US' },
          data: null,
          yAxis: [
            {
              plot: [
                {
                  value: 'Sales ($)'
                }
              ]
            }
          ]
        }
      }
    };
  }

  componentDidMount() {
    this.onFetchData();
  }

  onFetchData() {
    Promise.all([dataFetch, schemaFetch]).then(res => {
      const data = res[0];
      const schema = res[1];
      const fusionTable = new FroalaCharts.DataStore().createDataTable(
        data,
        schema
      );
      const timeseriesDs = Object.assign({}, this.state.timeseriesDs);
      timeseriesDs.dataSource.data = fusionTable;
      this.setState({
        timeseriesDs
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.timeseriesDs.dataSource.data ? (
          <ReactFC {...this.state.timeseriesDs} />
        ) : (
          'loading'
        )}
      </div>
    );
  }
}
```

Useful links for FusionTime

- [How FusionTime works](https://www.fusioncharts.com/dev/fusiontime/getting-started/how-fusion-time-works)
- [Create your first chart](https://www.fusioncharts.com/dev/fusiontime/getting-started/create-your-first-chart-in-fusiontime)

## Drill Down Component

A custom component to easily add drill down to your react application.

### Syntax

```javascript
import FroalaCharts from 'froalacharts';
import ReactFC from 'react-froalacharts';
import DrillDown from 'react-froalacharts/components/DrillDown';
DrillDown.fcRoot(FroalaCharts);
```

```jsx
class MyComponent extends React.Component{
  constructor(props){
    super(props);
    this.plotChildMap = [ 0, 2, 1 ];
    this.dataSource = /*Data Source A : Given above */   ;
    this.btnConfig = {text : 'Back'};
    this.type= 'pie';
    this.height = 400;
    this.width = 400;
  }
  render(){
    return (
       <DrillDown
        dataSource={dataSource}
        plotChildMap={plotChildMap}
        btnConfig={btnConfig}
        btnStyle={btnStyle}
        dataFormat={dataFormat}
        type={type}
        height={height}
        width={width}
        ...other
        >
        <ReactFC />              /* ReactFC as a child */
        <ReactFC />
        ...
        <DrillDown></DrillDown> /* DrillDown as a child for next level drill down*/
      </DrillDown>
    )
  }
}
```

#### Attribute Description

- plotChildMap[Array(Number)| Array[Object]]

  - Array ( Number ) - Representation of child mapped to the plot of the parent data source passed to the `DrillDown`
    component . Array location are considered plot index of parent, the value corresponding to it are considered which child chart to render.
    `Eg. [0,2,1]`  
     `0(location) -> 0 (value)` means clicking the first (zero indexed) data plot , render the 0th child ,  
     `1(location) -> 2(value)` means clicking the second data plot, render the 1st Child (Note: It is 0-indexed )  
     **Null case** : You can pass `null` for a data plot for which you dont want a drill down.
  - Array ( Object ) - Representation of child mapped with plot in form of an object of shape  
    `{ "plotPosition": Number, "childPosition": Number }`  
    This object holds information about which child render on a data plot is clicked.  
    `Eg. [{ plotPosition: 1 , childPosition: 0}, { plotPosition: 0, childPosition: 1}]`  
    Note: plotChildMap does not honour heterogeneous data , eg. Number and Object
    both.  
    `[ 0 , { plotPosition:0, childPosition: 1 } ]`

- btnConfig [Object]- Basic configuration without overriding the default button styles
  - `text`: PropTypes.string - Button Text
  - `color`: PropTypes.string
  - `backgroundColor`: PropTypes.string
  - `borderColor`: PropTypes.string
  - `fontSize`: PropTypes.string
  - `fontWeight`: PropTypes.string
  - `padding`: PropTypes.string
  - `fontFamily`: PropTypes.string
- btnStyle [Object] - CSS styles which override the styles in default btnConfig except `text`.

## Working with APIs

To call APIs we will need the chart object. To get the chart object for an React-FC component, pass a callback through the attribute `onRender`.

Write the callback:

As a separate function:

```javascript
var chartRenderCallback  = function (chart) {
  [Code goes here]
}
```

Or, as a component class method:

```javascript
chartRenderCallback (chart) {
  [Code goes here]
}
```

Pass the callback as a prop, to which the chart object will be returned on rendering

```
<ReactFC {...chartConfigs} onRender={chartRenderCallback} />
```

##### Consider the example below that conerts a Column 2D chart to a Pie 2D chart after 5 seconds.

```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FroalaCharts from 'froalacharts';
import ReactFC from 'react-froalacharts';
import CandyTheme from 'froalacharts/themes/froalacharts.theme.candy';

ReactFC.fcRoot(FroalaCharts, CandyTheme);

const dataSource = /* Data source A given above */;

const chartConfigs = {
  type: 'pie',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: dataSource
};

class Chart extends Component {
  // Convert the chart to a 2D Pie chart after 5 secs.
  alterChart(chart) {
    setTimeout(() => {
      chart.chartType('pie2d');
    }, 5000);
  }

  render() {
    return (
      <div>
        <ReactFC {...chartConfigs} onRender={alterChart} />
      </div>
    );
  }
}

ReactDOM.render(<Chart />, document.getElementById('root'));
```

links to help you get started:

- [Live samples with code](https://fusioncharts.github.io/react-fusioncharts-component/)
- [Documentation](https://www.fusioncharts.com/dev/getting-started/react/your-first-chart-using-react)
- [Use Chart API events & methods in React](https://www.fusioncharts.com/dev/getting-started/react/configure-your-chart-using-react)
- [Chart gallery](https://www.fusioncharts.com/explore/chart-gallery)
- [FroalaCharts API](https://www.fusioncharts.com/dev/api/fusioncharts)

## Going Beyond Charts

- Explore 20+ pre-built business specific dashboards for different industries like energy and manufacturing to business functions like sales, marketing and operations [here](https://www.fusioncharts.com/explore/dashboards).
- See [Data Stories](https://www.fusioncharts.com/explore/data-stories) built using FroalaCharts’ interactive JavaScript visualizations and learn how to communicate real-world narratives through underlying data to tell compelling stories.

## For Contributors

- Clone the repository and install dependencies

```
$ git clone https://github.com/froala/react-froalacharts-component.git
$ cd react-froalacharts-component
$ npm i
$ npm start
```

- Run `npm run build` to start the dev server and point your browser at [http://localhost:3000/](http://localhost:3000/).

## Licensing

The FroalaCharts React component is open-source and distributed under the terms of the MIT/X11 License. However, you will need to download and include FroalaCharts library in your page separately, which has a [separate license](https://www.ideracorp.com/legal/Froala#tabs-2).
