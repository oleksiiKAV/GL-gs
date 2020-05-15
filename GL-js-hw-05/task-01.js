const Account = function(login, email) {
  this.login = login;
  this.email = email;
};
Account.prototype.getInfo = function() {
  console.log(`Login: ${this.login}, email: ${this.email}`); // function
};

console.log(`Task 01`);

const mango = new Account('Mangozedog', 'mango@dog.woof');
mango.getInfo();

const poly = new Account('Poly', 'poly@mail.com');
poly.getInfo();
