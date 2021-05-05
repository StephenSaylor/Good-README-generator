// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
	{
		type: 'input',
		message: 'What is your project title?',
		name: 'title',
	},
	{
		type: 'input',
		message: 'Would you please describe your project?',
		name: 'description',
	},
	{
		type: 'input',
		message: 'What are the installation instructions?',
		name: 'installation',
	},
	{
		type: 'input',
		message: 'How is this project to be used?',
		name: 'usage',
	},
	{
		type: 'input',
		message: 'What is your GitHub username?',
		name: 'username',
	},
	{
		type: 'input',
		message: 'What license is used?',
		name: 'license',
	},
	{
		type: 'input',
		message: 'Place application tests here!',
		name: 'tests',
	}
	
];

const askQuestions = (questions) => {
	inquirer	
		.prompt(questions)
		.then(
			({
				title,
				description,
				installation,
				usage,
				username,
				license,				

			}) => {
const templateREADME = `# Project Title : 
${title}

## Description : 
${description}

## Table of Contents
-[Installation](#installation)
-[Usage](#usage)
-[License](#license)
-[Contributing](#contributing)
-[Test](#test)
-[Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
${license}

## Contributing
${username}

## Tests
${tests}

## Questions
`;

fs.writeFile("README.md", templateREADME, "utf8", (err) =>
err ? console.log(err) : console.log('Success!'))
			}
		)
}

askQuestions(questions)





// // TODO: Create a function to initialize app
// function init() {

// }

// // Function call to initialize app
// init();
