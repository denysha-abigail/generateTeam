const Manager = require ('../lib/Manager');

test ('create a manager officeNumber and return a role of Manager', () => {
    const manager = new Manager('Bob', 1, 'test@test.com', 123);

    expect(manager.officeNumber).toBe(123);
    expect(manager.getOfficeNumber()).toBe(123);
    expect(manager.getRole()).toBe('Manager');
});