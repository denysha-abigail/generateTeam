const Employee = require('./Employee');

// Intern(child) is an extension of Employee(parent)
class Intern extends Employee {
    constructor (name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
    
}

module.exports = Intern;