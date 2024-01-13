const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const questions = require("./utils/questions");
const generateMarkdown = require("./utils/generateMarkdown");

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : true;
  });
}
// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      writeToFile(
        path.join(__dirname, "output", "README.md"),
        generateMarkdown(answers)
      );
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
      } else {
        console.log(error);
      }
    });
}

// function call to initialize program
init();
