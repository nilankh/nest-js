class User {
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number){
        this.name = name;
        this.email = email
        this.age = age;

        console.log('User Created: ' + this.name)
    }
}

let nilank = new User('Nilank Nikhil', 'n@gmail.com', 23);
console.log(nilank);