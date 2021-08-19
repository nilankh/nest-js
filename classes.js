var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('User Created: ' + this.name);
    }
    return User;
}());
var nilank = new User('Nilank Nikhil', 'n@gmail.com', 23);
console.log(nilank);
