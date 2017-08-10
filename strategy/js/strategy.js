/**
 * Created by Administrator on 2016/12/23.
 */
window.onload = function(){
    //1.获得要操作的对象
    var box = document.getElementsByClassName("box")[0];
    var ad = box.children[0]
    var ul =  document.getElementsByClassName("imgs")[0];
    var lis = ul.children;
    var ol = ad.children[1];
    var timerId = null




    //2. 根据li标签的个数，动态的生成小方块
    for(var i=0;i<lis.length;i++){
        var li =document.createElement("li");
        ol.appendChild(li);
    }
    // 3. 鼠标移入ol下面的li(小方块),当前颜色变成粉色
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
            var target = -270*index;
            animate(ul,target);
            // 11. 让索引都同步起来
            pic = square = index;
        }
    }

    // 5. 鼠标移入盒子显示左右按钮
    box.onmouseover = function (){

        // 13. 清除定时器
        clearInterval(timerId);
    }
    box.onmouseout = function (){
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
    timerId= setInterval(playNext,1500);
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
        var target = -270 * pic;
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


    var box1 = document.getElementsByClassName("box")[1];
    var ad1 = box1.children[0]
    var ul1 =  document.getElementsByClassName("imgs")[1];
    var lis1 = ul1.children;
    var ol1 = ad1.children[1];

    //2. 根据li标签的个数，动态的生成小方块
    for(var i=0;i<lis1.length;i++){
        var li =document.createElement("li");
        ol1.appendChild(li);
    }
    // 3. 鼠标移入ol下面的li(小方块),当前颜色变成粉色
    var olLis1 = ol1.children;//获得ol下面的所有的li标签
    olLis1[0].setAttribute("class","current");
    for(var j = 0; j < olLis1.length; j++) {
        olLis1[j].setAttribute("index",j);
        olLis1[j].onmouseover = function (){
            for(var k = 0; k < olLis1.length; k++) {
                olLis1[k].removeAttribute("class");
            }
            this.setAttribute("class","current");
            var index = this.getAttribute("index");//得到鼠标移入当前小方块的索引的值
            var target = -270*index;
            animate(ul1,target);
            // 11. 让索引都同步起来
            pic1 = square1 = index;
        }
    }

    // 5. 鼠标移入盒子显示左右按钮
    box1.onmouseover = function (){

        // 13. 清除定时器
        clearInterval(timerId);
    }
    box1.onmouseout = function (){
        // 14. 再次开启定时器
        timerId = setInterval(playNext1,1000);
    }
    // 7. 克隆第一张图片，放在最后面
    var firstImg1 = lis1[0].cloneNode(true);
    ul1.appendChild(firstImg1);

    // 6. 给右侧按钮注册事件
    var pic1 = 0;
    var square1 = 0;//重新给小方块定义一个索引

    // 12.开启自动轮播
    timerId= setInterval(playNext1,2500);

    function empty1(){
        for(var k = 0; k < olLis1.length; k++) {
            olLis1[k].removeAttribute("class");
        }
    }
    /*
     *
     * 封装了一个运行下一张图片的函数
     * */
    function playNext1(){
        console.log(pic1);
        if(pic1==lis1.length-1){ //这里不包括克隆的那一张  4
            pic1=0;
            ul1.style.left = "0px";//快速恢复到原来的位置
        }
        pic1++; //进行下一张图片的移动
        var target = -270 * pic1;
        animate(ul1,target);

        //8. 让小方块的背景颜色和显示的图片同步起来
        if(square1<olLis1.length-1){
            square1++;
        }else {
            square1 = 0;
        }
        empty1();
        olLis1[square1].setAttribute("class","current");
    }


}
