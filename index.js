// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./generateMarkdown.js')

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
		type: 'list',
		message: 'Which license would you like to use? (use arrows to navigate and enter to choose)',
		name: 'license',
		choices: [
			'MIT License: https://opensource.org/licenses/MIT',
			'ZLIB License: https://opensource.org/licenses/Zlib',
			'Mozilla License: https://opensource.org/licenses/MPL-2.0',
		]
	},
	{
		type: 'input',
		message: 'Place application tests here!',
		name: 'tests',
	},
	{
		type: 'input',
		message: 'Provide contact info for any questions',
		name: 'questions',
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
				tests,				
				questions,
			}) => {
const templateREADME = `# Project Title 
${title}

## Description  
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
For any questions contact me here: ${questions}`;

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
