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
            template: `<h1>{{ vm.name }}</h1>`,
            controller: HomeController,
            controllerAs: 'vm'
          })
          .state('home.tweets', {
            url: '/tweets',
            template: `<h1>{{ name }}</h1>`,
            controller: TweetController,
            controllerAs: 'vm'
          })

        $urlRouterProvider.otherwise('/')
    }])
})();
