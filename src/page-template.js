const generateManager = (manager) => {
    return `<div class="card">
    <div class="card-header">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title"><i class="fa-solid fa-mug-hot"></i>${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}"></a></li>
            <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
    </div>`
    };

const generateEngineer = (Engineer) => {
    return `<div class="card">
    <div class="card-header">
        <h2 class="card-title">${Engineer.getName()}</h2>
        <h3 class="card-title"><i class="fa-light fa-glasses-round">${Engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${Engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${Engineer.getEmail()}"></a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${Engineer.getGithub()}"></a></li>
        </ul>
    </div>
    </div>`
};

const generateIntern = (Intern) => {
    return `<div class="card">
    <div class="card-header">
        <h2 class="card-title">${Intern.getName()}</h2>
        <h3 class="card-title"><i class="fa-light fa-user-graduate"></i>${Intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${Intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${Intern.getEmail()}"></a></li>
            <li class="list-group-item">School: ${Intern.getSchool()}</li>
        </ul>
    </div>
    </div>`
};


module.exports = (team) => {

    const manager = team.manager;
    const engineers = team.engineer;
    const interns = team.intern;

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
      <div class="container my-5">
        <div class="row">
            <div class="col-12 jumbotron mb-3">
                <h1 class="txt-center">My Team</h1>
            </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                ${generateManager(manager)}
                ${engineers.forEach(engineer => generateEngineer(engineer))}
                ${interns.forEach(intern => generateIntern(intern))}
            </div>
        </div>
      </div>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy;2020 by</h3>
      </footer>
    </body>
    </html>
    `;
    
};