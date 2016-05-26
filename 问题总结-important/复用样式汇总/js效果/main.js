$(document).ready(function () {

    //轮播
    var curIndex = 0;
    var timer_banner = null;
    var type = 'slow';
    var ulObj = $(".banner");
    var liObj = $(".banner li");
    var btn = $('.banner-btn span');
    var num = btn.length;//小按钮个数
    var titleText = $(".banner-btn em");
    var textArr = ['视水寓人1','视水寓人2','视水寓人3'];//切换的图片标题

    ulObj.find('li').css({'width':'330px', 'height': '222px'});
    liObj.eq(0).show().siblings('li').hide();
    titleText.html(textArr[0]);

    //下方按钮点击
    btn.click(function () {
        clearInterval(timer_banner);
        $(this).addClass('btn-active').siblings('span').removeClass('btn-active');
        var btnIndex = $('.banner-btn span').index(this);
        titleText.html(textArr[btnIndex]);
        $(".banner li").eq(btnIndex).fadeIn(type).siblings('li').fadeOut(type);
        curIndex = btnIndex;
    });

    //自动播放
    //bannerMove();
    function bannerMove() {
        timer_banner = setInterval(function () {
            fadeImg();
        }, 2000);
    }
    function fadeImg() {
        if (curIndex == num - 1) {
            curIndex = -1;
        }
        liObj.eq(curIndex + 1).fadeIn(type).siblings('li').fadeOut(type);
        btn.eq(curIndex + 1).addClass('btn-active').siblings('span').removeClass('btn-active');
        curIndex++;
    }

    //导航栏切换
    var targetObj = $(".sub-nav li a");

    $(".sub-nav li").find('a').removeClass('on');
    $(".triangle").hide();
    targetObj.eq(0).addClass('on').find('.triangle').show();
    $(".story-content").eq(0).show().siblings('.story-content').hide();

    targetObj.click(function(){
        $(".sub-nav li").find('a').removeClass('on').find('.triangle').hide();
        var targetIndex = targetObj.index(this);
        targetObj.eq(targetIndex).addClass('on').find('.triangle').show();
        $(".story-content").eq(targetIndex).show().siblings('.story-content').hide();
    });

    //水文化图片展示
    var boxWidth = 1170;//可见区域的宽度
    var photoLi = 220;//li的宽度
    var liMargin = 14;//li的左右外间距
    var slideUl = $(".photo-list");
    var photoUl = slideUl.find("li").length*(photoLi+liMargin);
    var pageCount = Math.ceil(photoUl/boxWidth);//总页数
    var page = 1;
    var timer = null;

    slideUl.css('width',photoUl+'px');
    $(".prev-btn").click(function(){
        clearInterval(timer);
        if(!slideUl.is(":animated")){
            if(page == 1){//当前页是第一页,left减为最后一页时的left值
                slideUl.animate({left:'-='+boxWidth*(pageCount-1)},"slow");
                page = pageCount;
            }else{
                slideUl.animate({left:'+='+boxWidth},"slow");
                page--;
            }
        }
    });

    $(".next-btn").click(function(){
        clearInterval(timer);
        slideNext();
    });

    //鼠标hover图片,停止滑动
    $(".photo-list li").hover(function(){
        clearInterval(timer);
    },function(){
        autoSlide();
    });

    //自动播放
    //autoSlide();

    function autoSlide(){
        timer = setInterval(function(){
            slideNext();
        },3000);
    }

    function slideNext(){
        if(!slideUl.is(":animated")){
            if(page == pageCount){//当前页是最后一页
                slideUl.animate({left:'0px'},"slow");
                page =1;
            }else{
                slideUl.animate({left:'-='+boxWidth},"slow");
                page++;
            }
        }
    }
});
