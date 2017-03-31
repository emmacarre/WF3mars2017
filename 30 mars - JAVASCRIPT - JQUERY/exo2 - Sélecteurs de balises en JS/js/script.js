/*

    Ajouter une balise HTML dans le DOM
    - sélectionner le document
    - appliquer la fonction write
    - ajouter le contenu

*/ 

document.write( '<p>Je suis généré en Javascript</p>');

var names = ['Pierre', 'Paul', 'Jacques']; 

for( var i = 0; i < names.length ; i++){

    document.write( '<p>Salut ' + names[i] + '</p>' ); 

}; 