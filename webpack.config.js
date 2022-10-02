const path = require('path');
module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist')   ///ESTO ES PARA BORRAR!!!!!!!!!
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader']
            }
            
        ]
    }
    
}