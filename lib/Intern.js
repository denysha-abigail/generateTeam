// Same as Engineer.js; we are pulling name, id, and email from Employee.js
const Employee = require('./Employee');

// Intern is an extension(the child) of the Employee(parent)
class Intern extends Employee {
    constructor (name, id, email, school){             //constructor for Intern
        super(name, id, email);                        // super is the info we are inheriting from parent (Employee.js)
        this.school = school;                        // added for Intern 
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
    
}

module.exports = Intern;