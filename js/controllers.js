/**
 * Created by admin on 2014/11/3.
 */

angular.module('storeCtrls', [])
    
    .controller('HomeCtrl', ['$scope', function ($scope) {
        console.info('welcome home')
    }])

    .controller('ShopCtrl', ['$scope', function ($scope) {
        $scope.name = 'darunfa';
        console.info('welcome darunfa')

    }])