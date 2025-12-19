function User(name, email) {
    this.name = name
    this.email = email
}

User.prototype.login = function () {
    console.log(this.name + " has logged in")
}

function Student(name, email, rollNo) {
    User.call(this, name, email)
    this.rollNo = rollNo
}

Student.prototype = Object.create(User.prototype)
Student.prototype.constructor = Student

Student.prototype.registerEvent = function () {
    console.log(this.name + " (Roll No: " + this.rollNo + ") registered for an event")
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

const student1 = new Student("Laxmi", "laxmi@gmail.com", 101)
const organizer1 = new Organizer("Mahika", "mahika@gmail.com", "CSE")

student1.login()
student1.registerEvent()

organizer1.login()
organizer1.createEvent()
