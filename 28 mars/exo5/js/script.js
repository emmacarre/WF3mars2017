// Opérateur d'affectation : = 

var myNumber = 10; 
console.log(myNumber); 


// Opérateur d'incrémentation : ++

myNumber++; 
console.log(myNumber); 


// Opérateur de décrémentation : --
myNumber--;
console.log(myNumber); 


// Opérateur d'addition/concaténation : +
var myAdd = 7 + 5; 
console.log(myAdd); 

var myConc = 'Salut ' + 'mon ' + 'pote'; 
console.log(myConc); 


// Opérateur de soustraction : -
var mySous = 7 - 5; 
console.log(mySous); 

// Opérateur de multiplication : *
var myMult = 7 * 5;
console.log(myMult); 

// Opérateur de division : /
var myDivi = 14 / 3;
console.log(myDivi); 

// Opérateur modulo : %
var myModulo = 12 % 5;
console.log(myModulo); 

// Opérateur  d'addtion et d'affectation : +=
var a = 10;
var b = 5;

a+=b; 
//  A ce niveau là, la var a est modifiée dans le temps et vaut 15
// Equivalent de a = a + b 
console.log(a); 

// Opérateur de soustraction et d'affectation : -=
b-=a;
// A ce niveau-là, la var b vaut 5 - 15 (la nouvelle valeur de la var a), donc -10
console.log(b); 