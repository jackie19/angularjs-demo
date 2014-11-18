/**
 * Created by cgx on 2014/11/3.
 */

var myApp = angular.module('myApp', [ 'ui.router','ngAnimate', 'storeCtrls', 'storeFilters', 'storeServices', 'storeDirectives' ]);
myApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    // Intercept POST requests, convert to standard form encoding
    $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    $httpProvider.defaults.transformRequest.unshift(function (data, headersGetter) {
        var key, result = [];
        for (key in data) {
            if (data.hasOwnProperty(key)) {
                result.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
            }
        }
        return result.join("&");
    });

    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                '': {
                    templateUrl: 'tpl/index.html'
                },
                'main@index':{
                    templateUrl:'tpl/main.html'
                },
                'menu@index': {
                    templateUrl: 'tpl/menu.html'
                },
                'header@index': {
                    templateUrl: 'tpl/header.html'
                }
            }
        }).state('index.test', {
            url: '/test',
            views: {
                'main@index': {
                    templateUrl: '',
                    controller: ''
                }
            }
        })
});

myApp.controller('main', ['$location', '$window', '$rootScope', function ($location, $window, $rootScope) {

}]);
