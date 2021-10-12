var number_one = document.getElementById('input_numberone').value;
var number_two = document.getElementById('input_numbertwo').value;
var result = document.getElementById('result');
var container = document.querySelectorAll('div >input');
container.forEach(function (element) {
    element.addEventListener('click', function () {
        if (element.id == 'add') {
            var result_operation = Number(number_one) + Number(number_two);
            result.value = (result_operation).toString();
        }
        else if (element.id == 'sub') {
            result_operation = Number(number_one) - Number(number_two);
            result.value = (result_operation).toString();
        }
        else if (element.id == 'multi') {
            result_operation = Number(number_one) * Number(number_two);
            result.value = (result_operation).toString();
        }
        else if (element.id == 'division' && ((Number(number_one) == 0) || Number(number_two) == 0)) {
            result.innerHTML = 'На ноль делить нельзя';
        }
        else {
            result.value = (Number(number_one) / Number(number_two)).toString();
        }
    });
});
