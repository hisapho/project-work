$(document).ready(function () {
    var num = $('.banner_btn span').length;//小按钮个数4
    var cur_index = 0;
    var timer_banner = null;
    var boxWidth =1000;
    var ulObj = $(".banner_main");
    var btn = $('.banner_btn span');
    slideAuto();
    function slideAuto(){
        timer_banner = setInterval(slideNext,2000);
    }
    function slideNext(){
        $('.banner_btn span').eq(cur_index + 1).addClass('banner_btn_one').siblings('span').removeClass('banner_btn_one');
        if(cur_index == num-1){
            ulObj.css({"left":0}).find("li").eq(0).fadeIn("slow");
            cur_index = 0;
        }else{
            ulObj.animate({left:"-="+boxWidth},500);
            cur_index++;
        }
    }

    btn.click(function(){
        clearInterval(timer_banner);
        $(this).addClass('banner_btn_one').siblings('span').removeClass('banner_btn_one');
        var index = $('.banner_btn span').index(this);
        ulObj.animate({left:-boxWidth*(index)},500);
    })
});















