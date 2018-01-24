//two submit functions for each form
//initial deposit will be global in business
var newBankAccount;
function BankAccount(name, balance) {
  this.name = name;
  this.balance = balance;

}
//for if statement have amount === 0. otherwise it'll be undefined.

BankAccount.prototype.withdrawal = function() {
  this.balance -= withdrawal;
}

BankAccount.prototype.deposit = function() {
  this.balance += deposit;
}

// function resetFields() {
//   $("input#deposit").val();
//   $("input#name").val();
//   $("input#initialDeposit").val();
//   $("input#withdrawal").val();
// }

//ui logic
var account = [];

$(document).ready(function() {
    var initialDeposit = [];

  $("form.bank").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var initialDeposit = parseInt($("input#initialDeposit").val());

    newBankAccount = BankAccount(name, initialDeposit);

    $(".amount").text(newBankAccount.name + ", your bank balance is " + newBankAccount.balance);
  });

  $("form.depoWith").submit(function(event) {
    event.preventDefault();
    var deposit = parseInt($("input#deposit").val());
    var withdrawal = parseInt($("input#withdrawal").val());

    newBankAccount.balance = newBankAccount.balance - deposit;
    newBankAccount.balance = newBankAccount.balance + deposit;

    $(".amount").text(newBankAccount.amount);
  });

  // $(".amount").text(finalAmount)

  resetFields();
});
