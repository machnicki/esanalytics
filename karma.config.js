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
        }
      },
      module: {
        noParse: [
          /node_modules\/sinon\//
        ],
        loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
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
