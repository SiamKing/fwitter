import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import TweetController from '../tweets/tweet.controller';
import HomeController from '../home/home.controller'


(() => {
  'user strict';

  angular
    .module('fwitter', [uirouter])
    .controller(TweetController)
    .controller(HomeController)
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('home', {
            url: '/',
            template: require("html-loader!../home/home.html"),
            controller: HomeController,
            controllerAs: 'vm'
          })
          .state('tweets', {
            url: '/tweets',
            template: require("html-loader!../tweets/tweets.html"),
            controller: TweetController,
            controllerAs: 'vm'
          })

        $urlRouterProvider.otherwise('/')
    }])
})();
