let webpack = require('webpack');
let path = require('path');
let CopyWebpackPlugin = require('copy-webpack-plugin');

let context = path.join(process.cwd(), 'src');

 let plugins = [
  new CopyWebpackPlugin([
    {from: 'index.html'},
    {from: 'app/prices/prices.component.html'}
  ])
];

let entry = {
  'main': './main.js',
  'vendor': './vendor.js'
};

let output = {
  path: path.resolve(process.cwd(), 'public'),
  filename: '[name].bundle.js',
  library: '[name]storeapp',
  sourceMapFilename: '[name].map',
  chunkFilename: '[id].chunk.js'
};

let resolve = {
 modules: [
   'node_modules',
   path.resolve(process.cwd(), 'src')
 ],
 extensions: ['.js', '.json']
};

let rules = [
 {
   test: /\.js$/,
   loader: 'babel-loader',
   exclude: /(node_modules)/,
   query: {
     presets: ['latest', 'angular2']
   }
 },
 {
   test: /\.js$/,
   use: 'source-map-loader',
   exclude: [
     path.join(process.cwd(), 'node_modules/rxjs'),
     path.join(process.cwd(), 'node_modules/@angular')
   ]
 },
 {
   test: /\.html$/,
   use: 'html-loader?attrs=false&caseSensitive&removeAttributeQuotes=false'
 }
]

module.exports = {
 context: context,
 plugins: plugins,
 resolve: resolve,
 entry: entry,
 output: output,
 module: { rules: rules }
};
