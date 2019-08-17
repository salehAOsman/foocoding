
//1. Strings!
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log("length of my string is equals: " + myString.length);
let newStr = myString.replace(/,/g, ' ');//by using regular expression, 'g'--> means in every place
console.log(newStr);

//2. Arrays!
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
console.log(favoriteAnimals);
favoriteAnimals.push("turtle");//2.1 
console.log(favoriteAnimals);
let keepFirst = favoriteAnimals.shift();
console.log(keepFirst);
console.log(favoriteAnimals);
favoriteAnimals.unshift("meerkat");//2.3 
console.log(favoriteAnimals);
favoriteAnimals.unshift(keepFirst);
//2.4 Write a console.log statement that explains in words you think the new value of the array is.
console.log("the new value of the array is [ blowfish, meerkat, capricorn, giraffe, turtle ] .");
console.log(favoriteAnimals);//2.5 
console.log('The array has a length of: ' + favoriteAnimals.length);//2.6

//2.7
let keepLast = favoriteAnimals.pop();
console.log(keepLast);
console.log(favoriteAnimals);
favoriteAnimals.pop();//delete "giraffe"
favoriteAnimals.push(keepLast);
console.log(favoriteAnimals);//2.8
//2.9
let index = favoriteAnimals.indexOf("meerkat");
console.log('The item \"' + favoriteAnimals[index] + '\" ' + ' you are looking for is at index: ' + index);
//More JavaScript
//1.
function sum(a, b, c) {
    return a + b + c;
}
let result = sum(1, 2, 3);
console.log(result);
//2.
function colorCar(a) {
    return 'a ' + a + ' car';
}
let color = colorCar("green");
console.log("color  --> " + color);
//3.
const person = {
    name: 'Samer',
    lastName: 'Karlsson',
    age: 27
};
function myInfo(p) {
    console.log('Display object\n' + 'Name is ' + p.name + ",\nLast Name is " + p.lastName + ",\nAge is " + p.age + "\n");
}
myInfo(person);

//4.
function vehicleType(color, num) {
    let c = 'a ' + color;
    if (num == 1) {
        console.log(c + ' car');
    } else if (num == 2) {
        console.log(c + ' motorbike');
    }
}
vehicleType('blue', 1); vehicleType('red', 2); vehicleType('blue', 3);

//5.
console.log();
console.log(3 === 3 ? 'yes' : 'no');

//6.
function vehicle(color, num, age) {
    if (age === 5) {
        let c = 'a ' + color + ' used ';
        if (num == 1) {
            console.log(c + 'car');
        } else if (num == 2) {
            console.log(c + 'motorbike');
        }
    }
}
vehicle('blue', 1, 5); vehicle('red', 2, 5); vehicle('blue', 2, 6);
//7.
let listVehicles = ['motorbike', 'caravan', 'bike', 'car'];
//8. I get the third or any element from that list by the index of this element in this list that equals index =(order -1), order=3
console.log(listVehicles[3 - 1]);//third element
//9.
function vehicleChange(color, order, age) {
    if (order <= listVehicles.length + 1) {
        let c = 'a ' + color;
        if (age === 1) {
            c += ' new ';
        } else if (age > 1) {
            c += ' used ';
        }
        console.log(c + listVehicles[order - 1]);
    }
}
vehicleChange('green', 3, 1); vehicle('red', 2, 1); vehicle('blue', 2, 5); vehicle('blue', 2, 6);

//10. 
function advertisement() {
    if (listVehicles.length > 0) {//check the list if it is not empty
        let str = 'Amazing Joe\'s Garage, we service ';
        let i;
        for (i = 0; i < listVehicles.length; i++) {
            if (i < listVehicles.length - 2) {//add comma after each element except the last two elements
                str += listVehicles[i] + 's, ';
            }
            else if (i < listVehicles.length - 1) {//add for this element (before the last one ) this word 'and' insted of comma
                str += listVehicles[i] + 's and ';
            }
            else {//nothing to add for the last element
                str += listVehicles[i] + 's.';
            }
        }
        console.log(str);
    }
}

advertisement();
//11. yes, I can add new vehicle to my list without change thefunction in q 10. as it is 
listVehicles.push('truck');
advertisement();

//12
const emptyObj = {};
console.log(emptyObj);

//13
const teachers = {
    teacher: ['Nilsson', 'Frida', 'Alberto']
};

//14.
//Add a property to the object you just created that contains the languages that they have taught you.
let language=[];

teachers['language']=['css','html','javascript'];   //adding new property as array that does not existed already 

console.log('Teachers: \n'+teachers.teacher+'\nLanguages: \n'+teachers.language);
//OR by Map then I can pairing betweet each teacher and his modules(languages)
//15.
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
console.log(x == y);
console.log(x === y);
console.log(z == x);
console.log(z == x);
//result will be 'false' because all of them are wrap objects and not primitive types and those refer to different addresses

//16.
let o1 = { foo: "bar" };//No, changing o1 not changes o3
let o2 = { foo: "bar" };//yes, changing o2 changes o3
let o3 = o2;

console.log(o1);
console.log(o2);
console.log(o3+' fgfg');
//17.
let bar = 42;
let str = typeof bar;//typeof bar--> number
typeof typeof bar;
console.log(bar);
console.log(str);//typeof bar--> number
//because of String type Section. JavaScript's String type is used to represent textual data. It is a set of "elements" of 16-bit unsigned integer values. Each element in the String occupies a position in the String.
console.log( typeof str);// typeof typeof bar--> string