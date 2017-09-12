import UserController from '../user/user.controller';
import HomeController from '../home/home.controller';

routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider
      .state('home', {
        url: '/home',
        template: require("html-loader!../home/home.html"),
        controller: HomeController,
        controllerAs: 'vm'
      })
      .state('userProfile', {
        url: '/userProfile',
        template: require("html-loader!../user/user.html"),
        controller: UserController,
        controllerAs: 'vm'
      })

  $urlRouterProvider.otherwise('/')
}
