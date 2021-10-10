users=[
    {"fio":"Прийма С.С","phone":"+380935622387"},
    {"fio":"Семенов А.С","phone":"+380965232596"},
    {"fio":"Вавилов А.М","phone":"+380501253685"},
    {"fio":"Макаров Н.В.","phone":"+380975412536"},
    {"fio":"Андреев А.С.","phone":"+380985235896"},
    {"fio":"Билинский Р.С.","phone":"+380505823652"},
    {"fio":"Дмитров М.В.","phone":"+380953026535"},
    {"fio":"Байрамов М.В","phone":"+380672530253"},
    {"fio":"Давиденко С.С.","phone":"+380968777777"},
    {"fio":"Данилов М.Л.","phone":"+380931777772"},
    {"fio":"Антонов М.С","phone":"+380672176010"},
    {"fio":"Кондратьев К.С.","phone":"+380504180697"},
    {"fio":"Альтрухин И.С.","phone":"+380504180695"},
    {"fio":"Владимиров К.О","phone":"+380632829292"},
    {"fio":"Васильева А.С.","phone":"+380672176020"},
    {"fio":"Камаров С.В.","phone":"+380937027555"},
    {"fio":"Сергеев А.В.","phone":"+380963447777"},
    {"fio":"Марков М.А.","phone":"+380937015555"}
];
var table=document.createElement('table');
var colums=[];
for(var item of users)
{
    for(var key in item)
    {
        if (colums.indexOf(key)===-1)
        {
            colums.push(key);
        }
    }
}
var row=table.insertRow(-1);
for(var i=0; i<colums.length; i++)
{
    var th=document.createElement("th");
    th.innerHTML=colums[i];
    row.appendChild(th);
}
for(var item of users)
{
    row=table.insertRow(-1);
    for(var j=0; j<colums.length; j++)
    {
        var tablecell=row.insertCell(-1);
        tablecell.innerHTML=item[colums[j]];
    }
}
var add_table=document.getElementById("tables");
add_table.appendChild(table);