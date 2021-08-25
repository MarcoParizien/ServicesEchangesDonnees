const theName = 'Marco';
let age = 25;

console.log(theName);

//theName = 'Roberto';
age++;
console.log(age);

const test = true + 1; 
const test2 = false + '9'; 

console.log(test2);

console.log(('b'+'a'+ + 'a'+'a'));

function displayUser(name, age) {
    //console.log('Je mapplle ' + name + ' et jai ' + age + " ans");
    console.log(`Bonjour mon nom est ${name}, j'ai ${age} ans`);
}

displayUser('Roberto', 69);


//Collections, tableau, list

const fruits = ['Kiwi', 'Banane','Fraise', 'Pamplemousse', 'Mangue'];

console.log(fruits);

for(let fruit of fruits){
    console.log(fruit);
}

fruits.forEach(f => console.log(f));

const sum = (a,b) => a + b; 
const result = sum(2,5);
console.log(result);

const someFruits = fruits.filter(f => f.length > 5 );
console.log(someFruits);

const numbers = [10,20,30,40];
const MULTIPLIER = 3;

const products = numbers.map(n => n * MULTIPLIER).filter(n => n > 75).map(n=> n + 9);
console.log(products);
console.log(numbers);

numbers.push(50);
console.log(numbers);

const avenger = {
    alterEgo: 'Tony Stark',
    hero:'Iron Man',
    movies:[{title:'123'},{title:'1234'},{title:'789'}]
}

console.log(avenger.alterEgo);
console.log(avenger.movies.forEach(m => console.log(m.title)));

if(1 != '1'){

}










