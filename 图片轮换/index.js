/**
 * Created by dell on 2017/1/11.
 */
var oBigimg = document.getElementById('big-img');
var oBimg = oBigimg.getElementsByTagName('img');
var oPre = document.getElementById('pre');
var oNxt = document.getElementById('nxt');
var oSpan = document.getElementById('span');
var oMove = document.getElementById('move-img');
var oSmallimg = oMove.getElementsByTagName('img');
var oContainer = document.getElementById('container');
var oNum2 = document.getElementById('num2');
var iNows = 0;
var zIndex = 9;
var timer;
for(var i=0;i<oBimg.length;i++){
    oBimg[i].style.zIndex = oBimg.length - i;
}
oPre.onmouseover = oNxt.onmouseover = function(){
    animate(this,{
        opacity:100
    })
};
oPre.onmouseout = oNxt.onmouseout = function(){
    animate(this,{
        opacity:0
    })
};
oPre.onclick = oNxt.onclick = function(){
  if(this == oNxt){
      iNows++;
      if(iNows == oBimg.length){
          iNows = 0;
      }
  }else{
      iNows--;
      if(iNows == -1){
          iNows = oBimg.length - 1;
      }
  }
    changeimgs();
};
play();
function play(){
    timer = setInterval(function(){
        oNxt.onclick();
    },1000)
}
oContainer.onmouseover = function(){
    clearInterval(timer);
};
oContainer.onmouseout = function(){
    play();
};
function changeimgs(){
    oBimg[iNows].style.opacity = 0;
    oBimg[iNows].style.filter = "alpha(opacity=0)";
    oBimg[iNows].style.zIndex = zIndex++;
    oSpan.style.zIndex = oNxt.style.zIndex = oPre.style.zIndex = zIndex++;
    animate(oBimg[iNows],{
        opacity:100
    });
    oNum2.innerHTML = iNows + 1;
    for(var i=0;i<oSmallimg.length;i++){
        oSmallimg[i].style.opacity = 0.3;
        oSmallimg[i].style.filter = "alpha(opacity=30)";
    }
        oSmallimg[iNows].style.opacity = 1;
        oSmallimg[iNows].style.filter = "alpha(opacity=100)";
    var left = 0;
    if(iNows == 0||iNows == 1){
        left = 0;
    }else if(iNows ==oSmallimg.length-1 ||iNows ==oSmallimg.length - 2 ){
        left = oSmallimg/2;
    }else{
        left = iNows - 1;
    }
    animate(oMove,{
        left:-left*oSmallimg[0].offsetWidth
    });
}