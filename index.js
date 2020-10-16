const inquirer = require("inquirer");
const generateMarkdown = require("./develop/utils/generateMarkdown");
const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
// array of questions for user
const questions = ["What is the title of this project?", "What does this project do?", "What is the installation instructions?  Any needed dependencies?", "Who contributed to this project", "What are the instructions to test this project?", "How is this to be used?"
];

const license = ["Apache-License-2.0", "BSD-3-Clause", "BSD-2-Clause", "GNU-General-Public-License-(GPL)", "GNU-Library-General-Public License-(LGPL)", "MIT-license", "Mozilla-Public-License-2.0", "Common-Development-and-Distribution-License", "Eclipse-Public-Licenseversion-2.0"]

// function to write README file
// function writeToFile(data) {
//     fs.writeFile("README.md", generate(data))
// };


// function to initialize program
async function init() {
  try {
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
            type: "list",
            message: "What type of license does this have?",
            choices: license,
            name: "license"
        }

    ]);  console.log(data)
    // writeToFile("README2", generateMarkdown(data))
    writeFile("README2.md", generateMarkdown(data))

  } catch (err){
      console.log(err)
  }

}

// function call to initialize program
init();
