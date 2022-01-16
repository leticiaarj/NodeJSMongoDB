const inquirer = require('inquirer')
const chalk  = require('chalk')

inquirer
.prompt([{
    name: 'name', 
    message: 'Whats is your name?'
},
{
    name: 'age',
    message: 'How old are you?'
},
]).then((answers => {
    const response= `The name is ${answers.name} The age is ${answers.age}`

    console.log(chalk.bgYellow.black(response));
})) 
.catch(err => console.log(err))
