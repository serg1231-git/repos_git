var parity;
function countvalues()
{
var values=document.getElementById('amount').value;
if(values>1000)
{
    values=values-(values*0.1);
    alert(values);
}
else
{
    alert('Number is not more than 1000');
    document.getElementById('amount').value="";
}

document.getElementById('amount').value="";
console.log("=============================");
console.log('The Task 2');
var x=57;
if(x%2==0)
{
    parity=x;
    console.log('parity = '+parity);
}
else
{
    console.log('The number ',x,' is not divisible by 2');
}

console.log("==============================");
console.log('The Task 3');
console.log('Random number between 1 to 10 = ',Math.floor(Math.random()*11));
console.log("==============================");
console.log('The Task 4');
var a=Number(document.getElementById("x_value").value);
console.log(typeof a);
switch (a)
{
    case 1:
        console.log('one');
        break;
    case 2:
        console.log('two');
        break;
    case 3:
        console.log('Three');
        break;
    case 4:
        console.log('Four');
        break;
    case 5:
        console.log('Five');
        break;
    default:
        console.log('The number in not between 1 to 5');
        break;
}
document.getElementById('x_value').value="";
}
