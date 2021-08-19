interface UserInterface{
    name: string;
    email: string;
    age: number;
    register();
    payInvoice();
}


class User {
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log('User Created: ' + this.name);
  }
  register() {
    console.log(this.name + ' is now registed');
  }
  payInvoice() {
    console.log(this.name + ' paid invoice');
  }
}

class Member extends User {
  id: number;
  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }

  payInvoice() {
    super.payInvoice();
  }
}

// let nilank = new User('Nilank Nikhil', 'n@gmail.com', 23);
// nilank.register();
// console.log(nilank.age);


let nikhil: User = new Member(1, 'Nilank Nikhil', 'n@gmail.com', 23);
nikhil.payInvoice();
