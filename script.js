let amount = document.getElementById('input-money');
let taxPercent = document.getElementById('input-tax');
let btn = document.querySelector('.calculate-btn');
let tip = document.getElementById('tax-amount');

let clearInput = () => {
    let a = amount.value.toString();
    let b = taxPercent.value.toString();
    amount.value = null;
    taxPercent.value = null;

    amount.setAttribute('placeholder', a);
    taxPercent.setAttribute('placeholder', b);
}
let clacTip = () => {
    let res = amount.value * (taxPercent.value / 100);
    tip.textContent = res;
}
btn.addEventListener('click', function () {
    clacTip();
    clearInput();
});
document.addEventListener('keypress', function (e) {
    if (e.code === 'Enter') {
        clacTip();
        clearInput();
    }
});
