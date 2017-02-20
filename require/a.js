/**
 * Created by apple on 17/2/19.
 */
define(function(require){
    console.log(44444444);
    var isArray = require('b');
    function arraySort(arr){
        if(!isArray(arr)){
            return;
        }
        arr.sort(function(a,b){
            return a-b;
        });
        return arr;
    }
    return arraySort;
});
