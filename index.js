// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'guithub',
        message:'What is your Github username?'
    },
    {
        type:'input',
        name:'email',
        message:'What is your email address?'
    },
    {
        type:'input',
        name:'title',
        message:'What is your project name?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
    },
    {
        type:'input',
        name:'description',
        message:'Please write a description of your project',
    },
    {
        type:'list',
        name:'license',
        message:'What kind of license does your project have?',
        choices:['MIT','APACHE 2.0','GPL 3.0','ISC','None']
    }
    

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating README...');
        writeToFile('README.md',generateMarkdown({...inquirerResponses}));
    })
}

// Function call to initialize app
init();
