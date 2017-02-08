/**
 * Created by apple on 17/2/8.
 */
$(function(){
    //全选
    $("#CheckedAll").click(function(){
        $('[name=items]:checkbox').prop('checked', true);
    });
    //全不选
    $("#CheckedNo").click(function(){
        $('[type=checkbox]:checkbox').prop('checked', false);
    });
    //反选
    $("#CheckedRev").click(function(){
        $('[name=items]:checkbox').each(function(){
            //此处用JQ写法颇显啰嗦。体现不出JQ飘逸的感觉。
            //$(this).attr("checked", !$(this).attr("checked"));

            //直接使用JS原生代码，简单实用
            this.checked=!this.checked;
        });
    });
    //输出值
    $("#send").click(function(){
        var str="你选中的是：\r\n";
        $('[name=items]:checkbox:checked').each(function(){
            str+=$(this).val()+"\r\n";
        })
        alert(str);
    });
})
