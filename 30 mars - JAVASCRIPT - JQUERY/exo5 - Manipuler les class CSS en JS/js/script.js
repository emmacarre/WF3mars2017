// Sélectionner la balise h1
var myTitle = document.querySelector('h1');

//  Ajouter une class à la balise h1
myTitle.classList.add('error'); 

// Sélectionner la dernière balise p
var myLastP = document.querySelector('p:last-of-type'); 
console.log(myLastP); 

// Supprimer la class hidden 
myLastP.classList.remove('hidden'); 

// Sélectionner la balise button
var myButton = document.querySelector('button'); 

// Sélectionner la 1ère balise h2
var myFirstH2 = document.querySelector('h2'); 

// Capter le clic sur le bouton
myButton.onclick = function(){ //fonction de callback du click

    console.log('Clique sur le bouton'); //quand je clique sur le bouton, j'exécute un code

    // Ajouter ou supprimer la class move sur la 1ère balise h2
    myFirstH2.classList.toggle('move'); 

}; 