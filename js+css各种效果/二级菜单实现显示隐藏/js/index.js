
$(function(){

    //搜索框边框
    $(".search").focus(function(){
        $(this).css("border","1px solid #33afcb");
    });
    $(".search").blur(function(){
        $(this).css("border","1px solid #dfdbdc");
    });

    //二级菜单显示
    var objShowMenu = null;
    $(".second_menu ul").hide();
    $(".left_menu li").each(function(){
        $(this).hover(function(){
            $(".second_menu").show();
            $(".second_menu").css({"background":"#f9fafc","border-top":"2px solid #33afcb"});
            $(".second_menu ul").css("display","none");
            var index = $( ".left_menu li" ).index($(this)[0]);
            $(".second_menu ul").eq(index).show();
            objShowMenu = $(".second_menu ul").eq(index-1);
        }, function(){
            $(".second_menu").css("display","none");
        });
    });
    $(".second_menu").hover(function(){
        $(this).css("display","block");
        objShowMenu.show();
    },function(){
        $(this).hide();
    });

    //淡入淡出轮播

    var num = $('.banner_span span').length;
    var curIndex = 0;
    var timer_banner = null;

    $('.banner_ul li:gt(0)').hide();//页面加载隐藏所有的li 除了第一个

    //底下小按钮点击切换
    $('.banner_span span').click(function(){
        $(this).addClass('banner_span_one').siblings('span').removeClass('banner_span_one');
        var curIndex1=$('.banner_span span').index(this);
        $('.banner_ul li').eq(curIndex1).fadeIn('slow').siblings('li').fadeOut('slow');
        curIndex=curIndex1;
    });

    //鼠标移动到幻灯片上时 显示左右切换按钮
    $('.banner').hover(function(){
            $('.banner_left').show();
            $('.banner_right').show();
        },function(){
            $('.banner_left').hide();
            $('.banner_right').hide();
        }
    );

    //左边箭头点击时切换
    $('.banner_left').click(function(){
        if(curIndex==0){
            curIndex = num;
        }
        //大图切换
        $('.banner_ul li').eq(curIndex-1).fadeIn('slow').siblings('li').fadeOut('slow');
        //小按钮切换
        $('.banner_span span').eq(curIndex-1).addClass('banner_span_one').siblings('span').removeClass('banner_span_one');
        curIndex--;
    });

    //左边按钮移动到其上时更换背景图片
    $('.banner_left').hover(function(){
        $('.banner_left').addClass('banner_left1');
        },
        function(){
        $('.banner_left').removeClass('banner_left1');
        }
    );


    //右边按钮移动到其上时更换背景图片
    $('.banner_right').hover(function(){
            $(this).addClass('banner_right1');
        },
        function(){
            $(this).removeClass('banner_right1');
        }
    );
    //右边箭头点击时切换
    $('.banner_right').click(function(){
        move_banner();
    });

    //自动播放函数
    function bannerMove(){
        timer_banner = setInterval(function(){
            move_banner();
        },3000)
    }
    bannerMove();//开始自动播放

    //鼠标移动到banner上时停止播放
    $('.banner').mouseover(function(){
        clearInterval(timer_banner);
    });

    //鼠标离开 banner 开启定时播放
    $('.banner').mouseout(function(){
        bannerMove();
    });

    //banner 右边点击执行函数
    var colorArr = ['#84370d','#727c7b','#84370d','#c2c7c9'];
    function move_banner(){
        if(curIndex==num-1){
            curIndex = -1;
        }
        //大图切换
        $('.banner_ul li').eq(curIndex+1).fadeIn('slow').siblings('li').fadeOut('slow');
        //小图切换
        $('.banner_span span').eq(curIndex+1).addClass('banner_span_one').siblings('span').removeClass('banner_span_one');
        $(".banner").css("backgroundColor",colorArr[curIndex+1]);
        curIndex++;
    }
});

