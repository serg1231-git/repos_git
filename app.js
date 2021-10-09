var parity;
function countvalues()
{
var age=parseInt(document.getElementById('age').value,10);
if(age>0 && age<=2)
{
    console.log("Ребенок");
}
if(age>=12 && age<=18)
{
    console.log("Подросток");
}
if(age>18 && age<=60)
{
    console.log("Взрослый");
}
if(age>60)
{
    console.log("Пенсионер");
}
var symbols=parseInt(document.getElementById('spec_symbols').value,10);
switch(symbols)
{
    case 1:
        console.log("!");
        break;
    case 2:
        console.log("@");
        break;
    case 3:
        console.log("#");
        break;
    case 4:
        console.log("$");
        break;
    case 5:
        console.log("%");
        break;
    case 6:
        console.log("^");
        break;
    case 7:
        console.log("&");
        break;
    case 8:
        console.log("*");
        break;
    case 9:
        console.log("(");
        break;
    case 0:
        console.log(")");
        break;
    default:
        console.log("Not correct number");
        break;
}
document.getElementById('spec_symbols').value="";
var three_digit_number=parseInt(document.getElementById('three_digit').value,10);
var index1=parseInt(three_digit_number/100,10);
var index2=parseInt((three_digit_number%100)/10,10);
var index3=three_digit_number%10;
if(index1==index2|| index2==index3|| index1==index3)
{
    console.log('Число ',three_digit_number,'имеет одинаковые цифры');
}
else
{
    console.log('Число ', three_digit_number, ' не имеет одинаковых цифр');
}
var year=parseInt(document.getElementById('years').value,10);
if((year%4==0 && (year%100!=0))||(year%400==0))
{
    console.log('Год высокосный');
}
else
{
    console.log('Год невысокосный');
}
var i=0; 
var polindrom_number=parseInt(document.getElementById('polindrom').value,10);
var in1=parseInt((polindrom_number/1000)/10,10);//1 digit
var in2=parseInt((polindrom_number/1000)%10,10);
var in3=parseInt((polindrom_number/100)%10,10);
var in4=parseInt((polindrom_number/10)%10,10);
var in5=parseInt((polindrom_number%1000)%10,10);
if(in1==in5&& in2==in4)
{
    console.log('The number',polindrom_number,'is a polindrom');
}
else
{
    console.log('The number',polindrom_number,'is not a polindrom');
}
var count_convertible=parseFloat(document.getElementById('count_convert').value);
var convert1=document.getElementById('conversion');
convert1.onchange=()=>{
    var thisvalue=convert1.value;
    if(thisvalue=="EUR")
    {
        document.getElementById('amount_conversion').value=0.83*count_convertible;
    }
    else
    if (thisvalue=="UAH")
    {
        document.getElementById('amount_conversion').value=27.47*count_convertible;
    }
    else
    if(thisvalue=="AZN")
    {
        document.getElementById('amount_conversion').value=1.7*count_convertible;
    }
};
var purchase_amount=parseFloat(document.getElementById('pur_amount').value);
if(purchase_amount>=200 && purchase_amount<300)
{
    document.getElementById('pay_amount').value=purchase_amount-(purchase_amount*0.03);
}
else
if(purchase_amount>300 & purchase_amount<500)
{
    document.getElementById('pay_amount').value=purchase_amount-(purchase_amount*0.05);
}
else
if(purchase_amount>500)
{
    document.getElementById('pay_amount').value=purchase_amount-(purchase_amount*0.07);
}
else
{
    document.getElementById('pay_amount').value=purchase_amount;
}
var circle_perimeter=parseFloat(document.getElementById('circle').value);
var square_perimeter=parseFloat(document.getElementById('square').value);
squareside=square_perimeter/4;
circle_diameter=circle_perimeter/3.141592;
if (squareside>=circle_diameter)
{
    console.log("Круг поместился в квадрат",' Сторона квадрата ',squareside,' Диаметр круга ',circle_diameter);
}
else
{
    console.log("Круг не поместился в квадрат");
}
var score=0;
var capitalcount=prompt('Столица Украины ? 1-Минск 2-Киев 3-Баку');
var president=prompt('Действующий президент Украины? 1-П.Порошенко 2-Л.Кучма 3-В.Зеленский');
var holiday=prompt('Сколько лет Конституции будет в 2021 году? 1-30 2-25 3-23');
if(capitalcount==2)
{
    score=score+2;
}
if(president==3)
{
    score=score+2;
}
if(holiday==2)
{
    score=score+2;
}
console.log('Score = ',score);
var new_date=document.getElementById('new_date').value;
date=new_date.split('-');
let olddate=new Date(date[2],date[1]-1,date[0]);
olddate.setDate(olddate.getDate()+1);
console.log(olddate);
}
