/**
 * Created by Lenovo on 2016/9/13.
 */
window.onload = function () {
	MBATopNav();
    MBABanner();
}
/*顶部导航栏部分*/
function MBATopNav(){
	//0.获取元素
    var MBATopNav = document.getElementsByClassName("nav_main")[0];
    var NavSub = document.getElementsByClassName("nav_sub");
    var liArr = MBATopNav.children;
    for (var i = 0; i < liArr.length; i++) {
    	liArr[i].index=i;
		liArr[i].onmouseover=function(){
            if(this.index>=1) {
                NavSub[this.index-1].className="nav_sub selected";
            }
		}
		liArr[i].onmouseleave=function(){
            if (this.index>=1) {
                NavSub[this.index-1].className="nav_sub";
            }
		}
    }
}

/*中间轮播图部分*/
function MBABanner(){
	var arr = [
        {   //  1
            width:40,
            top:25,
            left:0,
            opacity:0.5,
            zIndex:2
        },
        {  // 2
            width:50,
            top:13,
            left:50,
            opacity:1,
            zIndex:3
        },
        {   // 3
            width:60,
            top:0,
            left:102,
            opacity:1,
            zIndex:4
        },
        {  // 4
            width:50,
            top:13,
            left:206,
            opacity:1,
            zIndex:3
        },
        {   //5
            width:40,
            top:25,
            left:307,
            opacity:0.5,
            zIndex:2
        }
    ];
    //0.获取元素
    var MBABanner = document.getElementsByClassName("banner_main")[0];
    var liArr = MBABanner.getElementsByTagName("li");
    var arrow = MBABanner.children[1];
    var arrowChildren = arrow.children;

    //1设置一个开闭原则变量，点击以后修改这个值。
    var flag = true;
    move();
    var timer=setInterval(function(){
        if(flag){
            move(true);
        }
    }, 2000)
    //2.鼠标放到轮播图上，两侧的按钮显示，移开隐藏。
    MBABanner.onmouseenter = function () {
        flag=false;
        arrow.style.transition="opacity 0.3s linear";
        arrow.style.opacity = 1;
    }
    MBABanner.onmouseleave = function () {
        flag=true;
        arrow.style.transition="opacity 1s linear";
        arrow.style.opacity = 0;
    }
    //3.把两侧按钮绑定事件。(调用同一个方法，只有一个参数，true为正向旋转，false为反向旋转)
    arrowChildren[1].onclick = function () {
        move(true);
    }
    arrowChildren[0].onclick = function () {
        move(false);
    }
    //4.书写函数。
    function move(bool){
        //判断：如果等于undefined,那么就不执行这两个if语句
        if(bool === true || bool === false){
            if(bool){
                arr.unshift(arr.pop());
            }else{
                arr.push(arr.shift());
            }
        }
        //再次为页面上的所有li赋值属性
        for(var i=0;i<liArr.length;i++){
            liArr[i].style.transition="all 1s linear";
            liArr[i].style.width=arr[i].width+"%";  //第一个li，必须对应第一个数组元素中的第一个的指定属性
            liArr[i].style.top=arr[i].top+"px";
            liArr[i].style.left=arr[i].left+"px";
            liArr[i].style.opacity=arr[i].opacity;
            liArr[i].style.zIndex=arr[i].zIndex;
        }
    }
}