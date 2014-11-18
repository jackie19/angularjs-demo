/**
 * Created by admin on 2014/11/3.
 */
angular.module('storeServices',[]).factory('browser', function ($window) {
    var browser = function () {
        var u = $window.navigator.userAgent;
        var num;
        if (u.indexOf('Mobile') > -1) {
            if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
                if (u.indexOf('iPhone') > -1) {
                    return {"type": "iPhone"}
                } else if (u.indexOf('iPod') > -1) {
                    return {"type": "iPod"}
                } else if (u.indexOf('iPad') > -1) {
                    return {"type": "iPad"}
                }
            } else if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
                num = u.substr(u.indexOf('Android') + 8, 3);
                return {"type": "Android", "version": num};
            } else if (u.indexOf('BB10') > -1) {
                return {"type": "BB10"}
            } else if (u.indexOf('IEMobile')) {
                return {"type": "Windows Phone"}
            }
        }
        return {type: '', version: ''}
    };
    return browser;
}).factory('httpQueue', function ($http, $q) {
    var queue = [];
    var execNext = function () {
        var task = queue[0];
        $http(task.c).then(function (data) {
            queue.shift();
            task.d.resolve(data);
            if (queue.length > 0) execNext();
        }, function (err) {
            queue.shift();
            task.d.reject(err);
            if (queue.length > 0) execNext();
        })

    };
    return function (config) {
        var d = $q.defer();
        queue.push({c: config, d: d});
        if (queue.length === 1) execNext();
        return d.promise;
    };
})