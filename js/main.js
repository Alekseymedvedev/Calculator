// onchange = "document.getElementById('rangeValue').innerHTML = this.value;"
let inp1 = document.querySelector('.inp1');
let inp2 = document.querySelector('.inp2');
let rangeValue = document.querySelector('.rangeValue');
let rangeValue1 = document.querySelector('.rangeValue1');
let select = document.querySelector('.calculator__select');
let sum = document.querySelector('.sum');
// rangeValue.innerHTML=inp1.value;
inp1.onchange = d;
inp2.onchange = d;
select.onchange = d;
function d() {
    let a = rangeValue.innerHTML = inp1.value + 'm';
    let b = rangeValue1.innerHTML = inp2.value;
    sum.innerHTML = parseInt(a)*select.value + parseInt(b)*400+'р';
}