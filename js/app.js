/**
 * Created by cgx on 2014/11/3.
 */

var myApp = angular.module('myApp', ['ui.router', 'ngAnimate', 'storeCtrls', 'storeFilters', 'storeServices', 'storeDirectives']);
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

    $urlRouterProvider.otherwise('/app/home');
    $stateProvider
        .state('app', {
            url: '/app',
            views: {
                '': {
                    templateUrl: 'tpl/index.html',
                    resolve: {
                        deps: function ($q, $rootScope, $timeout) {
                            var defer = $q.defer()
                            $timeout(function () {
                                $rootScope.isloading = false
                                return defer.resolve(true)
                            }, 1500)
                            return defer.promise
                        }
                    }
                },
                'main@app': {
                    templateUrl: 'tpl/main.html'
                },
                'header@app': {
                    templateUrl: 'tpl/header.html'
                }
            }
        })
        .state('app.home', {
            url: '/home',
            views: {
                'main@app': {
                    templateUrl: 'tpl/home.html',
                    controller: 'HomeCtrl'
                }
            }
        })
        .state('app.shop', {
            url: '/shop/:id',
            views: {
                'main@app': {
                    templateUrl: 'tpl/shop.html',
                    controller: 'ShopCtrl'
                }
            }
        })
});

myApp.controller('main', ['$location', '$window', '$rootScope', function ($location, $window, $rootScope) {
    $rootScope.isloading = true

    var url_historys = []

    
    $rootScope.$on('$stateChangeSuccess', function (event, newUrl, oldUrl) {

        if (url_historys.indexOf(newUrl) > -1) {
            //todo go back
            
        } else {
            url_historys.push(newUrl)
        }

        console.info(url_historys)

    })
}]);
