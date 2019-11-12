// vue.config.js
module.exports = {
    devServer: {
        "proxy": {
            "/Synonyms": {
            "target": 'http://localhost:6600',
            "pathRewrite": { '^/Synonyms': '' },
            "changeOrigin": true,
            "secure": false
            }
        }
    }
}