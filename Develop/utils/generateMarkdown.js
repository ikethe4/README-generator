// function to generate markdown for README
function generateMarkdown(data) {
  console.log("In generate: " + data);
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
