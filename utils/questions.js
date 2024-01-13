function isValidEmail(email) {
  // Regular expression for a basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (input) =>
      !input.trim() ? "Please enter name of project" : true,
  },
  {
    type: "input",
    name: "description",
    message: "Can you provide a brief description of your project?",
    dafault: "N/A",
  },
  {
    type: "checkbox",
    name: "tableOfContents",
    message:
      "Do you have any specific sections you would like to include in the Table of Contents?",
    choices: [
      "Introduction",
      "Features",
      "Installation",
      "Usage",
      "License",
      "Contributing",
      "Tests",
      "Questions",
    ],
  },
  {
    type: "input",
    name: "installation",
    message: "How should users install your application?",
    dafault: "N/A",
  },
  {
    type: "input",
    name: "usage",
    message:
      "Can you provide examples or instructions on how to use your project?",
    dafault: "N/A",
  },
  {
    type: "list",
    name: "license",
    message: "What type of license does your project use?",
    choices: [
      "MIT License",
      "GNU General Public License (GPL)",
      "Apache License 2.0",
      "BSD Licenses",
      "Creative Commons Licenses",
      "Mozilla Public License 2.0",
      "ISC License",
      "Unlicense",
    ],
    default: "N/A",
  },
  {
    type: "input",
    name: "contributing",
    message:
      "Are there any guidelines for others who want to contribute to your project?",
  },
  {
    type: "input",
    name: "test",
    message: "How can users run tests for your project, if applicable?",
    dafault: "N/A",
  },
  {
    type: "input",
    name: "email",
    message:
      "Please provide your email address for people who will work with your code to contact you.",
    validate: (input) =>
      !input || isValidEmail(input)
        ? true
        : "Invalid email format. Please provide a valid email address.",
  },
  {
    type: "input",
    name: "userName",
    message:
      "Please provide your GitHub user name for people who will work with your code to contact you.",
  },
];

module.exports = questions;
