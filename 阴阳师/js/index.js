/**
 * Created by ������ on 2016/12/23.
 */
//��ͼ������ֵ��ƶ�Ч��
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
//��������ʦ�����ֳ���������
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
//�̶��ı���Ч��
$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()  >= 20){
            $(".main-top1-fixed").fadeIn(100);
        }else{
            $(".main-top1-fixed").fadeOut(100);
        }
    })
})

//��ά��ɨ��
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

//��Ϸ�������ֵĴ�ť�ƶ�Ч��
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
//�ײ��Ķ�ά�����
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

//��һ���ֲ�ͼ
$(function(){
    //1.���Ҫ�����Ķ���
    var box = document.getElementById("box");
    var ad = box.children[0]
    var ul =  document.getElementById("imgs1");
    var lis = ul.children;
    var ol = ad.children[1];
    var timerId = null;

    //2. ����li��ǩ�ĸ�������̬������С����
    for(var i=0;i<lis.length;i++){
        var li =document.createElement("li");
        ol.appendChild(li);
    }
    // 3. �������ol�����li(С����),��ǰ��ɫ��ɻ�ɫ
    var olLis = ol.children;//���ol��������е�li��ǩ
    olLis[0].setAttribute("class","current");
    for(var j = 0; j < olLis.length; j++) {
        olLis[j].setAttribute("index",j);
        olLis[j].onmouseover = function (){
            for(var k = 0; k < olLis.length; k++) {
                olLis[k].removeAttribute("class");
            }
            this.setAttribute("class","current");
            var index = this.getAttribute("index");//�õ�������뵱ǰС�����������ֵ
            var target = -360*index;
            animate(ul,target);
            // 11. ��������ͬ������
            pic = square = index;
        }
    }

    // 5. ������������ʾ���Ұ�ť
    box.onmouseover = function (){
        //arr.style.display = "block";
        // 13. �����ʱ��
        clearInterval(timerId);
    }
    box.onmouseout = function (){
        //arr.style.display = "none";
        // 14. �ٴο�����ʱ��
        timerId = setInterval(playNext,1000);
    }
    // 7. ��¡��һ��ͼƬ�����������
    var firstImg = lis[0].cloneNode(true);
    ul.appendChild(firstImg);

    // 6. ���Ҳఴťע���¼�
    var pic = 0;
    var square = 0;//���¸�С���鶨��һ������

    function empty(){
        for(var k = 0; k < olLis.length; k++) {
            olLis[k].removeAttribute("class");
        }
    }

    // 12.�����Զ��ֲ�
    timerId= setInterval(playNext,2500);
    /*
     *
     * ��װ��һ��������һ��ͼƬ�ĺ���
     * */
    function playNext(){
        //console.log(pic);
        if(pic==lis.length-1){ //���ﲻ������¡����һ��  4
            pic=0;
            ul.style.left = "0px";//���ٻָ���ԭ����λ��
        }
        pic++; //������һ��ͼƬ���ƶ�
        var target = -360 * pic;
        animate(ul,target);

        //8. ��С����ı�����ɫ����ʾ��ͼƬͬ������
        if(square<olLis.length-1){
            square++;
        }else {
            square = 0;
        }
        empty();
        olLis[square].setAttribute("class","current");
    }

    /**
     * ��װ��һ�������ƶ��Ķ�������
     * @param obj
     * @param target
     */
    function animate(obj,target){
        clearInterval(obj.timerId); // ��֤��ǰ��ǩ�����˶���ʱ��ֻ�Ὺ��һ����ʱ��
        obj.timerId=  setInterval(function(){  // ������ʱ��
            var leader = obj.offsetLeft; //��ȡ��ǩ����ĵ�ǰ��λ��
            var  step = 20;//����һ������
            step=  leader<target?step:-step; //�жϲ����������Ǹ�
            if(Math.abs(leader-target)>Math.abs(step)){ //�޸��ж�����
                leader = leader + step;//�ڵ�ǰ��λ�ü��ϲ���
                obj.style.left = leader +'px';
            }else {
                clearInterval(obj.timerId); //�����ǰ����Ķ�ʱ��
                obj.style.left = target+'px'; //�����һ��������ʱ�򣬲�������һ���ˣ�ֱ�����ó�Ŀ��λ�ü���
            }
        },15);
    }
})

//�ڶ����ֲ�ͼ
$(function(){
    //1.���Ҫ�����Ķ���
    var box = document.getElementById("box1");
    var ad = box.children[0]
    var ul =  document.getElementById("imgs");
    var lis = ul.children;
    var ol = ad.children[1];
    var timerId = null;

    //2. ����li��ǩ�ĸ�������̬������С����
    for(var i=0;i<lis.length;i++){
        var li =document.createElement("li");
        ol.appendChild(li);
    }
    // 3. �������ol�����li(С����),��ǰ��ɫ��ɻ�ɫ
    var olLis = ol.children;//���ol��������е�li��ǩ
    olLis[0].setAttribute("class","current");
    for(var j = 0; j < olLis.length; j++) {
        olLis[j].setAttribute("index",j);
        olLis[j].onmouseover = function (){
            for(var k = 0; k < olLis.length; k++) {
                olLis[k].removeAttribute("class");
            }
            this.setAttribute("class","current");
            var index = this.getAttribute("index");//�õ�������뵱ǰС�����������ֵ
            var target = -368*index;
            animate(ul,target);
            // 11. ��������ͬ������
            pic = square = index;
        }
    }

    // 5. ������������ʾ���Ұ�ť
    box.onmouseover = function (){
        //arr.style.display = "block";
        // 13. �����ʱ��
        clearInterval(timerId);
    }
    box.onmouseout = function (){
        //arr.style.display = "none";
        // 14. �ٴο�����ʱ��
        timerId = setInterval(playNext,1000);
    }
    // 7. ��¡��һ��ͼƬ�����������
    var firstImg = lis[0].cloneNode(true);
    ul.appendChild(firstImg);

    // 6. ���Ҳఴťע���¼�
    var pic = 0;
    var square = 0;//���¸�С���鶨��һ������

    function empty(){
        for(var k = 0; k < olLis.length; k++) {
            olLis[k].removeAttribute("class");
        }
    }

    // 12.�����Զ��ֲ�
    timerId= setInterval(playNext,2500);
    /*
     *
     * ��װ��һ��������һ��ͼƬ�ĺ���
     * */
    function playNext(){
        console.log(pic);
        if(pic==lis.length-1){ //���ﲻ������¡����һ��  4
            pic=0;
            ul.style.left = "0px";//���ٻָ���ԭ����λ��
        }
        pic++; //������һ��ͼƬ���ƶ�
        var target = -368 * pic;
        animate(ul,target);

        //8. ��С����ı�����ɫ����ʾ��ͼƬͬ������
        if(square<olLis.length-1){
            square++;
        }else {
            square = 0;
        }
        empty();
        olLis[square].setAttribute("class","current");
    }

    /**
     * ��װ��һ�������ƶ��Ķ�������
     * @param obj
     * @param target
     */
    function animate(obj,target){
        clearInterval(obj.timerId); // ��֤��ǰ��ǩ�����˶���ʱ��ֻ�Ὺ��һ����ʱ��
        obj.timerId=  setInterval(function(){  // ������ʱ��
            var leader = obj.offsetLeft; //��ȡ��ǩ����ĵ�ǰ��λ��
            var  step = 20;//����һ������
            step=  leader<target?step:-step; //�жϲ����������Ǹ�
            if(Math.abs(leader-target)>Math.abs(step)){ //�޸��ж�����
                leader = leader + step;//�ڵ�ǰ��λ�ü��ϲ���
                obj.style.left = leader +'px';
            }else {
                clearInterval(obj.timerId); //�����ǰ����Ķ�ʱ��
                obj.style.left = target+'px'; //�����һ��������ʱ�򣬲�������һ���ˣ�ֱ�����ó�Ŀ��λ�ü���
            }
        },15);
    }

})

//�ڶ��ֲ�ͼ����Ĵ�ť�ƶ�Ч��
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

//ͼƬ�ı仯
$(function(){
    $(".c1").mouseenter(function(){
        $(this).children(".cover").css("display","block");
    })

    $(".c1").mouseleave(function(){
        $(this).children(".cover").css("display","none");
    })
})


//�ר��ͼƬ�仯
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