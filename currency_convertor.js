import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.bgMagenta("!!!!!!**WELCOME TO HAMMII CURRENCY CONVERTOR**!!!!!!"));
const currency = {
    USD: 1,
    EUR: 0.91,
    AUD: 1.52,
    PKR: 277.54,
    INR: 74.57,
    BDT: 109.60,
    KWD: 0.31,
    NZD: 1.66,
    NPR: 133.08,
    MAD: 10.06,
    EGP: 47.33,
    IRR: 42075.00,
    AFN: 71.23,
    IQD: 1308.17,
    IDR: 15887.75,
    HKD: 7.83,
    MXN: 16.45,
    OMR: 0.38,
    SAR: 3.75,
    RSD: 108.13,
    SGD: 1.35,
    TRY: 32.03,
};
let userSelection = await inquirer.prompt([
    {
        name: "From",
        message: "Select Your Currency Which You Want TO Convert",
        type: "list",
        choices: ["USD", "EUR", "AUD", "PKR", "INR", "BDT", "KWD", "NZD", "NPR", "MAD", "EGP", "IRR", "AFN", "IQD",
            "IDR", "HKD", "MXN", "OMR", "SAR", "RSD", "SGD", "TRY"]
    },
    {
        name: "To",
        message: "Select The Currency In which You Want to Covert",
        type: "list",
        choices: ["USD", "EUR", "AUD", "PKR", "INR", "BDT", "KWD", "NZD", "NPR", "MAD", "EGP", "IRR", "AFN", "IQD",
            "IDR", "HKD", "MXN", "OMR", "SAR", "RSD", "SGD", "TRY"]
    },
    {
        name: "Amount",
        message: "How Much Amount You Want TO Convert",
        type: "number",
    }
]);
let fromList = currency[userSelection.From];
let toList = currency[userSelection.To];
let amount = userSelection.Amount;
let basicAmount = amount / fromList;
let covertedAmount = basicAmount * toList;
Math.round(covertedAmount);
console.log(chalk.bgYellow(covertedAmount));
console.log(chalk.bgWhite("\n**********"));
