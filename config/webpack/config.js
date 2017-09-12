loaders: [
  {
    test: /\.js$/,
      loader: ['ng-annotate', 'babel', 'required?import[]=angular'],
      exclude: /node_modules/
  },
  {
    test: /\.html$/,
    loader: 'ng-cache',
    exclude: /node_modules/
  }
]
