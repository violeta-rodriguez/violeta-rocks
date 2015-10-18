app.controller('MainController', ['$scope', function($scope) {
 $scope.agronometrics = {
    title: 'Agronometrics',
    description: 'Proyecto para startup enfocado en la recolección de datos agrícolas',
    img: 'img/shot-agro.jpg'
 }
 $scope.pretty = {
    title: 'Pretty List',
    description: 'Proyecto personal de notificaciones de productos de belleza en promoción',
    img: 'img/shot-pretty.jpg'
 } 
  $scope.santiago = {
    title: 'Santiago se Atreve',
    description: 'Portal web para la comunidad emprendedora de Santiago',
    img: 'img/shot-ssa.jpg'
 }
  $scope.expertos = {
    title: 'Expertos en color',
    description: 'Facebook Fan page y logo para peluquería',
    img: 'img/shot-expertos.jpg'
 }
  
  
  $scope.projects = [
    {
    title: 'Agronometrics',
    description: 'Proyecto para startup enfocado en la recolección de datos agrícolas',
    img: 'img/shot-agro.jpg'
  },
    {
    title: 'Pretty List',
    description: 'Proyecto personal de notificaciones de productos de belleza en promoción',
    img: 'img/shot-pretty.jpg'
  },
   {
    title: 'Santiago se Atreve',
    description: 'Portal web para la comunidad emprendedora de Santiago',
    img: 'img/shot-ssa.jpg'
  },
   {
    title: 'Expertos en color',
    description: 'Facebook Fan page y logo para peluquería',
    img: 'img/shot-expertos.jpg'
  }  
  ]
}]);