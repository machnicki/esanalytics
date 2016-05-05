import path from 'path'

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
}

export default {
  devtool: 'source-map',
  entry: {
    app: PATHS.app,
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: [
            'es2015-native-modules',
            'react',
            'react-optimize',
            'stage-1',
          ],
        },
        include: PATHS.app,
      },
    ],
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['eslint', 'jscs'],
        include: PATHS.app,
      },
    ],
  },
  resolve: {
    alias: {
      components: path.resolve(PATHS.app, 'components'),
      containers: path.resolve(PATHS.app, 'containers'),
      reduxModules: path.resolve(PATHS.app, 'redux/modules'),
    },
  },
}
