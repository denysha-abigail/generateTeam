// Pulling the same info (name, id, email) from Employee.js to use here
const Employee = require('./Employee');

//This is saying the Engineer is an extension (the child) of the Employee(parent)
class Engineer extends Employee {
    constructor(name, id, email, github) {     //this constructor is what we need to make the Engineer
        super(name, id, email);             //this super is the info that we are grabbing from the parent(Employee.js)
        this.github = github;              // this is what we need to add for Engineer
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return 'Engineer'
    }
}

module.exports = Engineer;