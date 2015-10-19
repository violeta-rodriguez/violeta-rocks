app.controller('MainController', ['$scope', function($scope) {
 $scope.agronometrics = {
    title: 'Agronometrics',
    description: 'Proyecto para startup enfocado en la recolección de datos agrícolas',
    img: 'img/shot-agro.jpg',
    link:'#/agronometrics'
 }
 $scope.pretty = {
    title: 'Pretty List',
    description: 'Proyecto personal de notificaciones de productos de belleza en promoción',
    img: 'img/shot-pretty.jpg',
    link: '#/prettylist'
 } 
  $scope.santiago = {
    title: 'Santiago se Atreve',
    description: 'Portal web para la comunidad emprendedora de Santiago',
    img: 'img/shot-ssa.jpg',
    link: '#/ssa'
 }
  $scope.expertos = {
    title: 'Expertos en color',
    description: 'Facebook Fan page y logo para peluquería',
    img: 'img/shot-expertos.jpg',
    link: '#/expertos'
 }
}]);
