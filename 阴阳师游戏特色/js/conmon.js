/**
 * Created by cheny on 2016/12/22.
 */


$(function() {
    ////��ʼ����
    var f1=true;
    setInterval(function(){
        if(f1){
            f1=false;
            $(".flowers_1").animate({
                top:40,
                left:40
            },3000,function(){
                $(".flowers_1").animate({
                    top:0,
                    left:0
                },2000,function(){
                    f1=true;
                })
            })
        }
    })

    var f2=true;
    setInterval(function(){
        if(f2){
            f2=false;
            $(".flowers_2").animate({
                top:-20,
                left:-25
            },3000,function(){
                $(".flowers_2").animate({
                    top:10,
                    left:0
                },3000,function(){
                    f2=true;
                })
            })
        }
    })

    var c1=true;//
    setInterval(function(){
        if(c1){
            c1=false;
            $(".cloud_left").animate({
                top:600,
                left:-30
            },4000,function(){
                $(".cloud_left").animate({
                    top:610,
                    left:0
                },4000,function(){
                    c1=true;
                })
            })
        }
    })


    var c2=true;//�����Ч��
    setInterval(function(){
        if(c2){
            c2=false;
            $(".cloud_right").animate({
                top:210,
                right:-50
            },4000,function(){
                $(".cloud_right").animate({
                    top:200,
                    right:-30
                },4000,function(){
                    c2=true;
                })
            })
        }
    })

    $(".down-box .down-anzuo a").mouseenter(function(){
    $(this).stop().animate({
        opacity:.5
    })
})
    $(".down-box .down-anzuo a").mouseleave(function(){
        $(this).stop().animate({
            opacity:1
        })
    })


    $(".down-box .down-ios a").mouseenter(function(){
        $(this).stop().animate({
            opacity:.5
        })
    })
    $(".down-box .down-ios a").mouseleave(function(){
        $(this).stop().animate({
            opacity:1
        })
    })





//��ʼ����
    setTimeout(function(){
        $(".header").slideDown(1000);
        $(".begin_2").fadeIn();
        $(".right").animate({//�Һ��ӻ���
            right: -170,
        },1000,function(){
            $(".begin_2").animate({
                //opacity:.02
                zIndex:0
            });//�ڶ���ͼƬ������
        });
        $(".left").animate({//�󶯻�����
            left: -170,
        },1000,function(){

            $(".special").animate({//����ͼƬ��ʾ
                opacity: 1,
            }, 1000, function(){
                $(".special_2").animate({//����ͼƬ��ʾͬʱ���غ�����ʾ
                    opacity: 1,
                }, 600)
                $(".special_3").animate({
                    opacity: 1,
                }, 500)
            })
        });
    },600);

    var b=true;
    //����ʦ����������
    $(".yys_nav li a").mouseenter(function () {
        $(this).children("span").stop().animate({
            left: 23,
        })
        $(this).children("em").stop().fadeIn();
    });
    $(".yys_nav li a").mouseleave(function () {
        $(this).children("span").stop().animate({
            left: 0,
        })
        $(this).children("em").stop().fadeOut();
    });



    //���������л�
    $(".yys_nav .new").mouseenter(function () {
        $(this).children("span").css({'background-image': 'url(./imgs/new_font_yellow.png)'});
    });
    $(".yys_nav .new").mouseleave(function () {
        $(this).children("span").stop().css({'background-image': 'url(./imgs/new_font_blue.png)'});
        $(this).children("span").stop().animate({
            left: 0,
        })
    });
    //��Ϸ��ɫ�����л�
    $(".yys_nav .yx").mouseenter(function () {
        $(this).children("span").css({'background-image': 'url(./imgs/game_font_yellow.png)'});
    });
    $(".yys_nav .yx").mouseleave(function () {
        $(this).children("span").stop().css({'background-image': 'url(./imgs/game_font_blue.png)'});
        $(this).children("span").stop().animate({
            left: 0,
        })
    });
    //�������������л�
    $(".yys_nav .yy").mouseenter(function () {
        $(this).children("span").css({'background-image': 'url(./imgs/yinyang_font_yellow.png)'});
    });
    $(".yys_nav .yy").mouseleave(function () {
        $(this).children("span").stop().css({'background-image': 'url(./imgs/yinyang_font_blue.png)'});
        $(this).children("span").stop().animate({
            left: 0,
        })
    });
    //ͬ��ר�������л�
    $(".yys_nav .tr").mouseenter(function () {
        $(this).children("span").css({'background-image': 'url(./imgs/tongren_font_yellow.png)'});
    });
    $(".yys_nav .tr").mouseleave(function () {
        $(this).children("span").stop().css({'background-image': 'url(./imgs/tongren_font_blue.png)'});
        $(this).children("span").stop().animate({
            left: 0,
        })
    });
    //��Ϸ��̳�����л�
    $(".yys_nav .yxlt").mouseenter(function () {
        $(this).children("span").css({'background-image': 'url(./imgs/gamelt_font_yellow.png)'});
    });
    $(".yys_nav .yxlt").mouseleave(function () {
        $(this).children("span").stop().css({'background-image': 'url(./imgs/gamelt_font_blue.png)'});
        $(this).children("span").stop().animate({
            left: 0,
        })
    });

    //��ά��ɨ��
    setInterval(function(){
        //console.log(123);
        if(b){
            b=false;
            $(".down-erweima i").animate({
                top: 113,
            },3000,function(){
                $(".down-erweima i").animate({
                    top:8
                },2000,function(){
                    b=true
                })
            });
        }
    },60)

    //������ť�¼�
    $(".hh-font-buttom-ss").mouseenter(function(){
        $(this).css({
            color:"#a8813c",
            'background-image':'url(./imgs/hh-font-buttom.png)'
        })
        $(".hh-font-buttom-zj").css({
            color: "#FEEEB9",
            'background-image':'url(./imgs/hh-font-buttom-right.png)'
        })
    })
    $(".hh-font-buttom-zj").mouseenter(function(){
        $(this).css({
            color:"#a8813c",
            'background-image':'url(./imgs/hh-font-buttom.png)'
        })
        $(".hh-font-buttom-ss").css({
            color: "#FEEEB9",
            'background-image':'url(./imgs/hh-font-buttom-right.png)'
        })
    })
    //$(".hh-font-buttom a").mouseleave(function(){
    //    $(this).css({
    //        color: "#FEEEB9",
    //        'background-image':'url(./imgs/hh-font-buttom-right.png)'
    //    })
    //})
    //$(".hh-font-buttom-zj").mouseleave(function(){
    //    $(this).css({
    //
    //    })
    //})

    //��ť����
    var c=true;
    var a=true;
    setInterval(function(){
        if(a){
            a=false;
            $(".font a img").animate({
                width:60,
                height:60,
                left:366,
                top:25
            },function(){
                $(".font a img").animate({
                    width:68,
                    height:69,
                    left:362,
                    top:20
                },function(){
                    a=true;
                })
            })
        }
    },15)
    setInterval(function(){
        if(c){
            c=false;
            $(".video a img").animate({
                width:60,
                height:60,
                marginLeft: -32,
                marginTop: -29
            },function(){
                $(".video a img").animate({
                    width:68,
                    height:69,
                    marginLeft: -35,
                    marginTop: -34
                },function(){
                    c=true;
                })
            })
        }
    },15)

    //����������
    $(window).scroll(function(){
        //console.log($(this).scrollTop());
        //����ĳ��ֶ���
        if($(this).scrollTop() >=450){
            $(".classics-font").animate({
                top:50
            },1000)
        }
        if($(this).scrollTop() >=460){
            $(".bq").animate({
                top:128
            },1500)
            $(".classics-left").animate({
                top:420
            },1500)
        }
        if($(this).scrollTop() >=470){
            $(".video").animate({
                top:206
            },1600)
            $(".stroy").animate({
                top:621
            },1700)
        }
        //Ψ���ͷ���ֶ���
        if($(this).scrollTop() >=1280){
            $(".wm-font").animate({
                top:55
            },1000)
        }
        if($(this).scrollTop() >=1300){
            $(".liao").animate({
                top:160
            },1600)
            $(".wm-left").animate({
                top:420
            },1700)
        }
        if($(this).scrollTop() >=1320){
            $(".wm-box-video").animate({
                top:59
            },1600);
            $(".wm-m-box").animate({
                top:210
            },1600);
        }
        //�������ų��ֶ���
        if($(this).scrollTop() >=2200){
            $(".hh-font").animate({
                top:55
            },1000)
            $(".hh-font-buttom").animate({
                top:207
            },1000)
        }
        if($(this).scrollTop() >=2200){
            $(".hh ul").animate({
                top:318
            },1200)
            $(".hh-left").animate({
                top:420
            },1400)
        }
    })

    //���ѡ���¼�
    //����
    $(".classics-left .a2").mouseenter(function(){
        $(this).children("span").show();
    })
    $(".classics-left .a3").mouseenter(function(){
        $(this).children("span").show();
    })
    $(".classics-left .a2").mouseleave(function(){
        $(this).children("span").hide();
    })
    $(".classics-left .a3").mouseleave(function(){
        $(this).children("span").hide();
    })
    //wm
    $(".wm-left .a2").mouseenter(function(){
        $(this).children("span").show();
    })
    $(".wm-left .a3").mouseenter(function(){
        $(this).children("span").show();
    })
    $(".wm-left .a2").mouseleave(function(){
        $(this).children("span").hide();
    })
    $(".wm-left .a3").mouseleave(function(){
        $(this).children("span").hide();
    })
    //����
    $(".hh-left .a2").mouseenter(function(){
        $(this).children("span").show();
    })
    $(".hh-left .a3").mouseenter(function(){
        $(this).children("span").show();
    })
    $(".hh-left .a2").mouseleave(function(){
        $(this).children("span").hide();
    })
    $(".hh-left .a3").mouseleave(function(){
        $(this).children("span").hide();
    })


    //�ײ�����Ч��
    $(".share a").mouseenter(function(){
        $(this).css("color","#fff");
    })
    $(".share a").mouseleave(function () {
        $(this).css("color","#84807e")
    })
})

