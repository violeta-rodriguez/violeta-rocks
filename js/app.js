var app = angular.module('myWorksApp',['ngRoute']);
app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'HomeController', 
      templateUrl: 'views/home.html' 
    })
    .when('/works/:id', { 
      controller: 'WorkController', 
      templateUrl: 'views/work.html' 
    }) 
    .otherwise({ 
      redirectTo: '/' 
    }); 
});