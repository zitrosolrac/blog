let price = document.getElementById('price');
let btn = document.getElementById('btn');
let cryptoInp = document.querySelector('#crypto');
let currencyInp = document.querySelector('#currency');

btn.addEventListener('click',getPrice);

async function getPrice() {
    let crypto = cryptoInp.value;
    let currency = currencyInp.value;

    const response = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=${currency}`,
        {
            method: 'GET'
        }
    );

    if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

    else{
        const data = await response.json()
        console.log(data)
        price.innerHTML = `Current Price is ${data[crypto][currency]} ${currency} `;
        price.style.display = 'block';
    }
}