function filter(array,fn){
    var listnew=[];
    for (var i=0; i<array.length; i++)
    {
        if(!(fn(array[i])%2))
        {
            listnew.push(array[i]);
        }
    }
    return listnew;
}
function div(index) {
    return index%2==1;   
}
function show(){
    var video=document.querySelector('#videoConnect');
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
    {
        navigator.mediaDevices.getUserMedia({video:true}).then(function getStream(stream){
            video.srcObject=stream;
            video.play();
            console.log('Connection video successfully');
        })
        .catch(function error_connection(error){
            console.log('Error connection');
        })
    }
}
var url_button=document.getElementById('button_url');
url_button.addEventListener('click',function(){
    var input_url=document.getElementById('url_connect');
    window.location=input_url.value;
    console.log('Connection successfully',input_url.value);
});
var up=document.getElementById('up_id');
var down=document.getElementById('down_id');
up.addEventListener('click',function(){
    console.log('В истории',history.length+' страниц');
    history.back();
})
down.addEventListener('click',function(){
    history.forward();
})