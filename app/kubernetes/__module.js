angular.module('portainer.kubernetes', ['portainer.app'])
.config(['$stateRegistryProvider', function ($stateRegistryProvider) {
  'use strict';

  var kubernetes = {
    name: 'kubernetes',
    parent: 'root',
    abstract: true
  };

  var dashboard = {
    name: 'kubernetes.dashboard',
    url: '/dashboard',
    views: {
      'content@': {
        templateUrl: 'app/kubernetes/views/dashboard/dashboard.html',
        controller: 'DashboardController'
      }
    }
  };

  $stateRegistryProvider.register(dashboard);
}]);
