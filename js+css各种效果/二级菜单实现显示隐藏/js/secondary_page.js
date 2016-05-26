$(function(){
    //搜索框边框
    $(".search_box").focus(function(){
        $(this).css("border","1px solid #33afcb");
    });
    $(".search_box").blur(function(){
        $(this).css("border","1px solid #dfdbdc");
    });
    //二级菜单显示
    $(".course_list .triangle").hide();
    var li_target = $(".course_list li");
    li_target.css({"background":"","color":""});
    li_target.each(function(){
        $(this).on("click",function(e){
            li_target.css({"background":"","color":""});
            $(".secondary_list").hide();
            $(".course_nav").css("height","200px");
            $(this).css({"background":"#1db1d5","color":"#fff"});
            $(".course_list .triangle").hide();
            var index =  li_target.index($(this)[0]);
            $(this).find(".triangle").show();
            $(".secondary_list").eq(index).show();
        });
    });
});
