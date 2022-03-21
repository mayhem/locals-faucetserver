var lightwallet = require("eth-lightwallet");

if (!process.argv[2]) {
	console.log('Usage: ' + process.argv[1] + ' <password>');
	console.log('Creates a new lightwallet with given password');
	process.exit();
}

keyStore.createVault({
  password: process.argv[2],
}, function (err, ks) {
  ks.keyFromPassword(password, function (err, pwDerivedKey) {
    if (err) throw err;

    ks.generateNewAddress(pwDerivedKey, 5);
    var addr = ks.getAddresses();

    ks.passwordProvider = function (callback) {
      var pw = prompt("Please enter password", "Password");
      callback(null, pw);
    };
  });
});
