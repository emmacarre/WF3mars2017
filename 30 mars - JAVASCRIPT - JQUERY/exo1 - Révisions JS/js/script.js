/*
- Créer un tableau contenant 4 prénoms dont le vôtre
- Faire une boucle sur le tableau pour saluer dans la console chacun des prénoms

- Afficher un message spécial pour votre prénom 
*/

var namesArray = ['John', 'Paul', 'Emmanuelle', 'Georges']; 
console.log(namesArray); 

for( var i=0; i < namesArray.length; i++ ){
    // Tant que i, chaque boucle, est plus petite que la taille du tableau, elle fait une boucle ; i++ la relance pour refaire une boucle, tant qu'elle reste inférieure à la taille du tableau 
    //console.log('Salut ' + namesArray[i]);

    if( namesArray[i] == 'Emmanuelle' ){
        console.log("Salut c'est moi"); 

        // Pour modifier une balise HTML
        document.querySelector('p').textContent = "Salut c'est moi!"; 

    } else{
        console.log('Salut ' + namesArray[i]);
    }

};


