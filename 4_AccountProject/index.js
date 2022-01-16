const inquirer = require("inquirer");
const fs = require("fs");

console.log("Starting the Account Program!" + "\r");

operations();

function operations(){
    inquirer.prompt([
        {
        type: 'list',
        name: 'action',
        message: 'What do you want to do?',
        choices: [
            'Create Account',
            'Check Balance',
            'Deposit',
            'Withdraw',
            'Exit'],
        },
    ]).then((answer) => {
        const action = answer['action']

        console.log(action);

        if(action === 'Create Account'){
            createAccount();
        }else if (action === 'Deposit') {
            deposit();
        }else if(action === 'Check Balance'){
            getAccountBalance();
        }else if(action === 'Withdraw'){
            withdraw();
        }else if (action === 'Exit') {
            console.log('Thanks to use the Accounts!')
            process.exit();
        }
    })
    .catch(err => console.log(err));
}

function createAccount(){
    console.log("Congratulations on choosing our bank!");
    console.log("Set your account options!");

    buildAccount();
}
function buildAccount(){
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Enter a name for your account:',
        },
    ]).then((answer) => {
        const accountName = answer['accountName'];
        console.info(answer['accountName']);

        if (!fs.existsSync('Accounts')) {
            fs.mkdirSync('Accounts');
        }
        if (fs.existsSync(`Accounts/${accountName}.json`)) {
            console.log('This account already exists, choose another name!');       
            buildAccount(accountName);
            return;
        }

        fs.writeFileSync(`Accounts/${accountName}.json`, '{"balance":0}',
            function (err) {
              console.log(err)
            },
        );

        console.log("Congratulations! Your account has been created.");
    })
    .catch(err => console.log(err));
}

function deposit(){
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'What is your account name?',
        }
    ]).then((answer) => {
        const accountName = answer['accountName'];

        if(!checkAccount(accountName)){
            return deposit();
        }

        inquirer.prompt([{
            name: 'amount',
            message: 'How much do you want to deposit?',
        },
        ]).then((answer) => {
            const amount = answer['amount'];

            addAmount(accountName, amount);
            operations();
        })
        .catch(err => console.log(err));

    }).catch(err => console.log(err));
}

function addAmount(accountName, amount){
    const accountData = getAccount(accountName);

    if(!amount){
        console.log("An error occurred, please try again later!");
        return deposit();
    }else{
        accountData.balance = parseFloat(amount) + parseFloat(accountData.balance);
        
        fs.writeFileSync(
            `accounts/${accountName}.json`,
            JSON.stringify(accountData), // Convert JSON to text
            function(err) {
              console.log(err)
            },
        )
        console.log(`The amount of $${amount} has been deposited in your account!`);
    }

    console.log(accountData);
}

function getAccount(accountName){
    const accountJson = fs.readFileSync(`Accounts/${accountName}.json`, {
        encoding: 'utf8',
        flag: 'r'
    });
    return JSON.parse(accountJson);
}

function checkAccount(accountName){
    if(!fs.existsSync(`Accounts/${accountName}.json`)){
        console.log("This account does not exist, choose another name!");
        return false;
    }else{
        return true;
    }
}

function getAccountBalance(){
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'What is your account name?',
        },
    ]).then((answer) => {
        const accountName = answer['accountName'];

        if(!checkAccount(accountName)){
            return getAccountBalance();
        }else{
            const accountData = getAccount(accountName);
            
            console.log(`Hi, your account balance is $${accountData.balance}!`);

            operations();
        }
    })
    .catch(err => console.log(err));
}

function withdraw(){
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'What is your account name?',
        },
    ]).then((answer) => {
        const accountName = answer['accountName'];

        if(!checkAccount(accountName)){
            return withdraw();
        }else{
            inquirer.prompt([
            {
                name: 'amount',
                message: 'How much do you want to withdraw?',
            },
            ]).then((answer) => {
                const amount = answer['amount']

                removeAmount(accountName, amount);
            })
            .catch(err => console.log(err));
        }
    })
    .catch(err => console.log(err));
}

function removeAmount(accountName, amount){
    const accountData = getAccount(accountName);
    if(!amount){
        console.log("An error occurred, please try again later!");
        return operations();
    }
    if( accountData.balance < amount){
        console.log("Value unavailable!");
        return operations();
    }
    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount);

    fs.writeFileSync(`Accounts/${accountName}.json`),
    JSON.stringify(accountData),
    function(err){
        console.log(err);
    }

    console.log(`A withdrawal of $${amount} has been made from your account!`);
    console.log(`You balance is: $${accountData.balance}`);

    return operations();
}