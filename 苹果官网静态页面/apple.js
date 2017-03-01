/**
 * Created by dell on 2017/1/11.
 */
var oSpan1 = document.getElementById('span1');
var oSpan2 = document.getElementById('span2');
var oNxt = document.getElementById('nxt');
var oPre = document.getElementById('pre');
var oChangeimg = document.getElementById('changing-img');
var oImgs = oChangeimg.getElementsByTagName('img');
var oUl = document.getElementById('li');
var oLi = oUl.getElementsByTagName('li');
var oContainer = document.getElementById('container');
var oMenu = document.getElementById('main-menu');
var oLi1 = oMenu.getElementsByTagName('a');
var iNows = 0;
var timer;
oChangeimg.appendChild(oImgs[0].cloneNode());
oChangeimg.style.width = oImgs[0].offsetWidth*oImgs.length + 'px';
for(var i=0;i<oLi.length;i++) {
    oLi[i].index = i;
    oLi[i].onmouseover = function () {
        iNows = this.index;
        changeimg();
    };
}
for(var i=0;i<oLi1.length;i++){
    oLi1[i].index = i;
    oLi1[i].onmouseover = function(){
        //oLi1[this.index].style.color = '#555555';
        oLi1[this.index].style.opacity = 0.4;
    }
}
for(var i=0;i<oLi1.length;i++){
    oLi1[i].index = i;
    oLi1[i].onmouseout = function(){
        oLi1[this.index].style.color = 'white';
        oLi1[this.index].style.opacity = 1;
    }
}

oSpan1.onmouseover = function(){
    oPre.style.display = 'block';
};
oSpan1.onmouseout = function(){
    oPre.style.display = 'none';
};
oSpan2.onmouseover = function(){
    oNxt.style.display = 'block';
};
oSpan2.onmouseout = function(){
    oNxt.style.display = 'none';
};
oNxt.onclick = oPre.onclick = function(){
    if(this == oNxt){
        iNows++;
        if(iNows == oImgs.length){
            iNows=1;
            oChangeimg.style.left = 0;
        }
    }else{
        iNows--;
        if(iNows == -1){
            iNows = oImgs.length-2;
            oChangeimg.style.left = -(oImgs.length - 1)*oImgs[0].offsetWidth +'px';
        }
    }
    changeimg();
};

function changeimg(){
    for(var i=0;i<oLi.length;i++){
        oLi[i].className = '';
    }
    oLi[iNows==oLi.length?0:iNows].className = 'selected';
    animate(oChangeimg,{
        left:-iNows*oImgs[0].offsetWidth
    })
}
play();
function play(){
    timer = setInterval(function(){
        oNxt.onclick();
    },4000)
}
oContainer.onmouseover = function(){
    clearInterval(timer);
};
oContainer.onmouseout = function(){
    play();
};