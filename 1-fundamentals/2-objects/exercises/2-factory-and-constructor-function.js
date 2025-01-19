// factory function
function createAddress(street, city, zipCode) {
  return {
    street: street,
    city: city,
    zipCode: zipCode,
  };
}

// constructor function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const address1 = createAddress("1234 Elm St", "Springfield", 12345);
console.log(address1);

const address2 = new Address("1234 Elm St", "Springfield", 12345);
console.log(address2);
