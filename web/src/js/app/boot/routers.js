(function (define) {

    'use strict';

    var dependencies = [
    ];

    define(dependencies, function () {

        var RouteManager = function ($stateProvider) {

            $stateProvider
                .state('main', {
                    url: '',
                    templateUrl: 'tpl/main.html'
                })
                .state('beer-you', {
                    url: '/beer/you',
                    templateUrl: 'tpl/beer-you.html',
                    controller: 'BeerYouController'
                })
                .state('beer-me', {
                    url: '/beer/me',
                    templateUrl: 'tpl/beer-me.html',
                    controller: 'BeerMeController'
                })
                .state('send', {
                    url: '/send/:beerId',
                    templateUrl: 'tpl/send.html',
                    controller: 'SendController'
                })
                .state('pay', {
                    url: '/pay',
                    templateUrl: 'tpl/pay.html',
                    controller: 'PayController'
                })
                .state('pay.success', {
                    url: '/success',
                    templateUrl: 'tpl/pay-success.html'
                })
                .state('receive', {
                    url: '/receive/:beerId',
                    templateUrl: 'tpl/receive.html',
                    controller: 'ReceiveController'
                });

        };

        return ['$stateProvider', RouteManager];
    });

}(define));
