import angular from 'angular';
import accordion from 'angular-ui-bootstrap/src/accordion';
import dropdown from 'angular-ui-bootstrap/src/dropdown';
import uirouter from '@uirouter/angularjs';
import routes from './routes';
import tabs from '../components/tab-component/tabs.component';
import TweetsController from '../components/tweets/tweets.controller';
import pane from '../components/tab-component/pane.component';
import TweetService from '../factories/tweet.service';

(() => {
  'user strict';

  angular
    .module('fwitter', [uirouter, accordion, dropdown])
    .config(function($httpProvider) {
      // for CSRF errors
      $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
    })
    .config(routes)
    .component('tabs', tabs)
    .controller('TweetsController', TweetsController)
    .component('pane', pane)
})();
