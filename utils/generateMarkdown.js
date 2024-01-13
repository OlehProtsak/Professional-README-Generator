// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} License - see the [LICENSE.md](LICENSE.md) file for details.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For questions or concerns related to this project, please contact ${data.username} at ${data.email}.
`;
}

module.exports = generateMarkdown;
