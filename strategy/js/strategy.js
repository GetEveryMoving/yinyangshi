/**
 * Created by Administrator on 2016/12/23.
 */
window.onload = function(){
    //1.���Ҫ�����Ķ���
    var box = document.getElementsByClassName("box")[0];
    var ad = box.children[0]
    var ul =  document.getElementsByClassName("imgs")[0];
    var lis = ul.children;
    var ol = ad.children[1];
    var timerId = null




    //2. ����li��ǩ�ĸ�������̬������С����
    for(var i=0;i<lis.length;i++){
        var li =document.createElement("li");
        ol.appendChild(li);
    }
    // 3. �������ol�����li(С����),��ǰ��ɫ��ɷ�ɫ
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
            var target = -270*index;
            animate(ul,target);
            // 11. ��������ͬ������
            pic = square = index;
        }
    }

    // 5. ������������ʾ���Ұ�ť
    box.onmouseover = function (){

        // 13. �����ʱ��
        clearInterval(timerId);
    }
    box.onmouseout = function (){
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
    timerId= setInterval(playNext,1500);
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
        var target = -270 * pic;
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


    var box1 = document.getElementsByClassName("box")[1];
    var ad1 = box1.children[0]
    var ul1 =  document.getElementsByClassName("imgs")[1];
    var lis1 = ul1.children;
    var ol1 = ad1.children[1];

    //2. ����li��ǩ�ĸ�������̬������С����
    for(var i=0;i<lis1.length;i++){
        var li =document.createElement("li");
        ol1.appendChild(li);
    }
    // 3. �������ol�����li(С����),��ǰ��ɫ��ɷ�ɫ
    var olLis1 = ol1.children;//���ol��������е�li��ǩ
    olLis1[0].setAttribute("class","current");
    for(var j = 0; j < olLis1.length; j++) {
        olLis1[j].setAttribute("index",j);
        olLis1[j].onmouseover = function (){
            for(var k = 0; k < olLis1.length; k++) {
                olLis1[k].removeAttribute("class");
            }
            this.setAttribute("class","current");
            var index = this.getAttribute("index");//�õ�������뵱ǰС�����������ֵ
            var target = -270*index;
            animate(ul1,target);
            // 11. ��������ͬ������
            pic1 = square1 = index;
        }
    }

    // 5. ������������ʾ���Ұ�ť
    box1.onmouseover = function (){

        // 13. �����ʱ��
        clearInterval(timerId);
    }
    box1.onmouseout = function (){
        // 14. �ٴο�����ʱ��
        timerId = setInterval(playNext1,1000);
    }
    // 7. ��¡��һ��ͼƬ�����������
    var firstImg1 = lis1[0].cloneNode(true);
    ul1.appendChild(firstImg1);

    // 6. ���Ҳఴťע���¼�
    var pic1 = 0;
    var square1 = 0;//���¸�С���鶨��һ������

    // 12.�����Զ��ֲ�
    timerId= setInterval(playNext1,2500);

    function empty1(){
        for(var k = 0; k < olLis1.length; k++) {
            olLis1[k].removeAttribute("class");
        }
    }
    /*
     *
     * ��װ��һ��������һ��ͼƬ�ĺ���
     * */
    function playNext1(){
        console.log(pic1);
        if(pic1==lis1.length-1){ //���ﲻ������¡����һ��  4
            pic1=0;
            ul1.style.left = "0px";//���ٻָ���ԭ����λ��
        }
        pic1++; //������һ��ͼƬ���ƶ�
        var target = -270 * pic1;
        animate(ul1,target);

        //8. ��С����ı�����ɫ����ʾ��ͼƬͬ������
        if(square1<olLis1.length-1){
            square1++;
        }else {
            square1 = 0;
        }
        empty1();
        olLis1[square1].setAttribute("class","current");
    }


}
