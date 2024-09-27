// Iteration 1: Names and Input
const hacker1 = "Pepe";
const hacker2 = "Paco"

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if ( hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else if (hacker1.length = hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters`);
}

// Iteration 3: Loops

// nombre mayusculas y espacios
const uppercaseName = hacker1.toUpperCase();


let upperName = "";
for ( let i = 0; i < uppercaseName.length; i++){
    const letter = uppercaseName[i];
    upperName += letter + " ";
}

console.log(upperName);



// nombre al revés

let nameBackwards = "";

for ( let i = hacker1.length - 1; i >= 0; i-- ) {
    const char = hacker1[i];
    nameBackwards += char;
    
}
console.log(nameBackwards);

// 3.3 no se platearlo.



// bonus
const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet metus vitae odio sagittis pharetra at ac diam. Vivamus a efficitur magna, et dapibus ipsum. Nullam euismod sapien bibendum leo congue volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent non tellus pulvinar, ultricies nulla et, feugiat sapien. Ut dapibus venenatis rutrum. Ut luctus sem massa, sit amet dignissim tortor vestibulum aliquet. Donec maximus sapien eget nibh varius, eu posuere risus bibendum. Aliquam dapibus aliquam lorem, et varius neque fermentum eget.

Phasellus cursus, felis sed condimentum lobortis, leo risus hendrerit diam, molestie efficitur mauris lacus ut dui. Aenean sagittis nisl consequat condimentum dapibus. Cras eu felis tristique, cursus velit sollicitudin, congue turpis. Nulla sit amet dolor lacus. Quisque interdum vitae ligula id semper. Duis pulvinar eget urna in imperdiet. Mauris lacus tortor, sagittis in libero ut, posuere pretium elit. Donec feugiat ex tortor, non fringilla ante pulvinar ut.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae dui pharetra, mollis ante dictum, dignissim felis. Fusce mollis justo eu ante ultricies condimentum. Nunc fringilla fermentum risus, vitae imperdiet tortor maximus eget. Nulla ullamcorper non turpis id maximus. Sed ultricies eros non tincidunt pulvinar. Ut ex mi, pulvinar et nisl vel, sagittis consectetur dui."

