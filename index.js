// TODO: Include packages needed for this application
const inquirer = require('inquirer')

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
		message: 'What licenses are used?',
		name: 'licenses',
	},
	
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
