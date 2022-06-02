
let btn = document.getElementById('btn');
let cryptoInp = document.querySelector('#crypto');
let currencyInp = document.querySelector('#currency');

btn.addEventListener('click',getPrice);

let coins = ["bitcoin", "ethereum", "solana", "dogecoin", "shiba-inu"]

async function getPrice() {
    // let crypto = cryptoInp.value;
    let currency = "usd";


    for(const val of coins){
        try{
            console.log(`inside for loop ${val}`)

            const response = await fetch(
                `https://api.coingecko.com/api/v3/simple/price?ids=${val}&vs_currencies=${currency}`,
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
                console.log(`${val}_price`)
                let price = document.getElementById(`${val}_price`);
                price.innerHTML = `${data[val][currency]} ${currency}`;
                price.style.display = 'block';
            }
        } catch(e){
            console.log('error with coin gecko request!!\n' + e)
        }
    }
}