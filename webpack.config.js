const { resolve, join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
//const path = require('path');

const isProd = process.env.NODE_ENV === "production";

const config = {
  stats: "errors-only",
  mode: isProd ? "production" : "development",
  entry: {
    index: "./src/index.tsx",
  },
  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.js",
    //publicPath:'/'
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: { 
      'src': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
   }
  },
  module: {
    rules: [
      {
        test: /\.(tsx|jsx|ts|js)?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss|\.css$/i,
        use: [
          // [style-loader](/loaders/style-loader)
          { loader: "style-loader" },
          // [css-loader](/loaders/css-loader)
          {
            loader: "css-loader",
            // options: {
            //   modules: true
            // }
          },
          //[sass-loader](/loaders/sass-loader)
          {
            loader: "sass-loader",
            // options: {
            //   implementation: require("sass"),
            //   sassOptions: {
            //     fiber: require("fibers"),
            //   },
            // },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      inject: "body",
      favicon: "./public/img/favicon.ico"
    }),
  ],
};

if (isProd) {
  config.optimization = {
    minimizer: [new TerserWebpackPlugin()],
  };
  // config.devServer = {
  //   historyApiFallback: true,
  //   static: {
  //     directory: join(__dirname, 'public'),
  //   }
  // };
} else {
  config.devServer = {
    port: 9000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
    // static: {
    //   directory: join(__dirname, "public"),
    // },

    client: {
      overlay: true,
    },
  };
}

module.exports = config;
