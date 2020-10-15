// function to generate markdown for README
function generateMarkdown(data) {
  console.log("In generate: " + data);
  return `# ${data.title}

  ## Description
  ${data.description}
  ## Table of Contents
  * Installation
  * Contributors
  * Test
  * Instructions
  * License
  
  ## Installation
  ${data.installation}

  ## Contributors
  ${data.contributors}

  ## Test
  ${data.test}

  ## Instructions
  ${data.instructions}

  ## License
  ${data.license}

`;
}

module.exports = generateMarkdown
