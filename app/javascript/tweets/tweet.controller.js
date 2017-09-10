(() => {
  'user strict';

  angular
    .module('fwitter')
    .controller('TweetController', [function() {
      let vm = this;

      vm.name = "TJ";
    }])
})();
