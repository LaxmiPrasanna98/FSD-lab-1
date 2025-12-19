function User(name, email) {
    this.name = name
    this.email = email
}

User.prototype.login = function () {
    console.log(this.name + " has logged in")
}

function Organizer(name, email, department) {
    User.call(this, name, email)
    this.department = department
}

Organizer.prototype = Object.create(User.prototype)
Organizer.prototype.constructor = Organizer

Organizer.prototype.createEvent = function () {
    console.log(this.name + " from " + this.department + " department created an event")
}

const organizer1 = new Organizer("laxmi Prasanna", "banouthlaxmiprasanna@gmail.com", "CSE")

organizer1.login()
organizer1.createEvent()
