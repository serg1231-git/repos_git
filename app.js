var customer=[
    {Name:'Sergey',Age:'25'},
    {Name:'Andrey',Age:'18'},
    {Name:'Semen',Age:'20'},
    {Name:'Ruslan',Age:'23'},
    {Name:'Igor',Age:'21'},
    {Name:'Daniil',Age:'24'},
    {Name:'Denis',Age:'20'},
    {Name:'Dmitriy',Age:'20'},
    {Name:'Danis',Age:'23'},
    {Name:'Danid',Age:'22'},
    {Name:'Eduard',Age:'27'}
]
var table=document.createElement('table');
var colums=[];
for(var item of customer){
    for(var key in item)
    {
        if(colums.indexOf(key)===-1)
        {
            colums.push(key);
        }
    }
}
var row=table.insertRow(-1);
for(var i=0; i<colums.length; i++)
{
    var th=document.createElement('th');
    th.innerHTML=colums[i];
    row.appendChild(th);
}
for(var item of customer){
    row=table.insertRow(-1);
    for(var j=0; j<colums.length; j++)
    {
        var tablecell=row.insertCell(-1);
        tablecell.innerHTML=item[colums[j]];
    }
}
var table_add=document.getElementById('table_add');
table_add.appendChild(table);
function sortTable(n){
    var row,i,switching,dir,shouldswitch,switchcount=0;
    switching=true;
    dir='asc';
    while(switching){
        var a,b;
        switching=false;
        row=table_add.getElementsByTagName('tr');
        for(i=1; i<(row.length-1); i++)
        {
            shouldswitch=false;
            a=row[i].getElementsByTagName('td')[n];
            b=row[i+1].getElementsByTagName('td')[n];
            if(dir=='asc'){
                if(a.innerHTML.toLowerCase() > b.innerHTML.toLowerCase()){
                    shouldswitch=true;
                    break;
                }
            }
            else if(dir=='desc')
            {
                if(a.innerHTML.toLowerCase() < b.innerHTML.toLowerCase()){
                    shouldswitch=true;
                    break;
                }
            }
        }
        if(shouldswitch)
        {
            row[i].parentNode.insertBefore(row[i+1],row[i]);
            switching=true;
            switchcount++;
        }
        else
        {
            if(switchcount==0 && dir=='asc')
            {
                dir='desc';
                switching=true;
            }
        }
    }
}
var th=document.querySelector('#table_add');
var results=th.getElementsByTagName('th');
results[0].addEventListener('click',function(){
    sortTable(0);
})
results[1].addEventListener('click',function(){
    sortTable(1);
})