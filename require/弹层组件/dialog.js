/**
 * Created by apple on 17/2/19.
 */
define(['jquery'],function($){
    return {
        open:function(options){
            var setting = {
                width:400,
                height:300,
                title:"这个是标题"
            };
            $.extend(setting,options);
            var that = this;
            this.$container = $('<div class="demo-container"></div>');
            var $mask = $('<div class="demo-mask"></div>').on('click',function(){
                that.close();
            });
            var $content = $('<div class="demo-content"></div>').css({
                width:setting.width,
                height:setting.height,
                marginLeft: -setting.width/2,
                marginTop:-setting.height/2
            });
            var $demoTitle = $('<div class="demo-title"></div>');
            var $title = $('<span class="title">'+setting.title+'</span>');
            var $close = $('<span class="close">[X]</span>').on('click',function(){
                that.close();
            });
            var $main = $('<div class="demo-main"></div>').load(setting.url);
            $demoTitle.append($title).append($close);
            $content.append($demoTitle).append($main);
            this.$container.append($mask).append($content);

            $(document.body).append(this.$container);

        },
        close:function(){
            this.$container.remove();
        }
    };
});
