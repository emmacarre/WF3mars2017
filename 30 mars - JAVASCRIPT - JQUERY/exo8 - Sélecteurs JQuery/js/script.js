// Attendre le chargement du DOM
$( document ).ready( function(){

    // Code à exécuter sur la page une fois chargée


/*
Les sélecteurs jQuery "classiques"
*/

    // Sélectionner une balise par son nom (tag)
    var myHtmlTag = $( 'header' ); 
    console.log( myHtmlTag ); 

    // Sélectionner une balise par sa class
    var myClass = $('.myClass');
    console.log( myClass); 

    // Sélectionner une/des balises par son id
    var myId = $('#myId');
    console.log( myId); 

    // Sélecteur imbriqué
    var myItalic = $('h2 i');
    console.log( myItalic); 

    // Sélecteur CSS3
    var myFooter = $( 'body > main + footer' );
    console.log( myFooter); 


/*
Les sélecteurs jQuery spécifiques 
*/

    // Sélecteur d'enfant
    var myChildren = $('header').children('button');
    console.log( myChildren); 

    // Sélection de parent
    var myParent = $('h2').parent();
    console.log( myParent ); 

    // Rechercher une balise
    var myH2 = $('main').find('h2');
    console.log(myH2); 

    // Sélectionner le premier 
    var firstBtn = $('button:first'); 
    console.log( firstBtn ); 

    // Sélectionner le dernier
    var lastBtn = $('button:last');
    console.log( lastBtn ); 

    // Sélectionner la nth (énième) balise
    var secondLi = $('li').eq(1); 
    console.log( secondLi ); 

    // Sélectionner la balise suivante
    var afterMain = $('main').next();
    console.log( afterMain ); 

    // Sélectionner la balise précédente
    var beforeMain = $('main').prev();
    console.log( beforeMain );  


    /*
      Le deathSelector
    */

     var deathSelector = $('h3').prev().parent().parent().next().parent().find('main').children('section').find('h3');
     console.log( 'Balise sélectionnée : ', deathSelector ); 



}); //Fin de la fonction d'attente du chargement du DOM 