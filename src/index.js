/*import logger from '../tools.js '
logger("Welcome! We are now having fun with modularity");*/



import logger, { appName, dummyFunction } from './tools.js ';
logger("Welcome! The application name is " + appName + ". There is a function that returns " + dummyFunction());

import log, { Person } from './tools.js ';
let person1 = new Person("Pius", "Onobhayedo", "Male", 1.7);
let person2 = new Person("Mary", "Joseph", "Female", undefined);
log(`Person 1 is ${person1.firstName} whose height is ${person1.height}. Person 2 is ${person2.firstName} whose height is ${person2.height}`);

import {
    multiplier
} from './tools.js '

import { grapher } from './tools.js'
// var x = 10;
//var y = 20;

let x = 10;
const y = 20;

console.log(x * y);


/* Spreading operators and destructuring assignments */
const languages = ["Python", "HTML", "Java", "Javascript"]

//const [firstLang, secondLang] = languages;


console.log(languages[1, 2, 3]);
//console.log(firstLang);

//console.log(`The first language is ${firstLang} and the second is ${secondLang}`);


// Spread operators
const [firstLang, secondLang, ...theRest] = languages;

console.log(theRest);

try {
    const product = multiplier(3);
    console.log(product);
} catch (error) {
    console.log(error.message)
}

console.log(grapher(3, 6, 2, 3, 4, 5, 6));

//

const addressees = ['Tobechukwu Ujubuonu', 'Tomilola Adeniran', 'Wesley Took']

addressees.map((addressee) => {
    let message = `Dear ${addressee},
    It is my pleasure to inform you that your admission letter is ready for collection
    x`
    logger(message);
})