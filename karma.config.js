const argv = require('yargs').argv;
const path = require('path');

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    singleRun: !argv.watch,
    frameworks: ['mocha', 'chai'],
    reporters: ['spec'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './node_modules/whatwg-fetch/fetch.js',
      './test/**/*.js'
    ],
    preprocessors: {
      ['./test/**/*.js']: ['webpack', 'sourcemap']
    },
    webpack: {
       devtool: 'inline-source-map',
       resolve: {
        root: path.resolve(__dirname, './src'),
        extensions: ['', '.js'],
        alias: {
          'sinon': 'sinon/pkg/sinon',
          'components': path.resolve(__dirname, './src/components'),
          'containers': path.resolve(__dirname, './src/containers'),
          'reduxModules': path.resolve(__dirname, './src/redux/modules'),
        }
      },
      module: {
        noParse: [
          /node_modules\/sinon\//
        ],
        loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
          {
            test: /\.css$/,
            loaders: [
              'style',
              'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
            ],
          },
        ],
      },
      externals: {
        'jsdom': 'window',
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window'
      },
    },
    webpackMiddleware: {
      noInfo: true
    },
    webpackServer: {
      noInfo: true,
    },
    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-webpack',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
      'karma-sourcemap-loader'
    ]
  });
};
