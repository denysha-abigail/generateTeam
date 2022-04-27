const Engineer = require ('../lib/Engineer');

test ('create an engineer gitHub and return of Manager', () => {
    const engineer = new Engineer('Sue', 2, 'test2@test.com', 'banana');

    expect(engineer.github).toBe('banana');
    expect(engineer.getGithub()).toBe('banana');  
    expect(engineer.getRole()).toBe('Engineer');
})