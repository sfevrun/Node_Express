var rhApp = angular.module('rhApp', ['ui.router', 'ui.bootstrap', 'angularModalService', 'angularUtils.directives.dirPagination', 'ui.bootstrap.datetimepicker']);


rhApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
            controller: 'conCtrl'
        })
        .state('~/', {
            url: '',
            templateUrl: 'templates/contact.html',
            controller: 'contactCtrl'
        })

});

rhApp.controller('conCtrl', conCtrl);
rhApp.controller('contactCtrl', contactCtrl);
rhApp.controller('contactpopCtrl', contactpopCtrl);



rhApp.directive('ngConfirmClick', [
    function() {
        return {
            link: function(scope, element, attr) {
                var msg = attr.ngConfirmClick || "Are you sure?";
                var clickAction = attr.confirmedClick;
                element.bind('click', function(event) {
                    if (window.confirm(msg)) {
                        scope.$eval(clickAction)
                    }
                });
            }
        };
    }
])