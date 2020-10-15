const inquirer = require("inquirer");
const generateMarkdown = require("./develop/utils/generateMarkdown");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
// array of questions for user
const questions = ["What is the title of this project?", "What does this project do?", "What are the installation instructions?", "Who contributed to this project", "What are the test instructions?", "How is this to be used?"
];

const license = ["license1", "license2", "license3"]

// function to write README file
// function writeToFile(data) {
//     fs.writeFile("README.md", generate(data))
// };


// function to initialize program
async function init() {
   const data = await inquirer.prompt([
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


    ])
        console.log(data)
        // writeToFile("README2", generateMarkdown(data))
        writeFileAsync("README2.md", generateMarkdown(data))
}

// function call to initialize program
init();
