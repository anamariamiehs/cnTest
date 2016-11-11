// var calculator = angular.module('cnApp.calculator', []);

app.controller('CalculatorController', ['$scope', 'calculatorService', function($scope, calculatorService) {
    $scope.result = null;
    $scope.operators = calculatorService.get();
    $scope.selected = [];
    $scope.calculate = function(){

    }
    $scope.reset = function() {

    }
    $scope.$on('sent', function(event, data) {
        console.log("calc", data);
    });
}]);    
