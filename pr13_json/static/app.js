var application={
    tag:null,
    data:null,
    init:function()
    {
        this.tag=$('#Tag');
        $.ajax({
            url:"/static/db.json",
            complete:(response)=>{
                var data=JSON.parse(response.responseText);
                this.data=data;
                this.show();
            }
        });
    },
    show:function()
    {
        console.log(this.data);
        for(let item of this.data)
        {
            console.log(item);
            if(item.type==='textarea')
            {
                var field=($(`<div>
                ${item.question}
                </div>`));
                field.append('<textarea></textarea>');
                this.tag.append(field);
            }
            if(item.type==='date')
            {
                this.tag.append($('<p></p>'));
                var field=($(`<div>
                ${item.question}
                </div>`));
                field.append('<input type="date">');
                this.tag.append(field);
            }
            if(item.type==='password')
            {
                this.tag.append($('<p></p>'));
                var field=($(`<div>
                ${item.question}
                </div>`));
                field.append('<input type="password">');
                this.tag.append(field);
            }
            if(item.type==='number')
            {
                this.tag.append($('<p></p>'));
                var field=($(`<div>
                ${item.question}
                </div>`));
                field.append('<input type="number">');
                this.tag.append(field);
            }
        }
    }
}
application.init();
var application={
    db:null,
    init:function(){
        $.ajax({
            url:"/static/top-headlines.json",
            complete:(response)=>{
                var data=JSON.parse(response.responseText);
                this.db=data;
                this.show();
            }
        });
    },
    show:function()
    {
        var colums=[];
        console.log(this.db);
        for(var item of this.db)
        {
            for(var key in item)
            {
                if(colums.indexOf(key)===-1)
                {
                    colums.push(key);
                }
            }
        }
        var table=document.createElement("table");
        var row=table.insertRow(-1);
        for(var i=0; i<colums.length; i++)
        {
            var th=document.createElement("th");
            th.innerHTML=colums[i];
            row.appendChild(th);
        }
        for(var item of this.db)
        {
            row=table.insertRow(-1);
            for(var j=0; j<colums.length; j++)
            {
                var tablecell=row.insertCell(-1);
                tablecell.innerHTML=item[colums[j]];
            }
        }
        var container=document.getElementById("showData");
        container.innerHTML="";
        container.appendChild(table);
    }
}
application.init();
