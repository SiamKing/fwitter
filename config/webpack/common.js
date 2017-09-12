{ test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'] },
{ test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000' },
{ test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' }
