/**
 * Created by weiyuxuan on 16/12/23.
 */
window.onload = function () {
    //获取要操作的对象
    var box = document.getElementById("banner");
    var arr = document.getElementById("arr");
    var left = document.getElementById("arr-left");
    var right = document.getElementById("arr-right");
    var ul = document.getElementById("banner-img");
    var uLis = ul.children;
    var imgWidth = uLis[0].offsetWidth;
    var timerId = null;
    // //添加ol列表，添加页码
    // for(var i = 0; i < uLis.length; i++){
    //     var li = document.createElement("li");
    //     ol.appendChild(li);
    //     li.innerHTML = i + 1;
    // }
    // //添加鼠标移入移出的翻转变色效果
    // var oLis = ol.children;
    // oLis[0].setAttribute("class","current");
    // for(var i = 0; i < oLis.length; i++){
    //     oLis[i].setAttribute("index",i);
    //     oLis[i].onmouseover = function () {
    //         empty();
    //         this.setAttribute("class","current");
    //         //让图片和页码数字同步
    //         var index = this.getAttribute("index");
    //         var target = -imgWidth*index;
    //         animate(ul,target);
    //         pic = square = index;
    //     }
    //     oLis[i].onmouseout = function () {
    //         empty();
    //     }
    // }
    // 添加鼠标移入移出的左右按钮的显示情况的事件
    box.onmouseover = function () {
        arr.style.display = "block";
        clearInterval(timerId);
    };
    box.onmouseout = function () {
        // arr.style.display = "none";
        timerId = setInterval(playNext,3000);
    };
    //克隆第一张图放在最后
    var firstClone = uLis[0].cloneNode(true);
    // var lastClone = uLis[3].cloneNode(true);
    ul.appendChild(firstClone);
    // ul.insertBefore(lastClone,uLis[0]);

    //给按钮添加点击事件
    //右按钮
    right.onclick = function () {
        playNext();
    };
    //左按钮
    left.onclick = function () {
        if(pic == 0){
            pic = uLis.length - 1;
            ul.style.left = -imgWidth*(uLis.length-1)+"px";
        }
        pic--;
        var target = -imgWidth*pic;
        animate(ul,target);
        //页码与按钮图片同步
        // if(square > 0){
        //     square--;
        // }else{
        //     square = oLis.length-1;
        // }
        // empty();
        // oLis[square].setAttribute("class","current");
    };
    //自动轮播
    timerId = setInterval(playNext,3000);
    //独立一个播放下一张图片的函数
    var pic = 0;
    var square = 0;//给页码定义一个新的索引
    /**
     * 封装了一个播放下一张图片的函数
     * */
    function playNext() {
        //播放到最后一张，也就是克隆出来的那一张的时候，要换成第一张的位置
        if(pic == uLis.length-1){
            pic = 0;
            ul.style.left = "0px";
        }
        pic++;
        var target = -imgWidth*pic;
        animate(ul,target);
        //图片切换和页码对应一张
        // if(square < oLis.length - 1){
        //     square++;
        // }else{
        //     square = 0;
        // }
        // empty();
        // oLis[square].setAttribute("class","current");
    }
    //独立一个清除样式的函数
    /**
     * 这是一个清除下角页码样式的函数
     * */
    // function empty() {
    //     for(var i = 0; i < oLis.length; i++){
    //         oLis[i].removeAttribute("class");
    //     }
    // }

    /**
     * 封装了一个匀速移动的动画函数
     * @param obj
     * @param target
     */
    function animate(obj,target){
        clearInterval(obj.timerId); // 保证当前标签对象运动的时候，只会开启一个定时器
        obj.timerId=  setInterval(function(){  // 开启定时器
            var leader = obj.offsetLeft; //获取标签对象的当前的位置
            var  step = 20;//定义一个步长
            step=  leader<target?step:-step; //判断步长是正还是负
            if(Math.abs(leader-target)>Math.abs(step)){ //修改判断条件
                leader = leader + step;//在当前的位置加上步长
                obj.style.left = leader +'px';
            }else {
                clearInterval(obj.timerId); //清除当前对象的定时器
                obj.style.left = target+'px'; //最后不足一个步长的时候，不用迈那一步了，直接设置成目标位置即可
            }
        },15);
    }

    $(".top-nav li").mouseenter(function () {
        $(".top-nav i").eq($(this).index()).addClass("first");
    });
    $(".top-nav li").mouseleave(function () {
        $(".top-nav i").eq($(this).index()).removeClass("first");
    });
    $(".top-nav li").click(function () {
        $(".top-nav i").removeClass("first top-selected");
        $(".top-nav i").eq($(this).index()).addClass("top-selected");
        //return false;
    })




    $("#tab a").mouseenter(function () {

        $(".main").removeClass("show");
        $(".main").eq($(this).index()).addClass("show");
        $("#tab a").removeClass("tab－selected");
        $("#tab a").eq($(this).index()).addClass("tab－selected");

    })


    $(window).scroll(function () {
        if($(window).scrollTop() >= 300){
            $(".pageNav").css("display","block");
        }else {
            $(".pageNav").css("display","none");
        }
    })




}


