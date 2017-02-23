/**
 * Created by apple on 17/2/23.
 */
$(function(){
    var $container = $('#container');
    var $imgShow = $('#img-show')
    var margin = 2;
    var iNow = 0;
    for(var i=0;i<24;i++){
        $container.append('<li><img src="imgs/'+(i+1)+'.jpg"/></li>');
    }

    var liWidth = ($(document.body).width()-3*margin)/4;
    $('li').css({
        width:liWidth,
        height:liWidth
    }).on('tap',function(e){
        var index = $(this).index();
        iNow = index;
        $container.hide();
        $imgShow.show().css({
            background:'url(imgs/'+(index+1)+'.jpg) no-repeat center',
            backgroundSize:'contain'
        });
        e.preventDefault();
    });
    $imgShow.on('tap',function(e){
        $container.show();
        $imgShow.hide();
        e.preventDefault();
    }).on('swipeleft',function(){
        //console.log(11111);
        iNow++;
        if(iNow == 24){
            return;
        }
        $imgShow.css({
            background:'url(imgs/'+(iNow+1)+'.jpg) no-repeat center',
            backgroundSize:'contain'
        });
    }).on('swiperight',function(){
        iNow--;
        if(iNow == -1){
            return;
        }
        $imgShow.css({
            background:'url(imgs/'+(iNow+1)+'.jpg) no-repeat center',
            backgroundSize:'contain'
        });
    });

});