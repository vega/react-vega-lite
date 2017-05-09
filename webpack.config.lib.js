const path = require('path');
const merge = require('webpack-merge');

const commonConfig = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-vega-lite.min.js',
    sourceMapFilename: '[file].map',
    library: 'ReactVegaLite',
    libraryTarget: 'umd',
    umdNamedDefine: false
  },
  externals: {
    'prop-types': {
      root: 'PropTypes',
      commonjs2: 'prop-types',
      commonjs: 'prop-types',
      amd: 'prop-types'
    },
    'react-vega': {
      root: 'ReactVega',
      commonjs2: 'react-vega',
      commonjs: 'react-vega',
      amd: 'react-vega'
    },
    'vega-lite': {
      root: 'vl',
      commonjs2: 'vega-lite',
      commonjs: 'vega-lite',
      amd: 'vega-lite'
    },
    'vega': {
      root: 'vega',
      commonjs2: 'vega',
      commonjs: 'vega',
      amd: 'vega'
    },
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  }
};

let config;
const prodConfig = require('lazynerd-devtools/config/webpack/webpack.config.prod.js');
config = merge(prodConfig, commonConfig);
config.plugins = [];

module.exports = config;

