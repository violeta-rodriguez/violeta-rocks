var app = angular.module('myWorksApp',['ngRoute']);
app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'MainController',
      templateUrl: 'views/home.html' 
    })
    .when('/agronometrics', {
      controller: 'WorksController',
      templateUrl: 'views/agronometrics.html'
    })
      .when('/prettylist', {
      controller: 'WorksController',
      templateUrl: 'views/prettylist.html'
    })
     .when('/ataraxia', {
      controller: 'WorksController',
      templateUrl: 'views/ataraxia.html'
    })
      .when('/santiago', {
      controller: 'WorksController',
      templateUrl: 'views/santiago.html'
    }) 
      .when('/expertos', {
      controller: 'WorksController',
      templateUrl: 'views/expertos.html'
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
});
