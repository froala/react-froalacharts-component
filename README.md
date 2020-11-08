Simple and lightweight official React component for FroalaCharts. `react-froalacharts` enables you to add JavaScript charts in your React application or project without any hassle.


- Github Repo: [https://github.com/froala/react-froalacharts-component](https://github.com/froala/react-froalacharts-component)
- Documentation: [https://froala.com/charts/docs/frameworks/react/](https://froala.com/charts/docs/frameworks/react/)
- Support: [support@froala.com](support@froala.com)
- FroalaCharts
  - Official Website: [https://www.froala.com/](https://www.froala.com/)
  - Official NPM Package: [https://www.npmjs.com/package/froalacharts](https://www.npmjs.com/package/froalacharts)
- Issues: [https://github.com/froala/react-froalacharts-component/issues](https://github.com/froala/react-froalacharts-component/issues)

---

## Table of Contents

- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
- [Quick Start](#quick-start)
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

For general instructions, refer to this [developer docs page](https://froala.com/charts/docs/frameworks/react/).

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

links to help you get started:

- [Documentation](https://froala.com/charts/docs/frameworks/react/)
- [Chart gallery](https://froala.com/charts/tour/)
- [FroalaCharts API](https://froala.com/charts/docs/api/options/#FroalaCharts.options)

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

The FroalaCharts React component is open-source and distributed under the terms of the MIT/X11 License. However, you will need to download and include FroalaCharts library in your page separately, which has a [separate license](https://www.ideracorp.com/Legal/Froala/FroalaChartsLicenseAgreement).
