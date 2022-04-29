const Employee = require('./Employee');

// Engineer(child) is an extension of Employee(parent)
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return 'Engineer'
    }
}

module.exports = Engineer;