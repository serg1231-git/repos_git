var min=0;
var max=100;
var middle=Math.floor((min+max)/2);
function countvalues()
{
    var i=0;
    var sum=0;
    var summary=parseInt(document.getElementById('sum').value,10);
    while(i<=summary)
    {
        sum=sum+i;
        i++;
    }
    console.log('Сумма чисел в диапазоне до',summary,' равна ',sum);
    var max=0;
    var arr=new Array();
    var first_num=parseInt(document.getElementById('first_num').value,10);
    var second_num=parseInt(document.getElementById('second_num').value,10);
    if(first_num>second_num)
    {
        max=first_num;
    }
    else
    {
        max=second_num;
    }
    for(i=0; i<max; i++)
    {
        if(first_num%i==0 && second_num%i==0)
        {
            arr.push(i);
            i++;
        } 
    }
    var arr1=new Array();
    console.log('Максимальный общий делитель для чисел ', first_num,' и ',second_num," равен ",Math.max.apply(null,arr));
    var del=parseInt(document.getElementById('del').value,10);
    for(i=0; i<=del; i++)
    {
        if(del%i==0)
        {
            arr1.push(i);
        }
    }
    var count_cifra=0;
    console.log("Делители ",arr1," числа ",del);
    var cifra=parseInt(document.getElementById('cifra').value,10);
    var cinfa_count=cifra;
    while(cinfa_count>=1)
    {
        cinfa_count=cinfa_count/10;
        count_cifra++;
    }
    console.log('Количество цифр числа ',cifra,' равно ',count_cifra);
    var numbercount=10;
    var number;
    var positiv_num=0;
    var negativ_num=0;
    var zero=0;
    var even_num=0;
    var odd_num=0;
    for(i=0; i<numbercount; i++)
    {
        number=+prompt(`Enter ${i} number`,2);
        if(number==0)
        {
        zero=zero+1;
        }
        else if(number>0)
        {
            positiv_num=positiv_num+1;
        }
        else if(number<0)
        {
            negativ_num=negativ_num+1;
        }
        if (number%2==0)
        {
            even_num=even_num+1;
        }
        if (number%2!=0)
        {
            odd_num=odd_num+1;
        }
    }
    console.log('Positive number: ',positiv_num);
    console.log('Negative number: ',negativ_num);
    console.log('Even numbers: ',even_num);
    console.log('Odd number',odd_num);
    var input_cifra=document.getElementById('cifra_input').value;
    var step_cifra=document.getElementById('step').value;
    document.getElementById('result_step').value=input_cifra.slice(step_cifra)+input_cifra.slice(0,step_cifra);
    days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    var current_day=0;
    while(confirm(`Сегодняшний день ${days[current_day]} \n Увидеть следующий день`))
    {
        current_day=current_day+1;
    }
    var consoleFormat=[];
    for (i=1; i<=9; i++)
    {
        consoleFormat[i]=[]
        for(var j=2; j<=9; j++)
        {
           consoleFormat[i].push(i+"*"+j+"="+(i*j));
        }
    }
    console.table(consoleFormat);
}
function calc(){
        do
        {
            var a=+prompt('Введите первое число');
            var b=+prompt('Введите второе число');
            var operand=prompt('Выберите знак +-/*');
            switch(operand)
            {
                case '+':
                    alert(a+b);
                    break;
                case '-':
                    alert(a-b);
                    break;
                case '*':
                    alert(a*b);
                    break;
                case '/':
                    alert(a/b);
                    break;
                default:
                    break;
            }
        }
        while(confirm('Решить еще пример'));
    }
    function enter()
    {
        window.open('numbers.html');
    }
    function more(){
        min=middle;
        middle = Math.floor((min + max)/2);
        if(min==middle)
        {
            middle=middle+1;
        }
        checkresult();
    }
    function less(){
        max=middle;
        middle = Math.floor((min + max)/2);
        if(max==middle)
        {
            middle=middle-1;
        }
        checkresult();
    }
    function Eq(){
        max=middle;
        min=middle;
        checkresult();
    }
    function checkresult()
    {
        if(min==max)
        {
            document.getElementById("question").innerHTML='Вы угадали';
            document.getElementById("button1").hidden=true;
            document.getElementById("button2").hidden=true;
            document.getElementById("button3").hidden=true;
            return;
        }
        document.getElementById("question").innerHTML='Среднее число диапазона : '+middle;
    }
