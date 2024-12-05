import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_fR1jZGLLVeja4HqTYV8AnsLsqWZzSuljpG0KpoRQ');

convertCurrency("INR", "USD", 3);
export async function convertCurrency(fromCurrency, tocurrency , units){
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: tocurrency
    });
    const multiplier = res.data[tocurrency]
    return multiplier*units;
    
}

