// function to generate markdown for README
function generateMarkdown(data) {
  // console.log("In generate: " + data);
  return `# ${data.title}

  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Contributors](#contributors)
  * [Test](#test)
  * [Instructions](#test)
  * [License](#license)
  
  ## Installation
  ${data.installation}

  ## Contributors
  [${data.contributors}](https://github.com/${data.contributors})

  ## Test
  ${data.test}

  ## Instructions
  ${data.instructions}

  ## License
  ![license](https://badgen.net/badge/:license/:${data.license}/:color?icon=github)

`;
}

module.exports = generateMarkdown
