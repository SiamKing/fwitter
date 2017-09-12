
import angular from 'angular';
import accordion from 'angular-ui-bootstrap/src/accordion';
import dropdown from 'angular-ui-bootstrap/src/dropdown';
import uirouter from '@uirouter/angularjs';
import routes from './routes';
import tabsComponent from '../components/tab-component/tabs.component'

(() => {
  'user strict';

  angular
    .module('fwitter', [uirouter, accordion, dropdown])
    .config(routes)
    .component('tabsComponent', tabsComponent)
})();
