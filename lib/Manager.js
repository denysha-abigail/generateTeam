const Employee = require ('./Employee');

// Manager(child) is an extension of Employee(parent)
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }

}


module.exports = Manager;