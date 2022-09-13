class Person {
  constructor(name, favColor, language) {
    this.name = name;
    this.favColor = favColor;
    this.language = language;
  }
  getDressed() {
    return `${this.name} got dressed for the day!`;
  }
  sleep() {
    return `${this.name} is sleeping. Let them sleep for 8 hours.`;
  }
  exercise() {
    return `Today is leg day! ${this.name} is ready for their workout!`;
  }
}
class PostalWorker extends Person {
  constructor(name, favColor, language) {
    super(name, favColor, language);
  }
  kindOfBag() {
    return `${this.name} is carrying a satchel full of mail.`;
  }
  wearHat() {
    return `${this.name} keeps a baseball cap on`;
  }
  canRun() {
    return `${this.name} can run from the neighborhood dogs.`;
  }
}

class Chef extends Person {
  constructor(name, favColor, language) {
    super(name, favColor, language);
  }
  cooks() {
    return "chop chop chop stir stir stir";
  }
}

let postalWorker1 = new PostalWorker("Brenda", "red", "French");
let postalWorker2 = new PostalWorker("Allen", "green", "English");
let chef1 = new Chef("Randolph", "yellow", "German");
let chef2 = new Chef("Rachel", "purple", "Korean");

class BankAccount {
  constructor(ownerName, balance, acctNum) {
    this.ownerName = ownerName;
    this.balance = balance;
    this.accountNumber = acctNum;
  }
  deposit(depositAmount) {
    this.balance += depositAmount;
    return `Your new balance is ${this.balance}`;
  }
  withdraw(withdrawAmount) {
    this.balance += withdrawAmount;
    return `You have withdrew ${withdrawAmount}. Your new balance is ${this.balance}.`;
  }
}
let pnc = new BankAccount("Ess", 3000, "842792374");
console.log(pnc.deposit(430));
