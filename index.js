const { prompt } = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const roles = { Manager: [], Engineer: [], Intern: [] };

init();

function init() {
    prompt([
        {
            type: 'confirm',
            name: 'isRole',
            message: 'Would you like to fill a position?'
        }
    ])
        .then(({ isRole }) => {
            isRole
                ? fillRole()
                : createHTML()
        });
};

function fillRole() {
    prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Which position would you like to fill?',
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ])
        .then(({ role }) => {

            prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the employee\'s name?'
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is the employee\'s id?'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is the employee\'s e-mail?'
                },
                {
                    type: 'input',
                    name: 'office',
                    message: 'What is the manager\'s office number?',
                    when: role == 'Manager'
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'What is the engineer\'s github profile?',
                    when: role == 'Engineer'
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'What is the intern\'s school name?',
                    when: role == 'Intern'
                }
            ])
                .then(ans => {
                    role == 'Manager'
                        ? roles.Manager.push(new Manager(...Object.values(ans)))
                        : role == 'Engineer'
                            ? roles.Engineer.push(new Engineer(...Object.values(ans)))
                            : roles.Intern.push(new Intern(...Object.values(ans)));
                })
                .then(init)
        })
};

function createHTML() {
    
}
