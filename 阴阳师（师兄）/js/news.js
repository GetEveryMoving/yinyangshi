
//�̶��ı���Ч��
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







//������Ծ
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
//��ά���¼�
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
//����ͷ��
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

    //�������ݱ���ͼ
    $(".NIE-ban-B-l-f").mouseenter(function(){
        $(this).animate({
            'background-position':"-100px"
        },2000,function(){
            $(this).animate({
                'background-position':0
            })
        })
    })
    //�رհ�ť
    $(".NIE-ban-box").click(function() {
        $(".NIE-ban-box,.NIE-ban-B-r").css({
            //right:-330
            "display":"none"

        })
    })



    //΢��΢����ά���л�
    var box=document.getElementById("media_box");
    var weixin=box.children[0];//ul����
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

    //�ײ�ҳ��
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


        //�ֲ�ͼ
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
    //    // 1. �Ȼ��ul��ǰ��λ��
    //    var leader = box_min.offsetLeft;
    //    var step = -10;
    //    leader = leader+step;
    //    box_min.style.left = leader + 'px';
    //}
    //
    ////var timerId = setInterval(playpic,100);
    // //3.����������ӵ�ʱ��Ҫ��ʱ�ƶ�
    //box_min.onmouseover = function (){
    //    clearInterval(timerId);
    //}
    //// 4. ����뿪����ӵ�ʱ��Ҫ���¿�����ʱ��
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
    var pic = 0;//����һ����������ͼƬ������
    var index = 0;//����СԲȦ������
    var timerId = null;//������ʱ��id
    var wrapWidht = $(".wrap").width();//��ȡwrap�Ŀ��,Ҳ����ͼƬ�Ŀ��
    var bannerBox = $(".wrap .banner-box");//��ȡbanner-boxԪ��
    var as = bannerBox.children();//��ȡ���е�a��ǩ
    var hdI = $(".hd i"); //��ȡ���е�i��ǩ
    timerId = setInterval(function () {//���ö�ʱ��
        //�����������ͼƬ�����һ��,����ͼƬ˲��ص���һ��
        if(pic>=as.length-1){
            pic = 0;
            bannerBox.css({//css������ʽ
                left: -wrapWidht*pic+"px"
            })
        }
        pic++;//û1000�Ӽ�1
        //�ƶ�bannerBox,�����ƶ�pic��ͼƬ
        bannerBox.animate({
            left: -wrapWidht*pic+"px"
        });
        //���indexС��СԲȦ�ĸ���,�ͼ�����,�������һ��ʱ,���ص�һ��
        if(index<hdI.length-1){
            index++;
        }else {
            index = 0;
        }
        //��ȡ����i��ǩ�еĵ�index��,�������on,�Ƴ������ֵܱ�ǩ������
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
    var pic1 = 0;//����һ����������ͼƬ������
    var index1 = 0;//����СԲȦ������
    var timerId1 = null;//������ʱ��id
    var tempWidht = $(".tempWrap").width();//��ȡwrap�Ŀ��,Ҳ����ͼƬ�Ŀ��
    var bannerBox1 = $(".tempWrap .banner-box1");//��ȡbanner-boxԪ��
    var as1 = bannerBox1.children();//��ȡ���е�a��ǩ
    var hdI1 = $(".hd a"); //��ȡ���е�i��ǩ
    timerId1 = setInterval(function () {//���ö�ʱ��
        //�����������ͼƬ�����һ��,����ͼƬ˲��ص���һ��
        if(pic1>=as1.length-1){
            pic1 = 0;
            bannerBox1.css({//css������ʽ
                left: -tempWidht*pic1+"px"
            })
        }
        pic1++;//û1000�Ӽ�1
        //�ƶ�bannerBox,�����ƶ�pic��ͼƬ
        bannerBox1.animate({
            left: -tempWidht*pic1+"px"
        });
        //���indexС��СԲȦ�ĸ���,�ͼ�����,�������һ��ʱ,���ص�һ��
        if(index1<hdI1.length-1){
            index1++;
        }else {
            index1 = 0;
        }
        //��ȡ����i��ǩ�еĵ�index��,�������on,�Ƴ������ֵܱ�ǩ������
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


