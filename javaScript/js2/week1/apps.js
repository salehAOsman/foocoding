// console.log(Array.from(uniqueObjects));
/*Marco
    Foo
    Cafe
  Osama
    Hello */
const data = {
    books: {
        x1: { title: 'Foo', author: 'Marco', lang: 'english' },
        x2: { title: 'Cafe', author: 'Marco', lang: 'english' },
        x3: { title: 'Hello', author: 'Osama', lang: 'france' },
    }
};
/*
var Vehicle = {
    type: "General",
    display: function(name){console.log(this.type+" --> "+name);}
}
console.log(Vehicle.display("Saleh"));
*/
//let cx = data.map(x => console.log(x) );
console.log("-------------------");
//const booksList = Object.keys(data.books);
/*
Object.entries(data.books).map(obj => {
    //const i= data;
    const key  = obj[0];
    const valu = obj[1];
    //console.log ( key,valu.title );
    console.log ("Author: "+ valu.author);
    console.log(" title: "+ valu.title );
 });
*/

const booksId = Object.keys(data.books);

const booksList = booksId.map(bookId => 
    {
const book = data.books[bookId];
    book.id = bookId;
    return book;
    }
);

const booksAuthors = [];
booksList.forEach(book => {
    if( booksAuthors.includes(book.author) === false ) {
        booksAuthors.push(book.author);
    }
});

//console.log(booksAuthors[0]);
console.log("\tAuthor: \n\t\tID\t\tTitle\t\tLanguage");
console.log("\t\t-------------------------------------------")
booksAuthors.forEach( a => { //iterate authors
    console.log("\t"+a);
    
//TODO create and past to author div as OL list    
booksList.forEach ( book => { //iterate title of books by a condition
        if ( a === book.author ) { //the condition to display book's title
            console.log("\t\t"+book.id+"\t\t"+book.title+"\t\t"+book.lang);
            
            //TODO create and past to title div as OL list  
        } });  
});


/*
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
*/
