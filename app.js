function sayError(){
    alert('Some error occured!');
}
function showError(x){
    alert(`Error ${x} occurred`);
}
function createHeaders(n){
    for(var i=0; i<n; i++)
    {
        document.write("<h2> Header "+i+"</h2>");
    }
}
function checkPassword(x){
    if(x=="Step" || x=="Web" || x=="JavaScript")
    {
        return true;
    }
    else
    return false;
}
function sign(x)
{
    var digit=0;
    if(x<0)
    {
        digit=-1;
    }
    else if(x>0)
    {
        digit=1;
    }
    else
    {
        digit=0;
    }
    return digit;
}
function WeekDay(number){
    var values_function;
    switch(number){
        case 0:
            values_function='Sunday';
            break;
        case 1:
            values_function='Monday';
            break;
        case 2:
            values_function='Tuesday';
            break;
        case 3:
            values_function='Wednesday';
            break;
        case 4:
            values_function='Thursday';
            break;
        case 5:
            values_function='Friday';
            break;
        case 6:
            values_function='Saturday';
            break;
        default:
            break;
    }
    return values_function;
}
