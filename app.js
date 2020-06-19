const curOneEl = document.getElementById('currency_one');
const sumOne = document.getElementById('sum_one');
const curTwoEl = document.getElementById('currency_two');
const sumTwo = document.getElementById('sum_two');

const ValueEl = document.getElementById('value_str');
const swap = document.getElementById('swap');


async function fetchReq (curOne, curTwo) {
    let res = await fetch(`https://api.exchangerate-api.com/v4/latest/${curOne}`);
    let data = await res.json();
    let val = data.rates[curTwo];
    ValueEl.innerText = `1 ${curOne} = ${val} ${curTwo}`;
    sumTwo.value = (sumOne.value * val).toFixed(2);
}

function calculate() {
    let curOne = curOneEl.value;
    let curTwo = curTwoEl.value;

    fetchReq(curOne, curTwo);
}

curOneEl.addEventListener('change', calculate);
sumOne.addEventListener('input', calculate);
curTwoEl.addEventListener('change', calculate);
sumTwo.addEventListener('input', calculate);


console.log('hello man!');
console.log('hello man!');

swap.addEventListener('click', () => {
    let temp = curOneEl.value;
    curOneEl.value = curTwoEl.value;
    curTwoEl.value = temp;
    calculate();
});

calculate();