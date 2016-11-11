var app = angular.module('cnApp', []);

app.service('calculatorService', function() {
    this.operations = [];
    this.get = function() {
        return this.operations;
    };
    this.set = function(operation) {
        this.operations.push(operation);
        return this.operations;
    };
  });

