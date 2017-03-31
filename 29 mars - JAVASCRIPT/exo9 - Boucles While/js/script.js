// créer un tableau contenant 4 prénoms
var users = ['John', 'Georges', 'Paul', 'Ringo'];

console.log(users);

//  Faire une boucle while sur le tableau pour saluer chacun des prénoms
var i = 0; 

// Limiter la boucle à la taille du tableau
while(i < users.length){

    console.log('Salut ' + users[i]);

    // Incrémenter la variable i
    i++;

};
