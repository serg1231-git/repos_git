var number_one=(<HTMLInputElement>document.getElementById('input_numberone')).value;
var number_two=(<HTMLInputElement>document.getElementById('input_numbertwo')).value;
var result=<HTMLInputElement>document.getElementById('result');
var container=document.querySelectorAll('div >input');
container.forEach((element)=>{
    element.addEventListener('click',()=>{
        if(element.id=='add')
        {
            var result_operation=Number(number_one)+Number(number_two);
            result.value=(result_operation).toString();
        }
        else if(element.id=='sub')
        {
            result_operation=Number(number_one)-Number(number_two);
            result.value=(result_operation).toString();
        }
        else if(element.id=='multi')
        {
            result_operation=Number(number_one)*Number(number_two);
            result.value=(result_operation).toString();
        }
        else if(element.id=='division')
        {
            result.value=(Number(number_one)/Number(number_two)).toString();
        }
    });
});