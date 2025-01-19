// constructor function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

function areEqual(address1, address2) {
    return (
        address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zipCode === address2.zipCode
    )
}

function areSame(address1, address2) {
    return address1 === address2;
}

const address1 = new Address("1234 Elm St", "Springfield", 12345);
const address2 = new Address("1234 Elm St", "Springfield", 12345);
const address3 = new Address("1234 Klm St", "New York", 12345);
const address4 = address1;

console.log(areEqual(address1, address2));
console.log(areEqual(address1, address3));

console.log(areSame(address1, address2));
console.log(areSame(address1, address4));

