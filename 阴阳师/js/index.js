/**
 * Created by 熊旭文 on 2016/12/23.
 */
//大图人物和字的移动效果
$(function(){
    $(".qingming").animate({
        opacity:1,
        top:40
    },1500);
    $(".shenle").animate({
        top:0,
        opacity:1,
    },1000);
    $(".main .main-left-img2").animate({
        top:-140,
        opacity:1
    },1000);

    $(".main .main-left-img1").animate({
        left:53,
        opacity:1
    },1000)
})
//这是阴阳师几个字出来的现象
$(function(){
    $(window).scroll(function(){
       if($(this).scrollTop()  >= 20){
           $(".main-left-img1").stop().animate({
               opacity:0,
           },700);
       }else{
           $(".main-left-img1").stop().animate({
               opacity:1
           },700);
       }
    })
})
//固定的标题效果
$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()  >= 20){
            $(".main-top1-fixed").fadeIn(100);
        }else{
            $(".main-top1-fixed").fadeOut(100);
        }
    })
})

//二维码扫描
var b=true;
setInterval(function(){
    if(b){
        b=false;
        $(".main-erwei i").animate({
            top:89
        },3000,function(){
            $(".main-erwei i").animate({
                top:0
            },2000,function(){
                b=true;
            })
        })
    }
},50)

//游戏日历部分的大按钮移动效果
$(function(){
    $(".icon1").mouseenter(function(){
        $(this).stop().animate({
            marginLeft:48
        })
    })
    $(".icon1").mouseleave(function() {
        $(this).stop().animate({
            marginLeft: 28
        })
    })

    $(".icon2").mouseenter(function(){
        $(this).stop().animate({
            marginRight:48
        })
    })
    $(".icon2").mouseleave(function() {
        $(this).stop().animate({
            marginRight: 28
        })
    })

    $(".icon3").mouseenter(function(){
        $(this).stop().animate({
            marginLeft:48
        })
    })
    $(".icon3").mouseleave(function() {
        $(this).stop().animate({
            marginLeft: 28
        })
    })

    $(".icon4").mouseenter(function(){
        $(this).stop().animate({
            marginLeft:28
        })
    })
    $(".icon4").mouseleave(function() {
        $(this).stop().animate({
            marginLeft: 0
        })
    })

    $(".icon5").mouseenter(function(){
        $(this).stop().animate({
            marginLeft:48
        })
    })
    $(".icon5").mouseleave(function() {
        $(this).stop().animate({
            marginLeft: 28
        })
    })

    $(".icon6").mouseenter(function(){
        $(this).stop().animate({
            marginRight:48
        })
    })
    $(".icon6").mouseleave(function() {
        $(this).stop().animate({
            marginRight: 28
        })
    })

    $(".icon7").mouseenter(function(){
        $(this).stop().animate({
            marginLeft:48
        })
    })
    $(".icon7").mouseleave(function() {
        $(this).stop().animate({
            marginLeft: 28
        })
    })

    $(".icon8").mouseenter(function(){
        $(this).stop().animate({
            marginTop:0
        })
    })
    $(".icon8").mouseleave(function() {
        $(this).stop().animate({
            marginTop: -15
        })
    })

    $(".icon9").mouseenter(function(){
        $(this).stop().animate({
            marginTop:0
        })
    })
    $(".icon9").mouseleave(function() {
        $(this).stop().animate({
            marginTop: -15
        })
    })

    $(".icon10").mouseenter(function(){
        $(this).stop().animate({
            marginTop:0
        })
    })
    $(".icon10").mouseleave(function() {
        $(this).stop().animate({
            marginTop: -15
        })
    })
})
//底部的二维码出现
$(function(){
    $(".footer .footer-btn").mouseenter(function(){
        $(".bottom-code").children("img").stop().animate({
            opacity:1,
        },1000);
        //$(".bottom-code").children("p").animate({
        //    opacity:1,
        //    display:"block"
        //});
        $(".footer-btn .txt2 em").stop().animate({
            opacity:0
        },50);
        $(".bar").stop().animate({
            top:200
        },100)
        $(".door").stop().animate({
            top:400
        },300)
    })
    $(".footer .footer-btn").mouseleave(function(){
        $(".bottom-code").children("img").stop().animate({
            opacity:0,
            top:260
        },300);
        //$(".bottom-code").children("p").animate({
        //    opacity:0
        //});
        $(".footer-btn .txt2 em").stop().animate({
            opacity:1
        });
        $(".bar").stop().animate({
            top:250
        },150)
        $(".door").stop().animate({
            top:344
        },500)
    })
})

//第一个轮播图
$(function(){
    //1.获得要操作的对象
    var box = document.getElementById("box");
    var ad = box.children[0]
    var ul =  document.getElementById("imgs1");
    var lis = ul.children;
    var ol = ad.children[1];
    var timerId = null;

    //2. 根据li标签的个数，动态的生成小方块
    for(var i=0;i<lis.length;i++){
        var li =document.createElement("li");
        ol.appendChild(li);
    }
    // 3. 鼠标移入ol下面的li(小方块),当前颜色变成黄色
    var olLis = ol.children;//获得ol下面的所有的li标签
    olLis[0].setAttribute("class","current");
    for(var j = 0; j < olLis.length; j++) {
        olLis[j].setAttribute("index",j);
        olLis[j].onmouseover = function (){
            for(var k = 0; k < olLis.length; k++) {
                olLis[k].removeAttribute("class");
            }
            this.setAttribute("class","current");
            var index = this.getAttribute("index");//得到鼠标移入当前小方块的索引的值
            var target = -360*index;
            animate(ul,target);
            // 11. 让索引都同步起来
            pic = square = index;
        }
    }

    // 5. 鼠标移入盒子显示左右按钮
    box.onmouseover = function (){
        //arr.style.display = "block";
        // 13. 清除定时器
        clearInterval(timerId);
    }
    box.onmouseout = function (){
        //arr.style.display = "none";
        // 14. 再次开启定时器
        timerId = setInterval(playNext,1000);
    }
    // 7. 克隆第一张图片，放在最后面
    var firstImg = lis[0].cloneNode(true);
    ul.appendChild(firstImg);

    // 6. 给右侧按钮注册事件
    var pic = 0;
    var square = 0;//重新给小方块定义一个索引

    function empty(){
        for(var k = 0; k < olLis.length; k++) {
            olLis[k].removeAttribute("class");
        }
    }

    // 12.开启自动轮播
    timerId= setInterval(playNext,2500);
    /*
     *
     * 封装了一个运行下一张图片的函数
     * */
    function playNext(){
        //console.log(pic);
        if(pic==lis.length-1){ //这里不包括克隆的那一张  4
            pic=0;
            ul.style.left = "0px";//快速恢复到原来的位置
        }
        pic++; //进行下一张图片的移动
        var target = -360 * pic;
        animate(ul,target);

        //8. 让小方块的背景颜色和显示的图片同步起来
        if(square<olLis.length-1){
            square++;
        }else {
            square = 0;
        }
        empty();
        olLis[square].setAttribute("class","current");
    }

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
})

//第二个轮播图
$(function(){
    //1.获得要操作的对象
    var box = document.getElementById("box1");
    var ad = box.children[0]
    var ul =  document.getElementById("imgs");
    var lis = ul.children;
    var ol = ad.children[1];
    var timerId = null;

    //2. 根据li标签的个数，动态的生成小方块
    for(var i=0;i<lis.length;i++){
        var li =document.createElement("li");
        ol.appendChild(li);
    }
    // 3. 鼠标移入ol下面的li(小方块),当前颜色变成黄色
    var olLis = ol.children;//获得ol下面的所有的li标签
    olLis[0].setAttribute("class","current");
    for(var j = 0; j < olLis.length; j++) {
        olLis[j].setAttribute("index",j);
        olLis[j].onmouseover = function (){
            for(var k = 0; k < olLis.length; k++) {
                olLis[k].removeAttribute("class");
            }
            this.setAttribute("class","current");
            var index = this.getAttribute("index");//得到鼠标移入当前小方块的索引的值
            var target = -368*index;
            animate(ul,target);
            // 11. 让索引都同步起来
            pic = square = index;
        }
    }

    // 5. 鼠标移入盒子显示左右按钮
    box.onmouseover = function (){
        //arr.style.display = "block";
        // 13. 清除定时器
        clearInterval(timerId);
    }
    box.onmouseout = function (){
        //arr.style.display = "none";
        // 14. 再次开启定时器
        timerId = setInterval(playNext,1000);
    }
    // 7. 克隆第一张图片，放在最后面
    var firstImg = lis[0].cloneNode(true);
    ul.appendChild(firstImg);

    // 6. 给右侧按钮注册事件
    var pic = 0;
    var square = 0;//重新给小方块定义一个索引

    function empty(){
        for(var k = 0; k < olLis.length; k++) {
            olLis[k].removeAttribute("class");
        }
    }

    // 12.开启自动轮播
    timerId= setInterval(playNext,2500);
    /*
     *
     * 封装了一个运行下一张图片的函数
     * */
    function playNext(){
        console.log(pic);
        if(pic==lis.length-1){ //这里不包括克隆的那一张  4
            pic=0;
            ul.style.left = "0px";//快速恢复到原来的位置
        }
        pic++; //进行下一张图片的移动
        var target = -368 * pic;
        animate(ul,target);

        //8. 让小方块的背景颜色和显示的图片同步起来
        if(square<olLis.length-1){
            square++;
        }else {
            square = 0;
        }
        empty();
        olLis[square].setAttribute("class","current");
    }

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

})

//第二轮播图下面的大按钮移动效果
$(function(){
    $(".question-nav").children("a").eq(0).mouseenter(function(){
        $(".str1").stop().animate({
            marginTop:-15
        })
    })
    $(".question-nav").children("a").eq(0).mouseleave(function(){
        $(".str1").animate({
            marginTop:0
        },80)
    })
    $(".question-nav").children("a").eq(1).mouseenter(function(){
        $(".str2").stop().animate({
            marginTop:-15
        })
    })
    $(".question-nav").children("a").eq(1).mouseleave(function(){
        $(".str2").animate({
            marginTop:0
        },80)
    })
    $(".question-nav").children("a").eq(2).mouseenter(function(){
        $(".str3").stop().animate({
            marginTop:-15
        })
    })
    $(".question-nav").children("a").eq(2).mouseleave(function(){
        $(".str3").animate({
            marginTop:0
        },80)
    })
    $(".question-nav").children("a").eq(3).mouseenter(function(){
        $(".str4").stop().animate({
            marginTop:-15
        })
    })
    $(".question-nav").children("a").eq(3).mouseleave(function(){
        $(".str4").animate({
            marginTop:0
        },80)
    })
})

//图片的变化
$(function(){
    $(".c1").mouseenter(function(){
        $(this).children(".cover").css("display","block");
    })

    $(".c1").mouseleave(function(){
        $(this).children(".cover").css("display","none");
    })
})


//活动专区图片变化
$(function(){
    $(".c2").mouseenter(function(){
        $(this).children("img").animate({
            width:275,
            height:155
        })
    })
    $(".c2").mouseleave(function(){
        $(this).children("img").animate({
            width:270,
            height:153
        })
    })
})