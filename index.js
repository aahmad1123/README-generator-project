// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
// Questions for inquirer
const questions = [
    { 
        type:"input", 
        name: "title", 
        message:  "What is the title of your app?"
    }, 
    { 
        type:"input", 
        name: "description", 
        message:  "What does your app do?"
    }, 
    { 
        type:"input", 
        name: "installation", 
        message:  "Please include any installation instructions for your app."
    }, 
    {
        type:"input",
        name: "usage",
        message: "Please describe what this app will be used for"
    },
    {
        type:"input",
        name: "contribution",
        message: "Who worked on this application?"
    },
    {
        type:"input",
        name: "test",
        message: "Please include testing instructions."
    },
    // used a list for licenses instead of input
    { 
        type:"list", 
        name: "license", 
        message:  "select a license for your app.",
        choices: ["apache", "MIT", "mozilla", "none"]
    }, 
    {
        type: "input",
        name: "username",
        message: "Please enter your github username."
    },
    {
        type: "input",
        name: "email",
        message: "Please input your email address."
    },
   // "Why did you build this project?", "What problem does it solve?", "What did you learn?"
];

// TODO: Create a function to write README file

//function writeToFile(fileName, data) {
 //  fs.writeFileSync(fileName, generateMarkdown({...data})) 
//}


// TODO: Create a function to initialize app
// ignored original format, worked with format used in class
function init() {
    inquirer.prompt(questions).then(data =>{
        console.log(data)
        fs.writeFileSync("READMEtest1.md", generateMarkdown(data))
    })
}

// Function call to initialize app
init();
