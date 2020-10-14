const inquirer = require("inquirer");
const generate = require("./utils/generateMarkdown.js");
const fs = require("fs");

// array of questions for user
const questions = ["What is the title of this project?", "What does this project do?", "What are the installation instructions?", "Who contributed to this project", "What are the test instructions?", "How is this to be used?"
];

const license = ["license1", "license2", "license3"]

// function to write README file
function writeToFile(data) {
    fs.writeFile("README.md", generate(data))
};


// function to initialize program
function init() {
    inquirer.prompt([
        {
            type: "input",
            message: questions[0],
            name: "title"
        },
        {
            type: "input",
            message: questions[1],
            name: "description"
        }, {
            type: "input",
            message: questions[2],
            name: "installation"
        }, {
            type: "input",
            message: questions[3],
            name: "contributors"
        }, {
            type: "input",
            message: questions[4],
            name: "test"
        }, {
            type: "input",
            message: questions[5],
            name: "instructions"
        }, {
            type: "checkbox",
            message: "What type of license does this have?",
            choices: license,
            name: "license"
        },


    ]).then(function(data){
        console.log(data)
    })
        
}

// function call to initialize program
init();

