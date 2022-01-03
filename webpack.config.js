// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = "style-loader";

const config = {
  entry: path.resolve(__dirname, 'src/') + '/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    modules: [path.resolve(__dirname,'src'),'node_modules'],
    fallback: {
      "stream": false,
      "zlib": false,
      "buffer": false
    },
    extensions: ['.js', '.jsx']
},
  devServer: {
    open: true,
    host: "localhost",
  },
    
  module: {
    
    rules: [
      {
        test:/\.js$/,
        use: [
          {
        loader:'babel-loader',
        options: {
          cacheDirectory: true,
          presets: ['@babel/env', '@babel/react']
        }
      },
    ],        
  },
        {
            test:/\.jsx$/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  cacheDirectory: true,
                  presets: ['@babel/react', '@babel/env']
                }
              },
            ],        
          },
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
       test: /\.s[ca]ss/i,
				use: [stylesHandler,
        
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ]
				
			},
      // {
      //   test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
      //   type: "asset",
      // },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
