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
    console.log(this.name + " with roll no " + this.rollNo + " registered for event")
}

const student1 = new Student("LaxmiPrasanna", "banouthlaxmiprasanna@gmail.com", 101)

student1.login()
student1.registerEvent()
