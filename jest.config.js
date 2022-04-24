// https://jestjs.io/docs/webpack#handling-static-assets

module.exports = {
  module: {
    loaders: [
      { exclude: ['node_modules'], loader: 'babel', test: /\.jsx?$/ },
      { loader: 'style-loader!css-loader', test: /\.css$/ },
      { loader: 'url-loader', test: /\.gif$/ },
      { loader: 'file-loader', test: /\.(ttf|eot|svg)$/ },
    ],
  },
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'json'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@src': '<rootDir>/src',
  },
};
