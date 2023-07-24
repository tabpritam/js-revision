const accountId = 144553;
let acccountEmail = "pritam@gmail.com";
var accountPassword = "12345";
accountCity = "Bhubaneswar";
let accountState;

// accountId = 2;// Not allowerd

acccountEmail = "contact@email.com"
accountPassword = "21212121"
accountCity = "Sonepur"

console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and functional scope
 */

console.table([accountId,acccountEmail,accountPassword,accountCity,accountState])