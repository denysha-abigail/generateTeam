const Intern = require ('../lib/Intern');

test ('create an intern school and return of intern', () => {
    const intern = new Intern('Joe', 3, 'test3@test.com', 'UCF');

    expect(intern.school).toBe('UCF');
    expect(intern.getSchool()).toBe('UCF');  
    expect(intern.getRole()).toBe('Intern');
})