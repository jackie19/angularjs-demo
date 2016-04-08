/**
 * Created by admin on 2014/11/3.
 */
angular.module('storeDirectives',[]).directive('toast', function ($timeout, $rootScope) {

    return{
        restrict: 'E',
        replace: true,
        transclude: true,
        template: '<div class="toast"  ng-show="toastIsShow">' +
            '<i class="ico" ng-class="{success:toastIsSuccess,error:!toastIsSuccess}"></i><span class="toast_text">{{text}}</span>' +
            '</div>',
        link: function (scope, element, attrs) {
            $rootScope.$watch(function () {
                return $rootScope.toastIsShow;
            }, function (val) {
                if (val == true) {
                    $timeout(function () {
                        $rootScope.toastIsShow = false;
                    }, 1000);
                }
            })
        }
    }
});