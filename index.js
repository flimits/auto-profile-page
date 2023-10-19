const inquirer = require('inquirer');
const fs = require('fs');


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'myName',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'githubUser',
    },
    {
        type: 'input',
        message: 'What is the last GitHub Project You worked on?',
        name: 'githubProject',
      },
  ])
  .then((response) => {
    console.log(response)
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')

      writeToFile(response);
  }
  );

  const writeToFile = function(res) {

    const myName = res.myName;
    const email = res.email;
    const githubUser = res.githubUser;
    const githubProject = res.githubProject;

    const myProfileHtml = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Auto Profile Creation</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    
    </head>
    <body>
    
    <div class="container" style="color: blue">
        <div class="row" style="text-align: center">
          <h1>Hi, my name is ${myName}</h1>
        </div>
      </div>
    
    <div class="card mx-auto p-2" style="width: 60rem;">
        <div class="card-header">
          Featured
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">My GitHub Repo Page for User is: <a href="https://www.github.com/${githubUser}">https://www.github.io/${githubUser}</a></li>
          <li class="list-group-item">My Contact Email Address Is: ${email}</li>
          <li class="list-group-item">You can See my last project in GitHub was ${githubProject}: <a href="https://${githubUser}.github.io/${githubProject}">https://${githubUser}.github.io/${githubProject}</a></li>
          </li>
        </ul>
      </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    
    </body>
    </html>`

fs.writeFile('index.html', myProfileHtml, (err) => 
err ? console.error(err) : console.log('Success')
);

  }