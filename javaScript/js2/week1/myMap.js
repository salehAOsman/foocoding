//create map by Object
/*
let myMap = function () {
    this.collection = {}; //prop as object
    this.count = 0;//prop as number number

    this.size = function () {//prop as function
        return this.count;
    };//size

    this.set = function (key, value) {
        this.collection[key] = value;
        this.count++;
    };//set

    this.has = function (key) {
        return (key in this.collection);
    };//has

    this.get = function (key) {
        return (key in this.collection) ? this.collection[key] : null;
    };//get

    this.delete = function (key) {
        console.log("delete ");
        if (key in this.collection) {
            console.log(this.collection[key]);
            delete this.collection[key];
            this.count--;
        }

    };//delete
    this.values = function () {
        let result = new Array();
        for(let key of Object.keys(this.collection)) {
            result.push(this.collection[key]);
        }
        return (result.length > 0) ? result : null;
    };//values

    this.clear = function () {
        this.collection = {};
        this.count = 0;
    };//clear

};//func myMap

//create map 
let map = new myMap();

map.set('arms', 2);
map.set('fingers', 10);
map.set('eyes', 200);
map.delete('eyes');
console.log(map.values());

map.set('belley button', 1);

console.log(map.get('fingers'));
console.log(map.size());
console.log(map.values());

//using real Map
let map2 = new Map();
map2.has('hands');
map2.entries();

let keyObj = {'name':'Saleh'};
let keyFunc = function(key){
    console.log("----> "+key);
};

map2.set('hello','string value');
map2.set(keyObj,'object value');
map2.set(keyFunc,'function value');
map2.set(NaN,'NaN value');

console.log(map2.size);
console.log(map2.get('hello'));
console.log(map2.get(keyObj));
console.log(map2.get(keyFunc));
console.log(map2.get(NaN));
*/
const obj = {   'name':'Saleh',
                'x':{'t1':7,'t2':8,'t3':9},
                'lastName':'Osman',
                'age':45
};
console.log(Object.keys(obj), Object.values(obj));
console.log("-------------1");
console.log ( Object.values( obj.lastName  ) /*,Object.values( obj.x )*/);
console.log(obj);
const jsonObj =JSON.stringify(obj);//
console.log(jsonObj);
console.log("-------------");
const ob = jsonObj;
console.log(Object.keys(obj.name));
console.log("-------------");
const objec = JSON.parse(jsonObj);
console.log(objec);
