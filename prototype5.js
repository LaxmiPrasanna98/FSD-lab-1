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
        console.log(this.name + " registered for event")
    }
}

class Organizer extends User {
    constructor(name, email, department) {
        super(name, email)
        this.department = department
    }

    createEvent() {
        console.log(this.name + " created an event")
    }
}

const student1 = new Student("Laxmi", "laxmi@gmail.com", 101)
const organizer1 = new Organizer("Anita", "anita@gmail.com", "CSE")

console.log(student1.name)
console.log(student1.email)
console.log(student1.rollNo)

student1.login()
student1.registerEvent()

console.log(organizer1.name)
console.log(organizer1.email)
console.log(organizer1.department)

organizer1.login()
organizer1.createEvent()
