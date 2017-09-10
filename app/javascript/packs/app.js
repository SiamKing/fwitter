import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import devise from 'devise'
(() => {
  'user strict';

  angular
    .module('fwitter', [uirouter, devise])
    .controller('TweetController', [function() {
      let vm = this;

      vm.name = "TJ";
    }])
})();
