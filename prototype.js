function User(name, email) {
    this.name = name
    this.email = email
}

User.prototype.login = function () {
    console.log(this.name + " has logged in with email " + this.email)
}

const user1 = new User("Laxmi", "laxmi@gmail.com")
const user2 = new User("Prasanna", "prasanna@gmail.com")

user1.login()
user2.login()
