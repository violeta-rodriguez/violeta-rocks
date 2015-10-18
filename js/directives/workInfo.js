app.directive('workInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      name: '=' 
    }, 
    templateUrl: 'js/directives/workInfo.html' 
  }; 
});