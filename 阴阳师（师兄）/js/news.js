
//固定的标题效果
$(function(){

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 20) {
            $("#wrap").fadeIn(100);
        } else {
            $("#wrap").fadeOut(100);
        }
        //$(".gotop").
        if ($(this).scrollTop() >= 500) {
            $(".gotop").fadeIn(100);
        } else {
            $(".gotop").fadeOut(100);
        }
    })







//青蛙跳跃
        $("#qw").animate({
            left:400
        },5000,"linear",function(){
            $("#qw").css({
                '-moz-transform':'scaleX(-1)',
                '-webkit-transform':'scaleX(-1)',
                '-o-transform':'scaleX(-1)',
                'transform':'scaleX(-1)'
            },3000)
        })

        $("#qw").animate({
            left:100,
            opacity:0
    },3000)
    //$("#qw").css({
    //    '-moz-transform':'scaleX(-1)',
    //    '-webkit-transform':'scaleX(-1)',
    //    '-o-transform':'scaleX(-1)',
    //    'transform':'scaleX(-1)'
    //},3000)


        var bar=$(".NIE-mainBar");
        bar.fadeIn(3000)
//二维码事件
    var s=true
    setInterval(function(){
        if(s){
            s=false
            $("#line").animate({
                top:210
            },3000,function(){
                $("#line").animate({
                    top:49
                },2000,function(){
                    s=true
                })
            });
        }

    },200)

    //
    //setInterval(function(){
    //    //console.log(123);
    //    if(b){
    //        b=false;
    //        $(".down-erweima i").animate({
    //            top: 113
    //        },function(){
    //            $(".down-erweima i").animate({
    //                top:8
    //            },function(){
    //                b=true
    //            })
    //        });
    //    }
    //},200)

    var s1=true;
    setInterval(function(){
        if(s1){
            s1=false
            $("#lines").animate({
                top:163
            },3000,function(){
                $("#lines").animate({
                    top:0
                },2000,function(){
                    s1=true
                })
            });
        }

    },200)
//新闻头部
    var line=$("#new-line");
    console.log(line);
    $("#toggle").children().mouseenter(function(){
        $(this).siblings().removeClass("color")
        $(this).append(line)
    })

    //var line=document.getElementById("new-line");;
    //var ul=document.getElementById("toggle");;
    //var lis=ul.children;
    //var last=0;
    //for(var i=0;i<lis.length;i++){
    //    console.log(lis);
    //    lis[i].onmouseover=function(){
    //        var target=this.offsetLeft-26;
    //        animate(line,target);
    //    }
    //    lis[i].onmouseout=function(){
    //        var target=this.offsetLeft-26;
    //        animate(line,target)
    //    }
    //}
    //function animate(obj,target){
    //    clearInterval(obj.timerId);
    //    obj.timerId=setInterval(function(){
    //        var leader=obj.offsetLeft;
    //        var step=Math.ceil((target-leader)/10);
    //        step=step>0?Math.ceil((target-leader)/10):Math.floor((target-leader)/10);
    //        leader+=step;
    //        if(target==leader){
    //            clearInterval(obj.timerId);
    //        }
    //        obj.style.left=leader+'px';
    //    },15);
    //}

    //新闻内容背景图
    $(".NIE-ban-B-l-f").mouseenter(function(){
        $(this).animate({
            'background-position':"-100px"
        },2000,function(){
            $(this).animate({
                'background-position':0
            })
        })
    })
    //关闭按钮
    $(".NIE-ban-box").click(function() {
        $(".NIE-ban-box,.NIE-ban-B-r").css({
            //right:-330
            "display":"none"

        })
    })



    //微信微博二维码切换
    var box=document.getElementById("media_box");
    var weixin=box.children[0];//ul对象
    var weixin_tit=weixin.children[0];
    var weibo_tit=weixin.children[1];
    var wrap=box.children[1];
    var first=wrap.children[0];
    var last=wrap.children[1];

    weixin_tit.onmouseover=function(){
        this.style.backgroundPosition="-290px -62px"
        first.setAttribute("class","cur");
        //first.style.display="block"
        last.style.display="none"
    }
    weixin_tit.onmouseout=function(){
        this.style.backgroundPosition="-290px -124px"
        first.removeAttribute("class","cur")
        last.style.display="block"
    }

    //底部页码
    $(".ban-footer-l").click(function(){
        //$(".mes").css("display","block")
        $(".mes").slideDown({
            "height":238,
            "width":80

        })
    })
    $(".ban-footer-l").mouseleave(function(){
        //$(".mes").css("display","block")
        $(".mes").slideUp({
            "height":0,
            "width":0
        })
    })


        //轮播图
    //function playpic() {
    //    var leader = box_min.offsetLeft;
    //    console.log(123);
    //    var step = -10;
    //    leader += step;
    //    if (leader>-1300) {
    //        box_min.style.left = leader + 'px';
    //    } else {
    //        box_min.style.left = '0px';
    //        console.log(123);
    //    }
    //    console.log(leader);
    //}

    //var wrap = document.getElementsByClassName("wrap");
    //var box_min = document.getElementById("box_min");
    ////var imgs=box.children;
    //var hd=document.getElementsByClassName("hd");
    ////var left = document.getElementById("left");
    //////var right = document.getElementById("right");
    ////var ul = document.getElementById("imgs");
    ////var lis = ul.children;
    ////var i = hd.children[1];
    ////var imgWidth = box.offsetWidth;
    //var timerId=null;
    //var playpic = function(){
    //    // 1. 先获得ul当前的位置
    //    var leader = box_min.offsetLeft;
    //    var step = -10;
    //    leader = leader+step;
    //    box_min.style.left = leader + 'px';
    //}
    //
    ////var timerId = setInterval(playpic,100);
    // //3.鼠标移入大盒子的时候，要暂时移动
    //box_min.onmouseover = function (){
    //    clearInterval(timerId);
    //}
    //// 4. 鼠标离开大盒子的时候，要重新开启定时器
    //box_min.onmouseout = function (){
    //    timerId=  setInterval(playpic,100);
    //}



    //var index=0;
    //var pic = 0;
    //var timerId = null;
    //var wrapWidht = $(".wrap").width();
    //var bannerBox = $(".banner-box");
    //var as = bannerBox.children();
    //timerId = setInterval(function () {
    //    if(pic>=as.length-1){
    //        pic = 0;
    //        bannerBox.css({
    //            left: -wrapWidht*pic+"px"
    //        })
    //    }
    //    pic++;
    //    bannerBox.animate({
    //        left: -wrapWidht*pic+"px"
    //    });
    //},1000)
//======================================================================
    var pic = 0;//创建一个遍历保存图片的索引
    var index = 0;//保存小圆圈的索引
    var timerId = null;//创建定时器id
    var wrapWidht = $(".wrap").width();//获取wrap的宽度,也就是图片的宽度
    var bannerBox = $(".wrap .banner-box");//获取banner-box元素
    var as = bannerBox.children();//获取所有的a标签
    var hdI = $(".hd i"); //获取所有的i标签
    timerId = setInterval(function () {//设置定时器
        //如果索引到了图片的最后一张,就让图片瞬间回到第一张
        if(pic>=as.length-1){
            pic = 0;
            bannerBox.css({//css设置样式
                left: -wrapWidht*pic+"px"
            })
        }
        pic++;//没1000钟加1
        //移动bannerBox,向左移动pic张图片
        bannerBox.animate({
            left: -wrapWidht*pic+"px"
        });
        //如果index小于小圆圈的个数,就继续加,到了最后一个时,返回第一个
        if(index<hdI.length-1){
            index++;
        }else {
            index = 0;
        }
        //获取所有i标签中的第index个,添加类名on,移出其他兄弟标签的类名
        hdI.eq(index).addClass("on").siblings().removeClass("on");
    },1000)
//=============================================================================================================
//    var pic1 = 0;
//    var timerId1 = null;
//    var wrapWidht = $(".wrap").width();
//    var bannerbox1 = $(".banner-box1");
//    var as = bannerbox1.children();
//    timerId1 = setInterval(function () {
//        if(pic>=as.length-1){
//            pic = 0;
//            bannerbox1.css({
//                left: -wrapWidht*pic+"px"
//            })
//        }
//        pic1++;
//        bannerbox1.animate({
//            left: -wrapWidht*pic+"px"
//        });
//    },1000)
    //=====================================================================================================
    var pic1 = 0;//创建一个遍历保存图片的索引
    var index1 = 0;//保存小圆圈的索引
    var timerId1 = null;//创建定时器id
    var tempWidht = $(".tempWrap").width();//获取wrap的宽度,也就是图片的宽度
    var bannerBox1 = $(".tempWrap .banner-box1");//获取banner-box元素
    var as1 = bannerBox1.children();//获取所有的a标签
    var hdI1 = $(".hd a"); //获取所有的i标签
    timerId1 = setInterval(function () {//设置定时器
        //如果索引到了图片的最后一张,就让图片瞬间回到第一张
        if(pic1>=as1.length-1){
            pic1 = 0;
            bannerBox1.css({//css设置样式
                left: -tempWidht*pic1+"px"
            })
        }
        pic1++;//没1000钟加1
        //移动bannerBox,向左移动pic张图片
        bannerBox1.animate({
            left: -tempWidht*pic1+"px"
        });
        //如果index小于小圆圈的个数,就继续加,到了最后一个时,返回第一个
        if(index1<hdI1.length-1){
            index1++;
        }else {
            index1 = 0;
        }
        //获取所有i标签中的第index个,添加类名on,移出其他兄弟标签的类名
        hdI1.eq(index1).addClass("nn").siblings().removeClass("nn");
    },1000)











})




//$(function(){
//    $(window).scroll(function(){
//
//    if ($(this).scrollTop() >= 500) {
//        $(".gotop").fadeIn(100);
//    } else {
//        $(".gotop").fadeOut(100);
//    }
//})
//})


