const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

function fetchAndConvert() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
    fetch("https://open.exchangerate-api.com/v6/latest")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            const rate = data.rates[currency_two] / data.rates[currency_one];
            rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
            amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
        });
}

//Event Listeners
currencyEl_one.addEventListener("change", fetchAndConvert);
amountEl_one.addEventListener("input", fetchAndConvert);
currencyEl_two.addEventListener("change", fetchAndConvert);
amountEl_two.addEventListener("input", fetchAndConvert);

fetchAndConvert();
