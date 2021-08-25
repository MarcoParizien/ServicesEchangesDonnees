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