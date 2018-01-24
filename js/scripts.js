//biz logic


// //for if statement have amount === 0. otherwise it'll be undefined.
// BankAccount.prototype.withdrawal = function() {
//   this.balance -= withdrawal;
// }
// BankAccount.prototype.deposit = function() {
//   this.balance += deposit;
// }

var newBankAccount;

function BankAccount(name, balance) {
  this.name = name;
  this.balance = balance;
}

//ui logic
$(document).ready(function() {
  $("form#bank").submit(function(event) {
    event.preventDefault();

    var name = $("input#name").val();
    var initialDeposit = parseInt($("input#initialDeposit").val());

    newBankAccount = new BankAccount(name, initialDeposit);
    console.log(newBankAccount)

    $("form#depoWith").fadeIn();
    $("#firstresult").text(name + ", your bank balance is $" + initialDeposit + ".");
  });

  $("form#depoWith").submit(function(event) {
    event.preventDefault();

    var deposit = parseInt($("input#deposit").val());
    console.log(deposit);
    var withdrawal = parseInt($("input#withdrawal").val());
    console.log(withdrawal);

    newBankAccount.balance = newBankAccount.balance + deposit;
    newBankAccount.balance = newBankAccount.balance - withdrawal;
    console.log(newBankAccount.balance);
  });
});




  //   newBankAccount.balance = newBankAccount.balance + deposit;
  //   newBankAccount.balance = newBankAccount.balance - withdrawal;

    //$(".amount").text(newBankAccount.amount);

  // $(".amount").text(finalAmount)
  //
  // });
