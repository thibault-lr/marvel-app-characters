module.exports = process.env.NODE_ENV === 'staging' ? require('./webpack/webpack.dev.js') : require('./webpack/webpack.prod.js');
