// Capter l'évènement ready du document pour y ajouter une fonction de callback (attendre le chargement du DOM)

$(document).ready(function(){

    // Capter l'évènement focus sur le textearea
    $('textarea').focus( function(){
        
        console.log('Minimum 10 caractères'); 
        
    });

    //  Capter l'évènement blur sur le textarea
    $('textarea').blur( function(){

        console.log('L\'utilisateur est sorti du focus');

    });

    // Capter l'évènement scroll sur le header
    $('header').scroll( function(){

        console.log('Scroll'); 
    }); 

    // Capter l'évènement hover sur le main
    $('main').hover( function(){

        console.log('L\'utilisateur est au-dessus du main'); 
    })

    
    // Capter l'évènement click sur ma balise a
    $('a').click( function(evt){

        // Empêcher le comportement naturel de la balise a 
        evt.preventDefault();

        console.log('Click sur la balise a'); 
    }); 

    
    // Capter la soumission du formulaire
    $('form').submit( function(evt){
        
        //Bloquer le comportement naturel du formulaire 
        evt.preventDefault(); 

        console.log('Vérifier les input/stextarea avant de les envoyer au fichier de traitement PHP');
    });


}); //Fin de la fonction d'attente de chargement du DOM