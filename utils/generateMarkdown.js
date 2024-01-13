// function to generate markdown for README
function generateMarkdown({
  title,
  description,
  installation,
  usage,
  license,
  contributing,
  test,
  userName,
  email,
  tableOfContents,
}) {
  let result = "";

  for (let i = 0; i < tableOfContents.length; i++) {
    result += `- [${tableOfContents[i]}](#${tableOfContents[i]})\n`;
  }

  const githubLink = userName
    ? `[${userName}](https://github.com/${userName})`
    : "N/A";
  const contactInfo = email
    ? `For additional questions, contact ${userName} at ${email}.`
    : "N/A";
  const testsSection = test
    ? `\`\`\`
    ${test}
    \`\`\``
    : "No testing instructions provided.";

  return `# ${title}

## Description
${description}

## Table of Contents
${result}

## Installation
${installation}

## Usage
${usage}

## License
This project is licensed under the ${license} License - see the [LICENSE.md](LICENSE.md) file for details.

## Contributing
${contributing}

## Tests
${testsSection}

## Questions
- GitHub Profile: ${githubLink}
- Contact: ${contactInfo}
`;
}

module.exports = generateMarkdown;
