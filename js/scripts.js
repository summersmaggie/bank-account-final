//biz logic
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
    
    $("form#depoWith").fadeIn();
    $("#firstresult").text(name + ", your bank balance is $" + initialDeposit + ".");
  });

  $("form#depoWith").submit(function(event) {
    event.preventDefault();

    var deposit = parseInt($("input#deposit").val());
    var withdrawal = parseInt($("input#withdrawal").val());

    newBankAccount.balance = newBankAccount.balance + deposit;
    newBankAccount.balance = newBankAccount.balance - withdrawal;

    $("#secondresult").text("Your new current balance is " + "$" + newBankAccount.balance + ".")

    $("#firstresult").hide();
  });
});
