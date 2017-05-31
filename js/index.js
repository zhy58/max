/**
 * Created by Admin on 2017/5/27.
 */
function client(){
    if(document.documentElement.clientWidth||document.documentElement.clientHeight)
    {
        return{
            with:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        }

    }
    else
    {
        return {
            with:document.body.clientWidth,
            height:document.body.clientHeight
        }
    }
}


function scroll(){
    if(document.documentElement.scrollTop||document.documentElement.scrollLeft){
        return {
            top:document.documentElement.scrollTop,
            left:document.documentElement.scrollLeft
        }
    }else {
        return{
            top:document.body.scrollTop,
            left:document.body.scrollLeft
        }
    }
}


function bttf(iTarget){
    clearInterval(timer);
    var timer=setInterval(function(){
        var current=scroll().top;
        speed=(iTarget-current)/10;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
        scrollTo(0,current+speed);
        // console.log(speed);
        if (speed==0){
            clearInterval(timer);
        }
    },30)
}





