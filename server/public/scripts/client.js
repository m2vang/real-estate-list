const myApp = angular.module('myApp', ['ngRoute']);
console.log('js loaded');

myApp.config(function ($routeProvider) {
    console.log('config working');
    
    $routeProvider.when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as hc'
    })
    .when('/sale', {
        templateUrl: 'views/sale.html',
        controller: 'SaleController as sc'
    })
    .when('/rent', {
        templateUrl: 'views/rent.html',
        controller: 'RentController as rc'
    })
    .otherwise({
        templateUrl: 'views/404.html'
    });
}); //end of myApp.config