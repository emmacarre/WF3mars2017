var user = 'Emmanuelle Carre'; 

// Créer une variable de type ARRAY (tableau)
var myArray = ['Du texte', 1984, true, user];

// Afficher le tableau dans la console
console.log(myArray); 

// Afficher la taille du tableau (nombre d'index)
console.log( 'La taille du tableau est : ' + myArray.length ); 

// Afficher un des index du tableau
console.log( myArray[0] ); // =>'Du texte'
console.log( myArray[2]); // => true

// Ajouter un index dans le tableau
myArray.push( 'Une valeur en plus'); 
console.log( myArray ); 

// Supprimer et remplacer des index du tableau
myArray.splice(2, 1, false); //supprime à partir de l'index 2 1 valeur 
console.log( myArray ); 


