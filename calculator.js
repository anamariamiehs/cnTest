function Calculator() {
    this.result = null;
    this.operators = [];
    this.selected = [];
    this.calculate = function(){
        console.log('calculate')
    }
    this.reset = function() {
        console.log('reset')
    }
}