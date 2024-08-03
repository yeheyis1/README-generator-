const inquirer = require('inquirer');
const fs = require('fs');
const type = require('os');

inquirer.prompt (
    [
        {
            type: 'input',
            name: 'title',
            message: 'what is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'provide a description your project:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'what are installation instruction?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage information:?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide contribution gideline',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide test instructions:',
          },
          {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project:',
            choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
          },
          {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
          },
    ]
).then((response) => {
    const html = `<html>
  <body>
  <ul>
  <li>name: ${response.title}</li>
  <li>discription: ${response.description}</li>
  <li>installation: ${response.installation}</li>
  <li>usage: ${response.usage}</li>
  <li>contributing: ${response.contributing}</li>
  <li>tests: ${response.tests}</li>
  <li>license: ${response.license}</li>
  <li>github: ${response.github}</li>
  <li>email: ${response.email}</li>
  </ul>
  </body>
  </html>`;

  fs.writeFile('index.html', html, (err) =>
    err ? console.log(err) : console.log('html page successfuly created')
);
});