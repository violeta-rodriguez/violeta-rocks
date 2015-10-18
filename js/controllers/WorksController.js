app.controller('WorksController', ['$scope', '$routeParams', function($scope, $routeParams) {
  photos.success(function(data) {
    $scope.detail = data[$routeParams.id];
  });
}]);
