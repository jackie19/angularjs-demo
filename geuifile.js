

/**
 * https://github.com/jackie19/geui/
 * Created by jackie on 2015/7/30.
 */

var config = {
    "name": "ng-demo",
    "options": {
        "isUglify": true
    },
    "uglify": [
        {
            /*
             * 被合并压缩的 js 文件,或目录
             * 支持 ant 风格
             * @type: String|Array
             * @example
             * "src": "src/module1/"
             * "src": ["src/module1/m?.js"]
             * "src": ["src/module1/m*.js", "src/module1/m2.js"]
             * */
            "src": [
                "bower_components/angular/angular.js",
                // "bower_components/angular-sanitize/angular-sanitize.js",
                "bower_components/angular-animate/angular-animate.js",
                "bower_components/angular-ui-router/release/angular-ui-router.js",
                // "bower_components/angular-image-lazy/angular-image-lazy.js"
            ],
            
            /*
             * 合并压缩后的文件输出路径
             * @type: String
             * */
            "dist": "dist/lib.js",
            
            /*
             * uglify minify options
             * https://github.com/mishoo/UglifyJS2
             * */
            "options": {
                "outSourceMap": "app.js.map",
                sourceRoot: "",
                "warnings": true,
                "output": {
                    "beautify": false //格式化
                },
                "mangle": true, //混淆
                "compress": true //压缩
            }
        },
        {
            "src": [
                "js/"
            ],
            "dist": "dist/app.js",
            "options": {
                "outSourceMap": "app.js.map",
                sourceRoot: "",
                "warnings": true,
                "output": {
                    "beautify": false //格式化
                },
                "mangle": true, //混淆
                "compress": true //压缩
            }
        },

    
    ]
    
};
module.exports = config;