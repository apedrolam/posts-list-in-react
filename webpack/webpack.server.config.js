const path = require('path');

module.exports = {
    entry: './source/server.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../build/server'),
        publicPath: '/build/server/',
    },
    module: {
        rules: [
            {
                test: /\.json$/,
                use: 'json',
            },
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['latest-minimal', 'react']
                        },
                    }
                ],
                exclude: /(node_modules)/,
            }
        ]
    },
    target: 'node',
};
