const { prompt } = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateTeam = require('./src/page-template');
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
                    name: 'officeNumber',
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
    
    const generateManager = (Manager) => {
        return `<div class="card">
        <div class="card-header">
            <h2 class="card-title">${Manager.getName()}</h2>
            <h3 class="card-title"><i class="fa-solid fa-mug-hot"></i>${Manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${Manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${Manager.getEmail()}"></a></li>
                <li class="list-group-item">Office Number: ${Manager.getOfficeNumber()}</li>
            </ul>
        </div>
        </div>`
        };
        
    const { Manager, Engineer, Intern } = roles
    fs.writeFile('./dist/team.html', generateManager(JSON.stringify(Manager)), (error) => {
        if (error) {
            console.log(error);
            return;
        } else {
            console.log('Success! The HTML file for your team has been created!');
        }
    });
}