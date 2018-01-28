angular.module('portainer.kubernetes', [])
.controller('KubernetesDashboardController', ['$scope', 'Notifications', 'Namespace',
function ($scope, Notifications, Namespace) {

  function initView() {
    Namespace.query().$promise
    .then(function success(data) {
      console.log(JSON.stringify(data, null, 4));
    })
    .catch(function error(err) {
      Notifications.error('Failure', err, 'Unable to retrieve namespaces');
    });
  }

  initView();
}]);
