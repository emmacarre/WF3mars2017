// Demander à l'utilisateur de choisir une couleur entre rouge, vert et bleu

var userChoice = prompt('choisir une couleur entre rouge, vert ou bleu'); 

// Si userChoice est égal à 'rouge'

if ( userChoice =='rouge' ){ //je donne la condition 
    
    console.log('Rouge se dit Red en anglais'); // si la condition est remplie, je donne le code à exécuter

} else if ( userChoice =='bleu'){ //OU si l'utilisateur donne un autre choix

    console.log('Bleu se dit Blue en anglais'); // si la condition est remplie, je donne le code à exécuter

} else if (userChoice =='vert'){
    console.log('Vert se dit Green en anglais'); 
    
};

