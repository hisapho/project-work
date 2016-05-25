$(document).ready(function(){
    $(".banner-title").animate({left:'350px',opacity:1},500,function(){
        $(".banner-text").animate({left:'0',opacity:1},500);
    });

    $(window).scroll(function(){
        slideIn($("#computer-img"),600);
        slideIn($("#award-img"),0);
        slideIn($("#pc-img"),555);
        slideIn($("#system-img"),0);
    });
    function slideIn(obj,left){
        var targetHeight = obj.offset().top;
        var scrollTop = $(this).scrollTop();
        if(scrollTop>targetHeight-400){
            obj.animate({left:left+'px',opacity:1,filter:'Alpha(opacity=90)'},300);
        }
    }

    var listLength = $(".link-list li").length * 37;
    console.log(listLength)
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
