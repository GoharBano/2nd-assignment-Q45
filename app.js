"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 14.Guest List
let guests = ["Albert Einstein", "Marie Curie", "Isaac Newton"];
guests.forEach(guest => console.log(`Dear ${guest}, you are invited to dinner!`));
// Changing Guest List
let cannotAttend = guests.splice(1, 1)[0];
guests.push("Galileo Galilei");
guests.forEach(guest => console.log(`Dear ${guest}, you are invited to dinner!`));
console.log(`${cannotAttend} can't make it to the dinner.`);
// More Guests
console.log("We found a bigger dinner table!");
guests.unshift("Nikola Tesla");
guests.splice(2, 0, "Ada Lovelace");
guests.push("Leonardo da Vinci");
guests.forEach(guest => console.log(`Dear ${guest}, you are invited to dinner!`));
// Shrinking Guest List
console.log("We can invite only two guests for dinner.");
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
guests.forEach(guest => console.log(`Dear ${guest}, you are still invited to dinner.`));
console.log(guests);
// Seeing the World
let placesToVisit = ["Paris", "Tokyo", "Rome", "Sydney", "Rio de Janeiro"];
console.log("Original order:");
console.log(placesToVisit);
console.log("\nAlphabetical order:");
console.log(placesToVisit.slice().sort());
console.log("\nOriginal order:");
console.log(placesToVisit);
console.log("\nReverse alphabetical order:");
console.log(placesToVisit.slice().sort().reverse());
console.log("\nOriginal order:");
console.log(placesToVisit);
console.log("\nReversed order:");
console.log(placesToVisit.reverse());
console.log("\nReversed order again:");
console.log(placesToVisit.reverse());
console.log("\nSorted order:");
console.log(placesToVisit.sort());
console.log("\nSorted in reverse order:");
console.log(placesToVisit.sort().reverse());
// Dinner Guests
console.log("Number of people invited to dinner:", guests.length);
// Array
let mountains = ["Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];
console.log("Mountains I'd like to climb:", mountains);
// TypeScript Object
let favoriteThings = {
    mountain: "Everest",
    river: "Nile",
    country: "Switzerland",
    language: "French"
};
console.log("My favorite things:", favoriteThings);
// Intentional Error
// Accessing index out of range
try {
    console.log(mountains[5]);
}
catch (error) {
    console.error(error);
}
// Conditional Tests
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
console.log("Is car == 'audi'? I predict False.");
console.log(car == 'audi');
console.log("Is car != 'audi'? I predict True.");
console.log(car != 'audi');
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru');
console.log("Is car.toLowerCase() == 'audi'? I predict False.");
console.log(car.toLowerCase() == 'audi');
console.log("Is car == 'subaru' and car.toLowerCase() == 'subaru'? I predict True.");
console.log(car == 'subaru' && car.toLowerCase() == 'subaru');
console.log("Is car == 'subaru' or car == 'audi'? I predict True.");
console.log(car == 'subaru' || car == 'audi');
// More Conditional Tests
// Tests for equality and inequality with strings
console.log("Is 'apple' == 'apple'? I predict True.");
console.log('apple' == 'apple');
console.log("Is 'apple' == 'banana'? I predict False.");
console.log("'apple' == 'banana'");
// Tests using the lower case function
console.log("Is 'Apple'.toLowerCase() == 'apple'? I predict True.");
console.log('Apple'.toLowerCase() == 'apple');
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is 10 > 5? I predict True.");
console.log(10 > 5);
console.log("Is 5 < 3? I predict False.");
console.log(5 < 3);
console.log("Is 7 >= 7? I predict True.");
console.log(7 >= 7);
console.log("Is 6 <= 4? I predict False.");
console.log(6 <= 4);
// Tests using "and" and "or" operators
console.log("Is (10 > 5) && (5 < 3)? I predict False.");
console.log((10 > 5) && (5 < 3));
console.log("Is (10 > 5) || (5 < 3)? I predict True.");
console.log((10 > 5) || (5 < 3));
// Test whether an item is in an array
let fruits = ["apple", "banana", "orange"];
console.log("Is 'banana' in fruits? I predict True.");
console.log(fruits.includes("banana"));
console.log("Is 'grape' in fruits? I predict False.");
console.log(fruits.includes("grape"));
// Test whether an item is not in an array
console.log("Is 'grape' not in fruits? I predict True.");
console.log(!fruits.includes("grape"));
console.log("Is 'banana' not in fruits? I predict False.");
console.log(!fruits.includes("banana"));
// Alien Colors #1
let alienColor = 'green';
if (alienColor === 'green') {
    console.log("You just earned 5 points for shooting the alien.");
}
// Alien Colors #2
if (alienColor === 'green') {
    console.log("You just earned 5 points for shooting the alien.");
}
else {
    console.log("You just earned 10 points.");
}
// Alien Colors #3
if (alienColor === 'green') {
    console.log("You earned 5 points.");
}
else if (alienColor === 'yellow') {
    console.log("You earned 10 points.");
}
else if (alienColor === 'red') {
    console.log("You earned 15 points.");
}
// Stages of Life
let age = 25;
if (age < 2) {
    console.log("This person is a baby.");
}
else if (age < 4) {
    console.log("This person is a toddler.");
}
else if (age < 13) {
    console.log("This person is a kid.");
}
else if (age < 20) {
    console.log("This person is a teenager.");
}
else if (age < 65) {
    console.log("This person is an adult.");
}
else {
    console.log("This person is an elder.");
}
// Favorite Fruit
let favoriteFruits = ["banana", "apple", "mango"];
if (favoriteFruits.includes("banana")) {
    console.log("You really like bananas!");
}
if (favoriteFruits.includes("orange")) {
    console.log("You really like oranges!");
}
if (favoriteFruits.includes("apple")) {
    console.log("You really like apples!");
}
// Hello Admin
let usernames = ["admin", "eric", "john", "alice", "sarah"];
for (let username of usernames)
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
// No Users
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (let username of usernames) {
        console.log(`Hello ${username}`);
    }
}
// Checking Usernames
let currentUsers = ["admin", "eric", "john", "alice", "sarah"];
let newUsers = ["Alice", "sarah", "mike", "julia", "kate"];
for (let newUser of newUsers) {
    if (currentUsers.map(user => user.toLowerCase()).includes(newUser.toLowerCase())) {
        console.log(`Sorry, ${newUser}, that username is already taken. Please choose a new one.`);
    }
    else {
        console.log(`Congratulations, ${newUser}, your username is available!`);
    }
}
// Ordinal Numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
    let ordinal = "";
    switch (number) {
        case 1:
            ordinal = "st";
            break;
        case 2:
            ordinal = "nd";
            break;
        case 3:
            ordinal = "rd";
            break;
        default:
            ordinal = "th";
    }
    console.log(`${number}${ordinal}`);
}
// Pizzas
let favoritePizzas = ["Pepperoni", "Margherita", "Vegetarian"];
for (let pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}
console.log("I really love pizza!");
// Animals
let animals = ["dog", "cat", "rabbit"];
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}
console.log("Any of these animals would make a great pet!");
// T-Shirt
function makeShirt1(size, message) {
    console.log(`A ${size} sized shirt will be printed with the message: '${message}'.`);
}
makeShirt("Large", "I love TypeScript");
makeShirt("Medium", "Hello, world!");
// Large Shirts
function makeShirt(size = "Large", message = "I love TypeScript") {
    console.log(`A ${size} sized shirt will be printed with the message: '${message}'.`);
}
makeShirt();
makeShirt("Medium");
makeShirt("Small", "Keep calm and code on");
// Cities
function describeCity(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describeCity("Karachi");
describeCity("Lahore");
describeCity("New York", "USA");
// City Names
function cityCountry(city, country) {
    return `${city}, ${country}`;
}
console.log(cityCountry("Lahore", "Pakistan"));
console.log(cityCountry("Paris", "France"));
console.log(cityCountry("Tokyo", "Japan"));
function makeAlbum(artist, title, tracks) {
    let album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = makeAlbum("Ed Sheeran", "Divide", 12);
let album2 = makeAlbum("Taylor Swift", "1989");
let album3 = makeAlbum("Beyonce", "Lemonade", 15);
console.log(album1);
console.log(album2);
console.log(album3);
// Magicians
function showMagicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
let magicians = ["Harry Houdini", "David Copperfield", "Penn & Teller"];
showMagicians(magicians);
// Great Magicians
function makeGreat(magicians) {
    let greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push("the Great " + magician);
    }
    return greatMagicians;
}
let greatMagicians = makeGreat(magicians.slice());
showMagicians(greatMagicians);
// Unchanged Magicians
let unchangedMagicians = makeGreat(magicians.slice());
showMagicians(magicians);
showMagicians(unchangedMagicians);
// Sandwiches
function orderSandwich(...items) {
    console.log("You ordered a sandwich with the following items:");
    for (let item of items) {
        console.log("- " + item);
    }
}
orderSandwich("lettuce", "tomato", "bacon", "cheddar");
orderSandwich("turkey", "swiss");
orderSandwich("peanut butter", "jelly");
// Cars
function describeCar(manufacturer, model, ...features) {
    let car = {
        manufacturer,
        model
    };
    for (let feature of features) {
        let [key, value] = feature.split(":");
        car[key.trim()] = value.trim();
    }
    console.log(car);
}
describeCar("Toyota", "Camry", "color: Blue", "year: 2023", "sunroof: Yes");
describeCar("Tesla", "Model S", "color: Red", "autopilot: Yes");
