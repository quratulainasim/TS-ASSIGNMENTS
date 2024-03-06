//TASK# 1

console.log("Hello world!");

//TASK# 2
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”


let personName:string="Eric";
console.log(`"Hello ${personName},would you like to learn some python today"?`);

//TASK# 3
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


let personName:string="Quratulain";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.charAt(0).toLocaleUpperCase()+personName.slice(1).toLowerCase());

//TASK# 4
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”


console.log('Albert Einstein once said,“A person who never made a mistake never tried anything new.”');

//TASK# 5
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_person: string="Albert Einstein";
let message: string=`${famous_person} once said,"A person who never made a mistake never tried anyting new."`;
console.log(message);

//TASK# 6
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
 
let personName: string= "\t\n      Quratulain     \t\n";
console.log(personName);
console.log(personName.trim());

//TASK# 7
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

 console.log(4+4);
 console.log(10-2);
 console.log(4*2);
 console.log(16/2);

 //TASK# 8
 //You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.

console.log(5+3);
console.log(5+3);
console.log(5+3);
console.log(5+3);

//TASK# 9
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let favoriteNumber:number= 6;
console.log(`My favorite number is ${favoriteNumber}.`);

//TASK# 10
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// Quratulain  6-3-2024
// This programe is a personal message.

let myName:string="Quratulain";
console.log(`${myName},"Are you student of typescript?"`);







    






































