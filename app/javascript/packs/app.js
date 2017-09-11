import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import UserController from '../user/user.controller';
import HomeController from '../home/home.controller'


(() => {
  'user strict';

  angular
    .module('fwitter', [uirouter])
    .controller(UserController)
    .controller(HomeController)
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('home', {
            url: '/',
            template: require("html-loader!../home/home.html"),
            controller: HomeController,
            controllerAs: 'vm'
          })
          .state('home.userProfile', {
            url: 'userProfile',
            template: require("html-loader!../user/user.html"),
            controller: UserController,
            controllerAs: 'vm'
          })

        $urlRouterProvider.otherwise('/')
    }])
})();
