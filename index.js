// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generate = require('./utils/generateMarkdown')

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What installation instructions does a user need to follow for this project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use: '
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license do you want for this project?',
        choices: [ 
            'GNU AGPLv3', 
            'GNU GPLv3',
            'GNU LGPLv3',
            'Mozilla',
            'Apache',
            'MIT',
            'Boost Software',
            'The Unlicense',
        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who are the contributors of this projects?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Do you have any tests for your application? If so, how do you run them.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email: '
    }
];

//Function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        fs.writeFile('README.md', generate(data), (err) => 
        err ? console.log(err) : console.log('Successfully created a new README')
        );
    });
}

// Function call to initialize app
init();
