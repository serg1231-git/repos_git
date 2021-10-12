jQuery(function()
{
    var canvas=document.createElement('canvas');
    var form_field=canvas.getContext("2d");
    document.body.appendChild(canvas);
    canvas.width=window.innerWidth/2;
    canvas.height=window.innerWidth/2;
    var fps=40;
    var count_stars=100;
    var StarStream=Rx.Observable.range(1,count_stars).map(function(){
        return{ x:parseInt(Math.random()*canvas.width), y:parseInt(Math.random()*canvas.height),
        size:Math.random()*2+1};
    }).toArray().switchMap(function(array)
    {
        return Rx.Observable.interval(fps).map(function(){
            array.forEach(function(star){
                if(star.y>=canvas.height)
                {star.y=0;}
                star.y=star.y+5;
            });
            return array;
        });
    });
    
    function paintStar(stars)
    {
        form_field.fillStyle='#0000FF';
        form_field.fillRect(0,0,canvas.width,canvas.height);
        form_field.fillStyle='#FFFFFF';
        stars.forEach(function(star){
            form_field.fillRect(star.x,star.y,star.size,star.size);
        });
    }
    var ship_y=canvas.height-30;
    var mousemove=Rx.Observable.fromEvent(canvas,'mousemove');
    var SpaceShip=mousemove.map(function(event){
        return{ x:event.clientX, y:ship_y};
    }).startWith({x:canvas.width/2,y:ship_y});

    function drawTriangle(x,y,color,width,direction)
    {
        form_field.fillStyle=color;
        form_field.beginPath();
        form_field.moveTo(x-width,y);
        form_field.lineTo(x, direction==='up'?y-width:y+width);
        form_field.lineTo(x+width,y);
        //form_field.lineTo(x-width,y)
        form_field.fill();
    }
    function PaintSpaceShip(obj)
    {
        drawTriangle(obj.x, obj.y,'#FFFF00',20,'up');
    }

    function Render(actors)
    {
        paintStar(actors.stars);
        PaintSpaceShip(actors.ship);
        paintenemy(actors.enemys);
        paintshoots(actors.heroshots);
    }
    var Firing=Rx.Observable.fromEvent(canvas,'click');
    var shoots=Rx.Observable.combineLatest(Firing,SpaceShip,function(showevents,spaceship){
        return{x:spaceship.x,timestamp:showevents.timestamp};
    }).distinctUntilChanged(function(shot){return shot.timestamp;})
    .scan(function(shotarray,shot)
    {
        shotarray.push({x:shot.x,y:ship_y});
        return shotarray;
    },[]);
    var shooting_speed=15;
    function paintshoots(heroshots){
        heroshots.forEach(function(shot){
            shot.y-=shooting_speed;
            drawTriangle(shot.x,shot.y,'#800000',5,'up');
            var audio=new Audio("./other/grenade.wav");
            audio.play();
        });
    }
    var Enemy_fps=1200;
    var enemys=Rx.Observable.interval(Enemy_fps).scan(function(array){
        var enemy={
            x:parseInt(Math.random()*canvas.width),
            y:-30,
        };
        array.push(enemy);
        return array;
    },[]);
    enemys.subscribe(function(element)
    {
        console.log(element);
    })
    function paintenemy(enemys)
    {
        enemys.forEach(function(enemy)
        {
            enemy.y=enemy.y+5;
            enemy.x=enemy.x+getRandomInt(-15,15);
            drawTriangle(enemy.x,enemy.y,'#00FF00',20,'down');
        });
        
    }
    var game=Rx.Observable.combineLatest(StarStream,SpaceShip,enemys,shoots,function(stars,ship,enemys,heroshots)
    {
        return{stars:stars, ship:ship, enemys:enemys,heroshots:heroshots};
    }).subscribe(Render);

    function getRandomInt(min,max)
    {
        return Math.floor(Math.random()*(max-min+1))+min;
    }
})