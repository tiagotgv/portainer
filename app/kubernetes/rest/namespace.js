angular.module('portainer.kubernetes')
.factory('Namespace', ['$resource', 'API_ENDPOINT_ENDPOINTS', 'EndpointProvider', function NamespaceFactory($resource, API_ENDPOINT_ENDPOINTS, EndpointProvider) {
  'use strict';
  return $resource(API_ENDPOINT_ENDPOINTS + '/:endpointId/kubernetes/api/v1/namespaces/:id/:action', {
    endpointId: EndpointProvider.endpointID
  }, {
    query: { method: 'GET' }
  });
}]);
