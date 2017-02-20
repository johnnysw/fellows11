/**
 * Created by apple on 17/2/19.
 */
//require.config({
//    paths: {
//        jquery: 'jquery-1.12.4'
//    }
//});
require(['jquery','dialog'],function($,Dialog){
    var arr = [];
    $('#btn').on('click',function(){
        var dialog = new Dialog();
        arr.push(dialog);
        dialog.open({
            width:500,
            title:"登录",
            url:'login.html'
        });
    });
    $('#btn2').on('click',function(){
        if(arr.length > 0){
            arr.pop().close();
        }
    });

});