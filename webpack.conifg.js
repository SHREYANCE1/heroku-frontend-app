const webpack = require('webpack');
const conifg = require('cofig')

const CONFIG = conifg.has('public') ? conifg.get('public') : {};

module.exports = {
    plugins : [
        new webpack.DefinePlugin({
            CONFIG: JSON.stringify(CONFIG),
        }),
    ],
};