angular.module('lss')
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                controller: 'HomeController',
                title: 'Home',
                templateUrl: 'app/pgs/home.html'
            })
    })
