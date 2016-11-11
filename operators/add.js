var add = angular.module('operator', []);
add.controller('operator.AddController', ['$scope', function($scope) {
    $scope.operator.name = 'add';
    $scope.operator.value = null;
    $scope.operator.result = null;
    $scope.operator.operation = function(a){
        return (a + b);
    };
}]);    