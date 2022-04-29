const generateTeam = team => {

    const generateManager = (manager) => {
      return ` <div class="card" >
          <div class="card-header">
              <h2 class="card-title text-capitalize">${manager.getName()}</h2>
              <h3 class="card-title"><span class="oi oi-briefcase"></span>${manager.getRole()}</h3>   
          </div>
          <div class="card-body">
              <ul class="list-group">
                  <li class="list-group-item">ID: ${manager.getId()}</li>
                  <li class="list-group-item">EMAIL: <a href="mailto:${manager.getEmail()}"><span class="oi oi-envelope-closed">${manager.getEmail()}</span></a></li>
                  <li class="list-group-item">OFFICE NUMBER: ${manager.getOfficeNumber()}</li>
              </ul>
          </div>
          </div>   `;
    };
  
    const generateEngineer = (engineer) => {
      if(!engineer){
        return '';
      }
      return ` <div class="card" >
          <div class="card-header">
              <h2 class="card-title text-capitalize">${engineer.getName()}</h2>
              <h3 class="card-title"><span class="oi oi-beaker"></span>${engineer.getRole()}</h3>   
          </div>
          <div class="card-body">
              <ul class="list-group">
                  <li class="list-group-item">ID: ${engineer.getId()}</li>
                  <li class="list-group-item">EMAIL: <a href="mailto:${engineer.getEmail()}"><span class="oi oi-envelope-closed"></span></a></li>
                  <li class="list-group-item">GITHUB: <a href="https://github.com/${engineer.getGithub()}"></a></li>
              </ul>
          </div>
          </div>   `;
    };
  
    const generateIntern = (intern) => {
      if(!intern){
        return '';
      }
      return ` <div class="card" >
      <div class="card-header">
          <h2 class="card-title text-capitalize">${intern.getName()}</h2>
          <h3 class="card-title"><span class="oi oi-calculator"></span>${intern.getRole()}</h3>   
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${intern.getId()}</li>
              <li class="list-group-item">EMAIL: ${intern.getEmail()}</li>
              <li class="list-group-item">SCHOOL: ${intern.getSchool()}</li>
          </ul>
      </div>
      </div>   `;
    };
  
    const html = [];
  
      html.push(team
          .filter(employee => employee.getRole() === "Manager")
          .map(manager => generateManager(manager))
      );
      html.push(team
          .filter(employee => employee.getRole() === "Engineer")
          .map(engineer => generateEngineer(engineer))
          .join("")
      );
      html.push(team
          .filter(employee => employee.getRole() === "Intern")
          .map(intern => generateIntern(intern))
          .join("")
      );
  
      return html.join("");
  
  }
  
  module.exports = team => {
  
    return ` <!DOCTYPE html>
      <html lang="en">
      
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Builder</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"/>
        <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="team.css">
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
                  ${generateTeam(team)}
              </div>
          </div>
        </div>
      </body>
      </html>
      `;
  };