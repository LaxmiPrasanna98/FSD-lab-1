class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    login() {
        console.log(this.name + " has logged in")
    }
}

class Student extends User {
    constructor(name, email, rollNo) {
        super(name, email)
        this.rollNo = rollNo
    }

    registerEvent() {
        console.log(this.name + " (Roll No: " + this.rollNo + ") registered for an event")
    }
}

class Organizer extends User {
    constructor(name, email, department) {
        super(name, email)
        this.department = department
    }

    createEvent() {
        console.log(this.name + " from " + this.department + " department created an event")
    }
}

const student1 = new Student("Laxmi", "laxmi@gmail.com", 101)
const organizer1 = new Organizer("mahika", "mahika@gmail.com", "CSE")

student1.login()
student1.registerEvent()

organizer1.login()
organizer1.createEvent()
