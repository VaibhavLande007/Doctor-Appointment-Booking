/* eslint-disable no-unused-vars */
/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const opn = require("opn");
const Dotenv = require('dotenv-webpack');

const publicPath = "/";

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    mode: isProduction ? "production" : "development",
    entry: path.join(__dirname, "src", "index.js"),

    output: {
      filename: isProduction ? "js/[name].[contenthash].js" : "js/[name].bundle.js",
      path: path.resolve(__dirname, isProduction ? "build" : "dist"),
      publicPath: publicPath,
    },

    devServer: {
      port: 3000,
      historyApiFallback: true,
      hot: true,
      proxy: {
        '/api': {
          target: 'http://localhost:8080',
          changeOrigin: true,
          secure: false,
        }
      },
      onAfterSetupMiddleware() {
        opn(`http://localhost:${this.port}/home`);
      },
    },

    externals: {
      config: JSON.stringify({
        apiUrl: "",
        publicPath: '/',
      }),
    },

    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx"],
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            "css-loader",
            {
              loader: "sass-loader",
            },
          ],
        },
        {
          test: /\.(jpg|png|svg|gif)$/,
          type: "asset/resource",
        },
      ],
    },

    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'public', 'assets', 'img'),
            to: path.resolve(__dirname, isProduction ? 'build' : 'dist', 'assets', 'img')
          }
        ]
      }),
      new Dotenv({
        path: isProduction ? './.env.production' : './.env.development',
      }),
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(isProduction ? "production" : "development"),
      }),
      !isProduction && new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        title: "DocNet 360",
        template: "./public/index.html",
        filename: "./index.html",
        favicon: "./public/favicon.png",
      }),
      new MiniCssExtractPlugin({
        filename: isProduction ? "css/[name].[contenthash].css" : "css/[name].css",
        chunkFilename: isProduction ? "css/[id].[contenthash].css" : "css/[id].css",
      }),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [
          "css/*.*",
          "js/*.*",
          "fonts/*.*",
          "images/*.*",
        ],
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        ApexCharts: "apexcharts", // ADD THIS LINE
      }),
    ].filter(Boolean),
  };
};