window.onload=(function(){
    alert("鼠标指向浮动\n\t单击固定浮动");
}) ;
//获取DOM节点
function getId(id){
    return document.getElementById(id)?document.getElementById(id):null;
}
//获取样式表样式,判断IE浏览器的兼容性
function getStyle (objId,attr) {
    if(document.all) {
        return parseInt(objId.currentStyle[attr]);
         //兼容IE8及其以下，currentStyle获取元素所有的属性
          }
        else
        {
            return parseInt(getComputedStyle(objId,false)[attr]);
            //兼容非IE浏览器，getComputedStyle(对象id，false)获取元素所有属性
        }
    }
var shareBtn=getId("div_content");//获取元素节点
shareBtn.addEventListener("mouseover",function(){
    show();
},true);
var show_Timer=null;
function show(){
    clearInterval(hide_Timer);
    clearInterval(show_Timer);
    show_Timer=setInterval(function(){
        var setLeft_val=getStyle(shareBtn,"left");
        if(setLeft_val<0){
            setLeft_val+=10;
        }
        else
        {
            clearInterval(show_Timer);
        }
        console.log(show_Timer);
        shareBtn.style.left=setLeft_val+"px";
    },20)
}

shareBtn.addEventListener("click",function(){
    hide();
},true);
var hide_Timer=null;
function hide(){
    clearInterval(show_Timer);
    clearInterval(hide_Timer);
    hide_Timer=setInterval(function(){
        var setLeft_val=getStyle(shareBtn,"left");
        if(setLeft_val>-100){
            setLeft_val-=10;
        }
        else
        {
            clearInterval(hide_Timer);
        }
        console.log(hide_Timer);
        shareBtn.style.left=setLeft_val+"px";
    },20)
}



