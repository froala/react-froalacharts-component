const path = require('path');
const _ = require('lodash');

const reactFCBuilderConfig = {
  name: 'reactFC',
  entry: path.join(__dirname, 'index.js'),
  output: {
    library: 'ReactFC',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist'),
    filename: 'react-froalacharts.js',
    umdNamedDefine: true,
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ],
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
    {
      froalacharts: {
        root: 'FroalaCharts',
        commonjs2: 'froalacharts',
        commonjs: 'froalacharts',
        amd: 'froalacharts',
      },
    },
  ],
};

const drillDownBuilderConfig = {
  name: 'drillDown',
  entry: path.join(__dirname, 'umd-src/DrillDown.js'),
  output: {
    library: 'DrillDown',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist'),
    filename: 'drill-down.js',
    umdNamedDefine: true,
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ],
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
    {
      froalacharts: {
        root: 'FroalaCharts',
        commonjs2: 'froalacharts',
        commonjs: 'froalacharts',
        amd: 'froalacharts',
      },
    },
    {
      reactfc: {
        root: 'ReactFC',
        commonjs2: 'react-froalacharts',
        commonjs: 'react-froalacharts',
        amd: 'react-froalacharts',
      },
    },
  ],
};


const reactFCProd = _.cloneDeep(reactFCBuilderConfig);

const drillFCProd = _.cloneDeep(drillDownBuilderConfig);

reactFCProd.name = 'reactfcProd';
drillFCProd.name = 'drilldownProd';

reactFCProd.output.filename = 'react-froalacharts.min.js';
drillFCProd.output.filename = 'drill-down.min.js';

reactFCProd.mode = 'production';
drillFCProd.mode = 'production';

module.exports = [
  reactFCBuilderConfig,
  drillDownBuilderConfig,
  reactFCProd,
  drillFCProd
];
