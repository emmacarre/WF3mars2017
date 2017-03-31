// Type SIMPLE

var myNumber = 45; 

// Egalité SIMPLE
/*on vérifie juste la valeur, le contenu, pas le type de variable */

console.log( myNumber == 45); // => true
console.log( myNumber =='45'); // => true

// Inégalité SIMPLE
/*on vérifie si la variable myNumber est inégale à 45 */

console.log( myNumber!=45 ); // => false
console.log( myNumber!= '45'); // => false
console.log( myNumber != 12); // => true 
console.log( myNumber !="12"); // => true 


// Egalité STRICTE : vérifier la valeur ET le type de la variable

console.log( myNumber === 45); //=> true
console.log( myNumber ==='45'); //=> false
console.log( myNumber === 12); //=> false


// Inégalité STRICTE : vérifier la valeur ET le type de la variable

console.log( myNumber!== 45); //=> false
console.log( myNumber !== '45'); //=> true


// Supérieur/inférieur
console.log( myNumber > 46 ); //=> false
console.log ( myNumber < 46); // => true


//  Supérieur ou égal / inférieur ou égal 
console.log( myNumber >= 12 ); //=> true 
console.log( myNumber <= 12 ); // => false

console.log( myNumber >= 45); // true
console.log(myNumber <= 45); // true