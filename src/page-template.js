const generateTeam = team => {

    const generateManager = (manager) => {
      return ` <div class="card manager-card" >
          <div class="card-header manager-header">
              <h2 class="card-title text-capitalize text-center font-weight-bold manager-title">${manager.getName()}</h2>
              <h3 class="card-title text-center font-weight-bold manager-title"><span class="oi oi-briefcase mr-2"></span>${manager.getRole()}</h3>   
          </div>
          <div class="card-body">
              <ul class="list-group">
                  <li class="list-group-item manager-list">ID: ${manager.getId()}</li>
                  <li class="list-group-item manager-list">EMAIL: <a class="text-uppercase" href="mailto:${manager.getEmail()}"><span class="oi oi-envelope-closed mr-1"></span>${manager.getEmail()}</a></li>
                  <li class="list-group-item manager-list">OFFICE NUMBER: ${manager.getOfficeNumber()}</li>
              </ul>
          </div>
          </div>   `;
    };
  
    const generateEngineer = (engineer) => {
      if(!engineer){
        return '';
      }
      return ` <div class="card engineer-card" >
          <div class="card-header engineer-header">
              <h2 class="card-title text-capitalize text-center font-weight-bold engineer-title">${engineer.getName()}</h2>
              <h3 class="card-title text-center font-weight-bold engineer-title"><span class="oi oi-beaker mr-2"></span>${engineer.getRole()}</h3>   
          </div>
          <div class="card-body">
              <ul class="list-group">
                  <li class="list-group-item engineer-list">ID: ${engineer.getId()}</li>
                  <li class="list-group-item engineer-list">EMAIL: <a class="text-uppercase" href="mailto:${engineer.getEmail()}"><span class="oi oi-envelope-closed mr-1"></span>${engineer.getEmail()}</a></li>
                  <li class="list-group-item engineer-list">GITHUB: <a class="text-uppercase" href="https://github.com/${engineer.getGithub()}" target="_blank"><span class="oi oi-fork"></span>${engineer.getGithub()}</a></li>
              </ul>
          </div>
          </div>   `;
    };
  
    const generateIntern = (intern) => {
      if(!intern){
        return '';
      }
      return ` <div class="card intern-card" >
      <div class="card-header intern-header">
          <h2 class="card-title text-capitalize text-center font-weight-bold intern-title">${intern.getName()}</h2>
          <h3 class="card-title text-center font-weight-bold intern-title"><span class="oi oi-calculator mr-2"></span>${intern.getRole()}</h3>   
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item intern-list">ID: ${intern.getId()}</li>
              <li class="list-group-item intern-list">EMAIL: <a class="text-uppercase" href="mailto:${intern.getEmail()}"><span class="oi oi-envelope-closed mr-1"></span>${intern.getEmail()}</a></li>
              <li class="list-group-item text-uppercase intern-list">SCHOOL: ${intern.getSchool()}</li>
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
        <title>generateTeam(team)</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"/>
        <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
        <link rel="stylesheet" href="team.css">
      </head>
      
      <body>
        <div class="container my-5">
          <div class="row">
              <div class="col-12 jumbotron mb-3">
                  <h1 class="text-center font-weight-bold">My Team<span class="oi oi-people ml-3"></span></h1>
              </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
              <div class="col-12 d-flex justify-content-center flex-wrap">
                  ${generateTeam(team)}
              </div>
          </div>
        </div>
      </body>
      </html>
      `;
  };