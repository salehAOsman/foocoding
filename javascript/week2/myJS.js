console.log("Hello World!"); //1.
console.log("Ciao, mondo!");
console.log("Hej Världen!"); 
console.log("Bonjour le monde");
console.log('I\'m awesum');//2. use / it means the next char is a string 

let x;//3.
console.log("the value of my variable x will be: whateverYouThinkItWillLog");
console.log(x);
x = 100;
console.log("the value of my variable x will be: whateverYouThinkItWillLog");
console.log(x);

let y = "This is a string";//4.
console.log("the value of my string will be: whateverYouThinkItWillLog");
console.log(y);
y = "This is a new string";
console.log("the value of my string will be: whateverYouThinkItWillLog");
console.log(y);

let z = 7.25;//5.
console.log(z);
let a = Math.round(z);
console.log(a);
if (a > z) { let comp = a; }
else {  let comp = z; }
console.log(comp);

let myArray = [];//6. Arrays
console.log("My favorite animals");
console.log(myArray);
let zoo = ["Cat", "Hours", "Dog", "Fish", "Bird"];
console.log(zoo);
zoo.push("baby pig");
console.log(zoo);


let myString = "This is a test";//7. strings
console.log(myString);
console.log("My String length is " + myString.length);

let foo = 10;//8.
console.log("The value of my variable foo is: " + foo);
let boo = "string";
console.log("The value of my variable boo is: " + boo);
if (foo === boo) { 
    console.log("SAME TYPE");
}
else {
    console.log("NOT SAME TYPE");
}

let x = 7;//9. 
x %= 3; //getting remaind of x / 3
console.log(x);
console.log(10 % 2); // 0
console.log(10 % 3); // 1
console.log(10 % 4); // 2
console.log(10 % 5); // 0
console.log(10 % 6); // 4

var items = [["Milk", 20], ["Bread", 7], ["Apple", 28], ["Chips", 72]];//10.
console.log("My items include " + items[0][1] + " boxes of " + items[0][0] + ".");
