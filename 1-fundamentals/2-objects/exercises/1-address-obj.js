const address1 = {
    street: '1234 Elm St',
    city: 'Springfield',
    zipCode: 12345
}

function showAddress(address) {
    for (let key in address) {
        console.log(key, address[key]);
    }
}

showAddress(address1);