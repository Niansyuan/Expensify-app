//entry --> output
const path = require('path');

module.exports={
    entry:'./src/app.js',
    output:{
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    mode: 'development',
    module:{
        rules:[{
            loader:'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test: /\.s?css$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-source-map',
    devServer:{
        static: {
            directory: path.join(__dirname, 'public'),
          },
    }
}