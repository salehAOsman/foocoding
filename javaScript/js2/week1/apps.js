//1.1 Open the apps.js and start by declaring an array that contains 10 strings.
let myArr = [
    'Anna_Karenina',
    'Madame_Bovary',
    'War_and_Peace',
    'The_Great_Gatsby',
    'Lolita',
    'Middlemarch',
    'The_Adventures',
    ' Moby_Dick',
    'Hamlet',
    'Don_Quixote'
];

function myFun(myArr) {
    let i = 0;
    let ul = document.createElement('ol');
    document.getElementById('BooksList').appendChild(ul);

    for (i = 0; i < myArr.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML += myArr[i];
        //1.3 Remove the temporary console.log from step 1.1. 
        // console.log(i + ". " + element);
    }
}//end
myFun(myArr);

//1.4 Make an object (not an array!) containing information for each book. 
function Book(title, language, author)
{
    this.title = title;
    this.language = language;
    this.author = author;
}


let book1 = new Book(myArr[0],'lang1','auth1');

let b1 = document.createElement('div');

b1.setAttribute('id',myArr[0]);

document.body.appendChild(b1);

b1.innerHTML = book1.title.replace('_',' ');

