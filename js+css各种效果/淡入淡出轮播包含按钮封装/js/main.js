$(document).ready(function () {
    var num = $('.banner_btn span').length;//小按钮个数
    var cur_index = 0;
    var timer_banner = null;
    //:gt 选择器选取 index 值高于指定数的元素。index 值从 0 开始。
    $('.banner_ul li:gt(0)').hide();//页面加载隐藏所有的li 除了第一个

    //底下小图标点击切换自身样式,同时对应index的li淡入,其他li淡出
    $('.banner_btn span').click(function () {
        $(this).addClass('banner_btn_one').siblings('span').removeClass('banner_btn_one');
        var index_btn = $('.banner_btn span').index(this);
        $('.banner_ul li').eq(index_btn).fadeIn('slow').siblings('li').fadeOut('slow');
        cur_index = index_btn;
    });

    //左边箭头按钮点击时切换
    $('.banner_left_arrow').click(function () {
        if (cur_index == 0) {
            cur_index = num;
        }
        //li切换
        $('.banner_ul li').eq(cur_index - 1).fadeIn('slow').siblings('li').fadeOut('slow');
        //底部按钮切换
        $('.banner_btn span').eq(cur_index - 1).addClass('banner_btn_one').siblings('span').removeClass('banner_btn_one');
        cur_index--;
    });
    //右边箭头点击时切换
    $('.banner_right_arrow').click(function () {
        fade_banner();
    });

    //左边按钮移动到其上时更换背景图片
    $('.banner_left_arrow').hover(function () {
        $(this).addClass('banner_left_arrow_hover');
    }, function () {
        $(this).removeClass('banner_left_arrow_hover');
    });

    //右边按钮移动到其上时更换背景图片
    $('.banner_right_arrow').hover(function () {
        $(this).addClass('banner_right_arrow_hover');
    }, function () {
        $(this).removeClass('banner_right_arrow_hover');
    });

    //鼠标移动到幻灯片上时 显示隐藏左右切换按钮
    $('.banner').hover(function () {
            $('.banner_left_arrow').show();
            $('.banner_right_arrow').show();
        },
        function () {
            $('.banner_left_arrow').hide();
            $('.banner_right_arrow').hide();
        });


    bannerMove();//开始自动播放

    //鼠标移动到banner上时停止播放
    $('.banner').hover(function () {
            clearInterval(timer_banner)
        },
        function () {
            bannerMove();
        });

    //自动播放函数
    function bannerMove() {
        timer_banner = setInterval(function () {
            fade_banner();
        }, 2000);
    }

    //banner 右边点击执行函数
    function fade_banner() {
        if (cur_index == num - 1) {
            cur_index = -1;
        }
        //大图切换
        $('.banner_ul li').eq(cur_index + 1).fadeIn('slow').siblings('li').fadeOut('slow');
        //小图切换
        $('.banner_btn span').eq(cur_index + 1).addClass('banner_btn_one').siblings('span').removeClass('banner_btn_one');
        cur_index++;
    }
});















