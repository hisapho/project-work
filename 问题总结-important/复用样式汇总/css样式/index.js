$(document).ready(function(){
    //搜索框的下拉列表效果1
    $("#check").on("click", function(e){
        $(".select").css("border-bottom","none");
        $(".select_list").show();
        $(document).one("click", function(){
            $(".select").css("border","1px solid #432508");
            $(".select_list").hide();
        });
        e.stopPropagation();
    });
    $(".select_list").on("click", function(e){
        e.stopPropagation();
    });
    $(".search_box").focus(function(){
        $(this).css("background","#e0cdb2");
        $(".select").css({border:"1px solid #432508",background:"#e0cdb2"});
        $(".select_list").css("display","none");
    });
    $(".search_box").blur(function(){
        $(this).css("background","");
        $(".select").css("background","");
    });
    $(".select_list li").click(function(){
        var text  = $(this).text();
        $(".total").text(text);
        $(".select").css("border","1px solid #432508");
        $(".select_list").css("display","none");
    });

    //搜索框的下拉列表效果2
    var listLength = $(".link-list li").length * 37;
    console.log(listLength);
    $(".link-list").hide().css('height',listLength+'px');
    $(".arrow-btn").click(function(e){
        $(".link-list").slideToggle(500);
        $(document).one("click", function(){
            $(".link-list").hide();
        });
        e.stopPropagation();
    });
    $(".link-list li").click(function(e){
        var curText = $(this).find('a').text();
        $(".cur-link").html(curText);
        $(".link-list").hide();
        e.stopPropagation();
    });
});

