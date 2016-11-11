app.controller('MultiplyController', ['$scope', '$log', 'calculatorService', function($scope, $log, calculatorService) {
    $scope.$log = $log;
    $scope.operator = {};
    $scope.operator.name = 'multiply';
    $scope.operator.operation = function(num, val){
        return (num * val);
    };
     (function init() {
            // load data, init scope, etc.
        $scope.send = function($event){
            calculatorService.set($scope.operator);
            $scope.$emit('sent', 'bla');
        }
    })();
    // $scope.$on('$viewContentLoaded', function(event, data) { 
    //         $scope.$emit('sent', $scope.operator);
    //         console.log("mult", $scope.operator);
    //     });
}]);