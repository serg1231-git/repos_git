$(document).ready(()=>{
    game={
        balls:[
            {x: 0, y: 20, move: 'right'},
            {x: 0, y: 39, move: 'down'}
        ],
        canon_x:0,
        key_right:'up',
        key_left:'up',
        bullet:[],
        size_ball:0,
        width_game_field:0,
        hit:0
    }
    for(var i=0; i<document.styleSheets.length; i++)
    {
        var sheet=document.styleSheets[i];
        if(sheet.href.indexOf('./style.css')>=0)
        {
            var class_object=sheet.cssRules;
            for(var x=0; x<class_object.length; x++)
            {
                if(class_object[x].selectorText==='.ball')
                {
                    game.size_ball=Math.floor(class_object[x].style.getPropertyValue('height').slice(0,-2));
                }
                if(class_object[x].selectorText==='.output')
                {
                    game.width_game_field=Math.floor(class_object[x].style.getPropertyValue('width').slice(0,-2));
                }
            }
        }
    }
    function clear()
    {
        $('#apps').empty();
    }
    function drawing()
    {
        for (var ball of game.balls)
        {
            $('#apps').append(`<div style="top:${ball.y}px; left:${ball.x}px" class="ball"></div>`)
        }
        $('#apps').append(`<div style="top:180px; left:${game.canon_x}px" id="canon"></div>`);
        for (var bullets of game.bullet)
        {
            $('#apps').append(`<div style="top:${bullets.y}px; left:${bullets.x}px" class="bullet"></div>`)
        }
    }
    function calculation(){
        for(var ball of game.balls)
        {
            if(ball.x>170)ball.move='left';
            if(ball.x<0)ball.move='right';
            if(ball.move==='right')ball.x=ball.x+4;
            if(ball.move==='left')ball.x=ball.x-4;
            if(ball.y>170)ball.move='up';
            if(ball.y<0)ball.move='down';
            if(ball.move==='up')ball.y=ball.y-4;
            if(ball.move==='down')ball.y=ball.y+4;
        }
        for(var bullet of game.bullet)
        {
            bullet.y=bullet.y-10;
            if(bullet.y<0) game.bullet.splice(game.bullet.indexOf(bullet),1);
            var hit=document.getElementById('hit');
            for(var ball of game.balls)
            {
                if ((bullet.y >= (ball.y - Math.floor(game.size_ball/2)) && bullet.y <= (ball.y + Math.floor(game.size_ball))) && 
                    (bullet.x >= (ball.x - Math.floor(game.size_ball/2)) && bullet.x <= (ball.x + Math.floor(game.size_ball))))
                    {
                        setTimeout(clear,30);
                        game.hit=game.hit+1;
                        hit.value=game.hit;
                        game.balls.splice(game.balls.indexOf(ball),1);
                        var x=Math.floor(Math.random()*Math.floor(game.width_game_field-game.size_ball));
                        var y=20;
                        game.balls.push({x:x,y:y,move:'down'});
                        $('#apps').append(`<div style="top:${y}px; left:${x}px class="ball"></div>`);
                    }
            }
        }
        if(game.key_left==='down') if(game.canon_x>0){game.canon_x=game.canon_x-5;}else {game.canon_x=0;}
        if(game.key_right=='down') if(game.canon_x<190){game.canon_x=game.canon_x+5;}else {game.canon_x=190;}
    }
    function Loop()
    {
        calculation();
        clear();
        drawing();
        setTimeout(Loop,100);
    }
    $(document).on('keydown',function(element){
        if(element.keyCode===39) game.key_right='down';
        if(element.keyCode===37) game.key_left='down';
        if(element.keyCode===32){
            game.bullet.push({x:game.canon_x,y:185})
        }
    })
    $(document).on('keyup',function(element){
        if(element.keyCode===39) game.key_right='up';
        if(element.keyCode===37) game.key_left='up';
    })
    Loop();
})