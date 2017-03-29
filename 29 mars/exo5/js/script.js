/*

   Créer une fonction qui permet à l'utilisateur de choisir une couleur

*/

var userChoice = '';
console.log( userChoice);

function choosecolor(){

    // Demander à l'utilisateur de choisir une couleur 
    var userPrompt = prompt('Choisir une couleur entre rouge, vert et bleu');

    // Assigner la valeur de userPrompt à userChoice
    userChoice = userPrompt;


    // Appeler la fonction de traduction
    translateColor( userChoice );

};

// Créer une fonction pour traduire les couleurs

function translateColor( paramColor ){

    if ( paramColor =='rouge' ){ //je donne la condition 
    
    console.log('Rouge se dit Red en anglais'); // si la condition est remplie, je donne le code à exécuter

    } else if ( paramColor =='bleu'){ //OU si l'utilisateur donne un autre choix

        console.log('Bleu se dit Blue en anglais'); // si la condition est remplie, je donne le code à exécuter

    } else if (paramColor =='vert'){
        console.log('Vert se dit Green en anglais'); 
        
    } else { // Dans tous les autres cas
        console.log('Je ne connais pas cette couleur');

        //  Rappeler la fonction pour faire rechoisir une couleur
        choosecolor();
        
    };

}; 



