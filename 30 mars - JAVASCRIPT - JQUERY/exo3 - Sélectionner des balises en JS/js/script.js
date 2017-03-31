// Sélecteur de balises HTML (tag)
var myParaTag = document.getElementsByTagName('p'); 
console.log( myParaTag ); 

// Sélecteur de class 
myClass = document.getElementsByClassName('myClass'); 
console.log( myClass ); 

// Sélecteur d'id
var myId = document.getElementById('myId');
console.log( myId ); 

// Sélecteur querySelector
//ne prend que la 1ère balise en question du DOM
console.log(document.querySelector('p')); 

// Sélecteur querySelectorAll
//va prendre toutes les classes 
console.log(document.querySelectorAll('.myClass')); 