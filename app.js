
document.addEventListener("DOMContentLoaded",function(){
    console.log('DOM ready !!!!');
})
function getsource(element)
{
    const source=element.src;
    console.log(source);
}
function div_click()
{
    var container=document.querySelectorAll('div > img');
    container.forEach((image)=>{
        image.addEventListener('click',()=>{
            getsource(image);
        });
    });
}
var div_mousemove=document.getElementById('mousemove');
div_mousemove.addEventListener("mousemove",function(e){
    var x=e.clientX;
    var y=e.clientY;
    console.log('x',x);
    console.log('y',y);
    })
div_mousemove.addEventListener('mouseout',function(){
    alert('div out');
})
var left=0;
var image_pos=document.getElementById('image_position');
document.onkeydown=function(event)
{
    if(event.keyCode==39)
    {
        left=left+10;
        image_pos.style.left=left+'px';
    }
    if(event.keyCode==37)
    {
        left=left-10;
        image_pos.style.left=left+'px';
    }
    if(left==560 || left<10)
    {
        left=10;
    }
}