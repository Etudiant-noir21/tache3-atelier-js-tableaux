//  Déclarez un tableau de 10 étudiants et affichez le tableau

let etudiants = [];

console.log(etudiants);

// creation d'une boucle pour mettre 10 elements dans un tableau

for(let i=0; i <10; i++){
    let etudiant = {
        nom: 'Baba',
        prenom: 'Faye',
        age: 21,
        note: 15.5
    };
    etudiants.push(etudiant);
   
}
etudiants[1]={
    nom: 'Wahab',
    prenom: 'Diouf',
    age: 22,
    note: 18.6,

}
etudiants[2]={
    nom: 'Naby',
    prenom: 'Diop',
    age: 20,
    note: 17.5,

}
etudiants[3]={
    nom: 'Omar',
    prenom: 'Faye',
    age: 22,
    note: 18.5,

}
etudiants[4]={
    nom: 'Amara',
    prenom: 'Diakite',
    age: 24,
    note: 19.5,

}
etudiants[5]={
    nom: 'Amy',
    prenom: 'Thiam',
    age: 23,
    note: 20,

}
etudiants[6]={
    nom: 'Binta',
    prenom: 'Dia',
    age: 22,
    note: 18.5,

}
etudiants[7]={
    nom: 'Saliou',
    prenom: 'Diallo',
    age: 22,
    note: 18.6,

}
etudiants[8]={
    nom: 'Nafi',
    prenom: 'Badji',
    age: 22,
    note: 18.75,

}
etudiants[9]={
    nom: 'Younous',
    prenom: 'samb',
    age: 25,
    note: 19.5

}
//  afficher sous forme de tableau

let tbody = document.querySelector("#tableEtudiant tbody");

// boucle pour afficher chaque etudiant sur lw tableau
etudiants.forEach(function (etudiant) {
    var ligne = document.createElement('tr');

    // ajouton des cellules nom

var celluleNom = document.createElement('td');
celluleNom.textContent = etudiant.nom;
ligne.appendChild(celluleNom);

// cellule prenom

var cellulePrenom = document.createElement('td');
cellulePrenom.textContent = etudiant.prenom;
ligne.appendChild(cellulePrenom)

// cellule age

var celluleAge = document.createElement('td');
celluleAge.textContent = etudiant.age;
ligne.appendChild(celluleAge);

// cellule note

var celluleNotes = document.createElement('td');
celluleNotes.textContent = etudiant.note;
ligne.appendChild(celluleNotes);

// ajoutons la ligne du table

tbody.appendChild(ligne);
});

// je veux afficher l'entier , le decimal , la chaine de caractere d'un element du tableau en utilisant switch case

switch (etudiants) {
    case (etudiants.note === Number):
        alert('un entier est detecte : ' + etudiants[i].note);
        break;
       case (etudiants.nom === String):

       alert('Une chaine de caractere est detecte : ' + etudiants[i].nom);
       break;

       case (etudiants.prenom === String):
        alert('une chaine de caractere est detecte : ' + etudiants[i].prenom);
        break;

        case (etudiants.age === Number):
            alert('un entier est detecte : ' + etudiants[i].age);
            break;
        default:
            alert('la variable est inconnue : ' );
    }

    