const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	mode: "production",
	entry : {
		app : "./dist/javascript/app.js"
	},
	output : {
		path : __dirname + "/assets/js",
		filename : "main.js",
	},
	optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  },
	module : {
		rules : [
			{
				test: /\.m?js$/,
	      exclude: /(node_modules|bower_components)/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['@babel/preset-env']
	        }
	      }
			}
		]
	}
}
