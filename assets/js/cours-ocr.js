
// __________________ VARIABLES __________________ //

// Une variable à :
// - un nom
// - un type
// - une valeur = initialisation de la variable
// Initialisé une variable est crutiale pour qu'elle marche !!!
// On commence par déclaré une variable :
let nomDeLaVariable 
// Pour la best practice, on utilie les noms en "camel case" = majuscule sauf pour le premier mot
// Et voila la variable est déclaré et existe mais elle n'a pas encore de valeur, donc elle n'est pas initalisé.
// On lui donne une valeur en ajoutant :
 let numberOfCats = 2;
// Et ça marche avec tout :
 let numberOfDogs = 4;
// toujours finir la ligne avec un " ; " !!!
// Pour changer la valeur d'une variable, il suffit de :
 numberOfDogs = 2;
// Sans le " let " car la variable est déjà déclaré (elle existait déjà).



// __________________ OPERATEURS __________________ //

// Addition :
let totalCDs = 67;
let totalVinyls = 34;
let totalMusic = totalCDs + totalVinyls;


// Soustraction :
let cookiesInJar = 10;
let cookiesRemoved = 2;
let cookiesLeftInJar = cookiesInJar - cookiesRemoved;


// ajouter ou soustraire un nombre d'une variable :
let cookiesInJar = 10;
/* manger deux cookies */
cookiesInJar -= 2;  // se lit "cookiesInJar - 2 = cookiesInJar" d'ou le -=
// on peut d'ailleur l'écrire : 
cookiesInJar = cookiesInJar - 2;
//il reste 8 cookies
/* cuisson d'un nouveau lot de cookies */ 
cookiesInJar += 12; // se lit "cookiesInJar + 12 = cookiesInJar" d'ou le +=
// on peut d'ailleur l'écrire : 
cookiesInJar = cookiesInJar + 12;
// il y a maintenant 20 cookies dans la boîte


// ajouter ou soustraire 1 (incrément ou décrément) :
let numberOfLikes = 10;
numberOfLikes++;  // cela fait 11
numberOfLikes--; // et on revient à 10...qui n'a pas aimé mon article ?


// Multiplication et division :
let costPerProduct = 20;
let numberOfProducts = 5;
let totalCost = costPerProduct * numberOfProducts;
let averageCostPerProduct = totalCost / numberOfProducts;


// Comme pour l'addition et la soustraction - pour multiplier ou diviser un nombre :
let numberOfCats = 2;
numberOfCats *= 6;  // numberOfCats vaut maintenant 2*6 = 12; 
numberOfCats /= 3;  // numberOfCats vaut maintenant 12/3 = 4;

// L'utilisation des parenthèses est permise :
let numberOfSeasons = 6;
let numberOfEpisodes = 12;
// Calculate totalShowTime here
// =====================================
let episodeTime = 45;
let commercialTime = 5;
let totalShowTime = (numberOfSeasons * numberOfEpisodes) * (episodeTime + commercialTime)
// =====================================




// __________________ CONSTANTE __________________ //

// Pour les données fixes qui ne vont jamais changer, on utilise des constantes :
// exemples : heure dans une journée, jour dans une année, nombre de cm dans un mètre, ...
// Ces données sont des constantes qui ne peuvent être modifié.
// Créer une constante : 
const hoursPerDay = 24;
const minutesPerHour = 60;
const secondsPerMinute = 60;





// __________________ TYPES d'une variable / constante __________________ //

// C'est le genre des données qu'une constante et/ou une variable enregistrent.
// En JavaScript, il y a trois types primitifs principaux :
// - number (nombre) ;
// - string (chaîne de caractères) ;
// - boolean (valeur logique).

// -- NUMBER ou nombre -- //
// Les variables de type  number  peuvent être positives ou négatives. 
// Elles peuvent aussi être des nombres entiers (1, 2, 3, etc.) ou décimaux (1,4 ; 67,34 ; etc.).
// !!! => L'arithmétique en virgule flottante peut déclencher des erreurs très gênantes dans tous les langages de programmation :
let integerCalculation = 1 + 2;  // donne 3
let weirdCalculation = 0.1 + 0.2;  // on attend 0.3, réponse réelle 0.30000000000000004
// Chaque fois que c'est possible, utilisez plutôt des calculs entiers.

// -- BOOLEAN ou valeurs logiques -- //
// Les valeurs logiques ne peuvent avoir que deux valeurs,  true  ou  false.
// Elles s'utilisent pour savoir si un ensemble de conditions particulières est réuni.
let userIsSignedIn = true;
// L'utilisateur est connecté.
let userIsAdmin = false;
// L'utilisateur n'a pas de droit d'administrateur

// -- STRING ou chaîne de caractères -- //
// Les chaînes de caractères sont la façon d'enregistrer du texte dans des variables JavaScript.
// N'importe quelle chaîne de caractères, allant d'une seule lettre à un très grand nombre de lettres (plus de 134 millions, même dans des navigateurs anciens).
// Les variables de type string sont encadrées par des guillemets simples ou doubles —  '  ou  " ou ``  :
let firstName = "Will";
let lastName = 'Alexander';
let nickName = `Alex`;
// L'avantage de ces dernières guillemets (`...`) est qu'elles ne font pas réagir le code si il y a un j' ou une citation dans la chaîne de caractère.
// Les chaînes peuvent être concaténées (ajoutées à la fin l'une de l'autre) par l'opérateur  '+'.
// Le plus est le seul opérateur que l'on peut utiliser sur des chaîne de caractères. 
// Il existe d'autres opérateurs plus évolués pour les chaînes qui ne sont pas encore dans le cours.
let wholeName = firstName + lastName;  // valeur: "WillAlexander"
// Pour ajouter un espace, on ajoute un String avec un espace :
let wholeName = firstName + ' ' + lastName;  // valeur: "Will Alexander"
console.log(firstName + " " + lastName); // me fera aparaitre "Will Alexander" dans la console.

// -- Savoir le type d'une variable -- //
// Pour consulter le type d'une variable, on intéroge la console avec l'opérateur 'typeof' :
// console.log(typeof nomDeLaVariable);


// EXERCICE : 
let episodeTitle = 'Hello World !'
let episodeDuration = 45;
let hasBeenWatched = true;

// IMPORTANT :
// JavaScript est un langage dit à types dynamiques et à typage faible. 
// Cela signifie que l'on peut changer le type d'une variable déjà définit.
// Ceci offre une grande souplesse, mais peut aussi conduire à un comportement inattendu si vous opérez sans précaution.
// C'est pourquoi il est très utile d'utiliser les constantes chaque fois que c'est possible.


// IMPORTANT : 
// Techniquement, il y a trois autres types de données primitifs dans JavaScript :  null,  undefined  et  symbol. 
// Vous croiserez les deux premiers dans ce cours, mais les symboles sortiraient du sujet.





// __________________ OBJET __________________ //
// Un objet est un 'Type complexe'.
// Un objet peut contenir plusieurs informations, de types différents, dans une seule variable.
// Cela permet de regroupé des informations autour d'un même sujet.
// Les objets JavaScript sont écrits en JSON (JavaScript Object Notation).
// Par exemple, on peut regroupé toute les informations concernant un utilisateur, comme son nom, son age et son mail, dans une seule variable.
// Pour savoir à quoi correspondent les valeurs de l'objet dans la variable, on va les associer à une clé.
// L'ojet final sera donc une série de paire : clé(s) + valeur(s) = objet
// Exemple : 
{
	"nom": "Will Alexander",
	'age': 33;
	// ... etc
}
// Les objets sont des séries de paires clés/valeurs séparées par des virgules, entre des accolades.
// Autre exemple :
let myBook = {
    title: 'The Story of Tau',
    author: 'Will Alexander',
    numberOfPages: 250,
    isAvailable: true
};
// Chaques clé est une chaîne de caractère, et les valeurs associées peuvent avoir tout type de données (nombre, chaîne, etc).
// Construire des objets présente un avantage essentiel : cela permet de regrouper les attributs d'une chose unique à un même emplacement.





// __________________ CLE __________________ //
// Une clé est une chaîne de caractères qui explique la valeur correspondante.
// Dans le premier exemple si dessus, la clé est 'nom' et "age".
// Pour facilité la création des clé et valeur, on utilise un outil génial, les classes.
// Exercice :
let episode = {
    title: 'The Story of Tau',
    duration: 45,
    hasBeenWatched: true
}
// Exemple :
let myCat = {
	name = `Minou`,
	age = 2
};




// __________________ DOT NOTATION ou notation pointée __________________ //
// Voyons comment accéder aux données dans un objet avec la notation pointée.
// Une fois qu'un objet est enregistré dans une variable, vous pouvez accéder à ses données avec : objet.clé.
// Pour cela, utilisez le nom de la variable qui contient l'objet, un point (  .  ), puis le nom de la clé dont vous souhaitez récupérer la valeur.
// Exemple : 
let episode = {
  title: 'Dark Beginnings',
  duration: 45,
  hasBeenWatched: false
};
// Pour récupéré le titre dans une autre variable avec la notation pointée, on écrit :
let episodeTitle = episode.title;
// Et ainsi de suite :
let episodeDuration = episode.duration;
let episodeHasBeenWatched = episode.hasBeenWatched;
// Exemple plus complexe, pour faire apparaitre les variables dans un texte sur notre site :
document.querySelector('#episode-info').innerText = `Episode: ${episodeTitle}
Duration: ${episodeDuration} min
${episodeHasBeenWatched ? 'Already watched' : 'Not yet watched'}`
// ' document ' est l'objet site complet.
// ' querySelector ' est un selecteur d'élément, ici on va cherché l'ID 'episode-info' dans notre HTML (et CSS).
// ' innerText ='' ' permet de faire apparaitre un texte, entre les guillemets, dans l'élément selectionné, soit l'ID du dessus.
// On voit ensuite qu'on va cherché nos variable avec : ${objet.clé}
// Dans le cas du Boolean, on peut faire apparaitre autre chose que True ou False grace à la forme '? "nouveau format de True" : "nouveau format de False" '.
// Tout ceci est prématuré mais je voulais m'en souvenir car je l'ai compris.





// __________________ CLASSE __________________ //
// Une classe est un 'modèle' pour un objet dans le code.
// C'est un plan qui permet de créer des objets, un peu comme un formulaire à remplir.
// Vous aurez souvent besoin de beaucoup d'objets du même type. C'est là que les classes sont utiles.
// Comment ça marche ? :
// La classe contient des champs qui correspondent au clés de l'objet final.
// Par exemple, dans le cas d'un compte utilisateur, comme au dessus, on aurait :
// la classe = compte :
// Ce qui donne des champs à complété pour le nom, le mail et l'age.
// Une fois la classe remplis, cela créer un objet, qui est appelé une instance.
// On peut choisir le nom que l'on veut pour une classe, c'est pour cela qu'on appel un 'type nommé'.
// Les classes permettent aussi de regrouper beaucoup de détails, c'est pourquoi elles s'appellent aussi des types complexes.
// Pour créer une classe :
class Book {
	constructor(newTitle, newAuthor, newPages) {
		this.title = newTitle;
		this.author = newAuthor;
		this.pages = newPages;
	}
}
// Les noms de classe on une majuscule à chaques mots, même le premier, contrairement au noms de fonction et variables.
// Pour attribuer le titre, l'auteur et le nombre de pages reçus à cette instance, utilisez le mot clé  'this'  et la notation dot (avec un point).
// Le mot clé 'this' fait référence à la nouvelle instance. 
// Donc, il utilise la notation dot (.) pour attribuer les valeurs reçues aux clés correspondantes : 'this.clé'
// Dans l'exemple ci-dessus, on a différencié les noms des clés des objets de ce de la classe en mettant 'new...' devant.
// Or la norme est d'utilisé le même nom pour les deux éléments. 
// L'exemple avait pour but de montrer que ce sont bien deux éléments distincts, même si il ont le même nom.
// Avec la best practice :
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}
// Un constructor est une fonction qui est appelée quand on crée une nouvelle instance de cette classe avec le mot clé 'new'.
// Une fonction est suivit de ().
// Maintenant que la classe est terminée, vous pouvez créer des instances par le mot clé 'new' :
let myBook = new Book("Orgueil et préjugés", "Jane Austen", 250);
// Cette ligne crée l'objet (instance) suivant :
{
    title: "Orgueil et préjugés",
    author: "Jane Austen",
    pages: 250
}
// Une classe permet de créer facilement et rapidement de nouveaux objets, comme ici avec la classe Book.
// Exercice :
class Episode {
    constructor(title, duration, hasBeenWatched) {
        this.title = title;
        this.duration = duration;
        this.hasBeenWatched = hasBeenWatched;
    }
}

let firstEpisode = new Episode("Je m'ennuie", 45, true);
let secondEpisode = new Episode("Ce cours est", 44, true);
let thirdEpisode = new Episode("Trop long", 43, false);
// Solution : https://codepen.io/nicolaspatschkowski/pen/qBdvRVW





// __________________ INSTANCE __________________ //
// Une Classe permet de construire plusieurs objets du même type plus facilement, rapidement et en toute fiabilité.
// Ces objets nés d'une classe sont appelés instances de la même classe.





// __________________ ARRAY ou tableau __________________ //
// Comme la classe, c'est une type complexe.
// Un tableau est composé de ligne de valeur similaire.
// Chaques lignes à un index, c'est à dire un numéro propre. L'index commence à 0.
// Ainsi la première ligne du tableau sera 0, la deuxième sera 1, et ainsi de suite.
// Pour les tableau on utilise des [].
let arrayTest = [];
// Exemple :
let arrayTest = [
	'ligne 1', 
	'ligne 2', 
	'ligne 3'
];
// Dans notre exemple, le tableau à trois lignes, qui ont successivement 0, 1 et 2 comme index.
// Un tableau est toujours ordonné, le premier élément entré se positionne en premier dans les lignes du tableau.
// Par exemple, je peux récupérer la valeur d'une ligne du tableau en appelant son index :
console.log(arrayTest[2]);
// La console nous affiche la troisième ligne du tableau, soit "ligne 3".
// Ou l'on peut déclaré une variable à partir des valeurs du tableau :
let firstLign = arrayTest[0]; // "ligne 1"
let thirdLign = arrayTest[2]; // "ligne 3"
let undefinedLign = arrayTest[12] // undefined
// Dernière ligne : Si la valeur n'existe pas dans le tableau, alors la variable ne sera pas définit.
// On peut aussi mettre des variables dans un tableau :
let firstLign = "ligne 1";
let secondLign = "ligne 2";
// Je commence par déclarer des variables, et ensuite je les ajoute dans un tableau :
let arrayTest = [
	firstLign, 
	secondLign
];
// Cela aura le même effet que dans l'exemple précédent :
console.log(arrayTest[0]);
// La console nous affiche la première ligne du tableau, soit "ligne 1" (et non firstLign, qui est le nom de la variable mais pas la valeur).






// __________________ VALEUR ou REFERENCE __________________ //
// En JavaScript, les types primitifs tels que les nombres, les valeurs logiques et les chaînes mettent en avant une valeur. 
// Ceci signifie que quand vous faites quelque chose comme :
let numberOfCats = 20; // Définition de la variable
let totalNumberOfCats = numberOfCats; // résultat = 20
// C'est la valeur 20 qui est copiée dans la nouvelle variable (totalNumberCats), et non la variable "numberOfCats".
// Et aucun lien n'est maintenu entre les deux variables.

// Exemple :
let nameCat = `Minou`; // Définition de la variable
// On crée un tableau qui appel cette variable :
let myCat [nameCat]; // On lie la variable nameCat au tableau, ce qui lui donne la valeur `Minou`
console.log(myCat); // La console affiche [`Minou`]
// Mais si on change la variable :
nameCat = `Minette`;
// Alors la console affiche toujours la valeur initiale de la variable.
console.log(myCat); // La console affiche [`Minou`]
// Car l'élément qu'on à lié au tableau et directement la valeur de la variable et non la variable en elle même.
// Pour lié la variable, il faut utilisé un objet :
let cat = {
	name = `Minou`
};
let myCat [cat]; // On lie la variable cat au tableau et on lui donne la clé name (et non sa valeur associé)
// Ainsi si l'on change la valeur, et qu'on appel le tableau :
cat.name = `Minette`;
console.log(myCat); // La console affiche [`Minette`]
// La console à bien pris la valeur associé à la clé et non la valeur initiale de la variable name.
// Les objets et tableaux passe par la référence et non la valeur. 
// Si vous n'y prenez pas garde, cela peut conduire à des comportements inattendus. 
let artistProfile = {
    name: "Tao Perkington",
    age: 27,
    available: true
};
let allProfiles = [artistProfile]; // nouveau tableau contenant l'objet ci-dessus
artistProfile.available = false; // modification de l'objet
console.log(allProfiles) // affiche { nom: "Tao Perkington", âge: 27, disponible: false }
// Bien que nous ayons créé le tableau et passé l'objet avant la modification de cet objet, vous la voyez dans le tableau. 
// C'est parce que quand on utilise des tableaux et des objets, on passe des références aux objets plutôt que la valeur des données qu'ils contiennent.
// En résumé : on dit qu'il y a des types à passage par valeur et des types à passage par référence en JavaScript.
// Pour avoir un code plus fonctionnel, il faut priorisé les types à passage par référence (objet, tableau).






// __________________ FUNCTION ou fonction ou méthode __________________ //

// -- LENGTH -- //
// La fonction 'length' permet de compté le nombre de ligne dans un tableau :
let guests = ["Will Alexander", "Sarah Kate", "Audrey Simon"];
let howManyGuests = guests.length; // Ce qui est la valeur 3
// On peut faire apparaitre cette valeur avec la console : 
console.log(guests.length); // La console affiche 3
// Attention de ne pas inverser le H et le T dans le mot 'length' !!!

// -- PUSH -- //
// La fonction 'push' permet de rajouter une valeur à mon tableau.
// Cet élément va se mettre à la suite des autres dans le tableau :
guests.push(`Tao Chang`);
console.log(guests); // On voit apparaitre la liste des invités soit : ["Will Alexander", "Sarah Kate", "Audrey Simon", "Tao Chang"]
// Ici Tao devient l'index 3, car il se place sur la quatrième ligne du tableau.
// Pour pousser plusieurs éléments dans un tableau, il suffit de les mettres à la suite entre les parenthèses.
// Exemple de l'exercice :
class Episode {
  constructor(title, duration, hasBeenWatched) {
    this.title = title;
    this.duration = duration;
    this.hasBeenWatched = hasBeenWatched;
  }
}
let firstEpisode = new Episode('Dark Beginnings', 45, true);
let secondEpisode = new Episode('The Mystery Continues', 45, false);
let thirdEpisode = new Episode('An Unexpected Climax', 60, false);
// Maintenant que les variables sont déclaré, on créer le tableau : 
let episodes = [];
// Puis on pousse les épisodes déclarés dans le tableau : 
episodes.push(firstEpisode, secondEpisode, thirdEpisode);

// -- UNSHIT -- //
// La fonction 'unshit' permet de rajouter une valeur à mon tableau.
// Mais, à la différence de 'push', cet élément va se mettre en premier dans le tableau, au dessus des autres éléments :
guests.unshit(`Paula Martinez`);
console.log(guests); // On voit apparaitre la liste des invités soit : ["Paula Martinez", "Will Alexander", "Sarah Kate", "Audrey Simon", "Tao Chang"]
// Ici Paula devient l'index 0, car elle se place sur la première ligne du tableau.

// -- POP -- //
// La fonction 'pop' permet de supprimer la dernière ligne dans un tableau :
guests.pop(); 
// On appele sa méthode pop, sans passer aucun argument, c'est à dire ne rien mettre entre parenthèses.
console.log(guests); // On voit apparaitre la liste des invités soit : ["Paula Martinez", "Will Alexander", "Sarah Kate", "Audrey Simon"]
// Ici Tao, qui était de dernier du tableau, est supprimé de la liste des invités.






// __________________ Les ensembles ou SETS et Les cartes ou MAPS __________________ //
// En JavaScript, un set,  ou ensemble, est une liste non ordonnée.
// En revanche, une map est une liste ordonnée de paires clés/valeurs.
// Les sets et les maps, bien qu'ils soient utiles dans certains cas, sortent du cadre de ce cours.
// De ce fait, on passe rapidement dessus.

// -- SETS -- //
// Cela signifie que vous ne pouvez pas récupérer de façon fiable les éléments de liste, car ils n'ont pas d'indice fixe (index).
// Vous pouvez par contre ajouter et supprimer des éléments de cette liste.
// Les doublons ne sont pas autorisés.
// Vous pouvez aussi vérifier si un ensemble contient ou non un élément particulier.
// Par exemple, les ensembles peuvent être pratiques pour enregistrer les utilisateurs en ligne à un instant donné, pour vérifier s'ils le sont ou non.

// -- MAPS -- //
// Bien qu'elle ressemble à un objet, il y a des différences importantes.
// Par exemple, les clés peuvent avoir n'importe quelle valeur (et pas seulement des chaînes) dans les cartes.
// Vous pouvez facilement trouver combien d'éléments une  map  contient.
// Et il est possible de filtrer ou modifier dans certains cas les paires clés/valeurs.






// __________________ JS sans la fonction 'main' __________________ //
// La fonction 'main' permet au developpeur back de choisir l'ordre d'execution de son code.
// Avec le Javascript, il n'y a pas cette fonction.
// L'ordre d'execution du code dépend de l'environnement où est développé le JS.

// -- JSBIN -- //
// Site JSBin : testeur de code JS
// JSBin est un excellent outil pour tester des extraits de code en JavaScript.
// JSBin parcourt alors vos lignes de code et les exécute l'une après l'autre. L'ordre est donc important.
// Par exemple, ce morceau de code :
let numberOfGuests = 20;
console.log(numberOfGuests); // 20
// n'est pas identique à :
console.log(numberOfGuests); // undefined
let numberOfGuests = 20;
//JSBin est un environnement simple qui exécute votre code ligne par ligne lorsque vous cliquez sur le bouton Run.

// -- JS pour le Web -- //
// Vous écrivez du code, l'enregistrez dans un ou plusieurs fichiers, 
// puis importez ces fichiers par une balise spéciale dans votre fichier HTML. 
// Le navigateur exécute ensuite automatiquement le code dans ces fichiers, en général dans l'ordre de leur importation.

// -- JS pour les serveurs -- //
// Il fut un temps où JavaScript ne pouvait s'utiliser que dans des pages web (en avant-plan), 
// mais ce n'est plus vrai ! 
// Il peut maintenant aussi s'utiliser en arrière-plan, pour gérer l'accès à certaines ressources.
// Pour les serveurs, l'ordre d'execution est souvent déterminé par un autre language (comme Node par exemple).
// Ainsi, dans certains cas, on couple Javascript avec d'autre language (exemple : NodeJS).





// __________________ L'ordre de déroulement du programme __________________ //
// Le déroulement du programme est un terme général qui décrit l'ordre dans lequel s'exécutent vos lignes de code.
// En JS, l'ordre d'execution des lignes de code peut-être :
// - Dans l'ordre (l'une après l'autre)
// - Répétées
// - Ignorées
// Ceci signifie que certaines lignes seront lues une seule fois, certaines plusieurs fois, et d'autres complètement ignorées, selon la situation.
// C'est pour cela qu'on utilise les instructions conditionnelles.






// __________________ CONDITION ou instructions conditionnelles __________________ //

// -- CONDITION IF / ELSE (si / sinon) -- //
// C'est ce qu'on appelle une instruction conditionnelle parce qu'elle vérifie si certaines conditions sont réunies, et réagit en conséquence.
// Si la condition est remplis, on execute le bloque de code : IF.
// Sinon, on execute un autre bloque de code : ELSE.
// Par exemple :
// IF (SI) l'utilisateur est connecté, ouvrir sa page d'accueil
// ELSE (SINON) revenir à la page de connexion
// se qui donne en code :
let userIsLoggedIn = true; // Je declare une variable booleenne
if (userIsLoggedIn) {
	console.log (`L'utilisateur est connecté`) // Si la condition est 'true', alors ce message s'affiche
} else {
	console.log (`Revenir à la page d'accueil`) // Sinon c'est ce message qui s'affiche (si la condition est 'false' ou erronée)
}

// Pour un boolean :
// En JavaScript, on utilise des 'boolean' simples pour les instructions  if / else. 
// La syntaxe se présente comme suit :
if (boolean) {
    // réaction à la valeur vraie de myBoolean
} else {
    // réaction à la valeur faux de myBoolean
}

// Avec des expressions de comparaison :
// Plutôt qu'une simple variable logique dans une condition  if /else, vous pouvez aussi utiliser des expressions de comparaison, 
// qui comparent des valeurs entre elles grâce aux opérateurs suivants :
//   <    inférieur à ;
//   <=   inférieur ou égal à ;
//   == ou ===   égal à ;
//   >=   supérieur ou égal à ;
//   >    supérieur à ;
//   !=   différent de.
// Par exemple :
const numberOfSeats = 30; // variable nombre de sièges
let numberOfGuests = 25; // variable nombre d'invités
if (numberOfGuests < numberOfSeats) {
    // autoriser plus d'invités
} else {
    // ne pas autoriser de nouveaux invités
}

// Découvrez l'égalité :  ==  ou ===
// En JavaScript, toutes les égalités ne sont pas nées égales :
// Il y a deux façons de vérifier si deux valeurs sont égales en JavaScript :  ==  et  ===, aussi appelées égalité simple et égalité stricte :
// l'égalité simple vérifie la valeur, mais pas le type. Donc ceci renvoie la valeur  true  :
5 == "5"
// par contre, l'égalité stricte vérifie à la fois la valeur et le type. Donc :
5 === "5"
// renvoie  false, car on compare un  number  à un  string.
//De même, il y a deux opérateurs d'inégalité  !=  et  !==, avec la même distinction


// Avec un chaînage d'instructions :
// Vous pouvez aussi chaîner les instructions  if /else  pour réagir à des conditions potentielles multiples :
if (numberOfGuests == numberOfSeats) {
    // tous les sièges sont occupés
} else if (numberOfGuests < numberOfSeats) {
    // autoriser plus d'invités
} else {
    // ne pas autoriser de nouveaux invités
}
// Le chaînage d'instructions permet de prévoir différents résultats en fonction des différentes situations.

// Exercice : 
class Episode {
  constructor(title, duration, minutesWatched) {
    this.title = title;
    this.duration = duration;
    // Add conditions here
    // =================================
    if (duration === minutesWatched) {
    	this.hasBeenWatched = true;
    } else if (minutesWatched < duration) {
    	this.hasBeenWatched = false;
    }
    // =================================
  }
}
let firstEpisode = new Episode('Dark Beginnings', 45, 45);
let secondEpisode = new Episode('The Mystery Continues', 45, 10);
let thirdEpisode = new Episode('An Unexpected Climax', 60, 0);
let episodes = [firstEpisode, secondEpisode, thirdEpisode];

// -- CONDITION MULTIPLES => OPERATEURS LOGIQUES -- //
// Dans certaines situations, vous souhaitez vérifier plusieurs conditions pour un même résultat.
// Pour cela, il existe des opérateurs logiques :
//   &&   — ET logique — pour vérifier si deux conditions sont toutes les deux vraies ;
//   ||   — OU logique — pour vérifier si au moins une condition est vraie ;
//   !    — NON logique — pour vérifier si une condition n'est pas vraie. 
// Exemples :
let userLoggedIn = true;
let userHasPremiumAccount = true;
let userHasMegaPremiumAccount = false;
userLoggedIn && userHasPremiumAccount; // true
userLoggedIn && userHasMegaPremiumAccount; // false
userLoggedIn || userHasPremiumAccount; // true
userLoggedIn || userHasMegaPremiumAccount; // true
!userLoggedIn; // false
!userHasMegaPremiumAccount; // true
// Bien sûr, ces opérateurs peuvent être mélangés et combinés en fonction de vos besoins précis.

// Exercice :
class Episode {
  constructor(title, duration, minutesWatched) {
    this.title = title;
    this.duration = duration;
    // Add logic here
    // ======================
    if (minutesWatched == duration) {
      this.watchedText = "Déjà regardé",
      this.continueWatching = false
    } else if (minutesWatched == 0) {
      this.watchedText = "Pas encore regardé",
      this.continueWatching = false
    } else if (minutesWatched < duration) { // OU (minutesWatched > 0 && minutesWatched < duration)
      this.watchedText = "En train de regarder",
      this.continueWatching = true
    }
    // ======================
  }
}
let firstEpisode = new Episode('Dark Beginnings', 45, 45);
let secondEpisode = new Episode('The Mystery Continues', 45, 10);
let thirdEpisode = new Episode('An Unexpected Climax', 60, 0);
let episodes = [firstEpisode, secondEpisode, thirdEpisode];





// __________________ Scope des Variables __________________ //
// En JavaScript, les variables créées par 'let' ou 'const' ne peuvent être vues ou utilisées qu'à l'intérieur du bloc de code dans lequel elles sont déclarées.
// Un bloc de code, aussi souvent appelé bloc tout court, est une section de code incluse entre accolades  {}.
// Ce phénomène est appelé scope de bloc, ou block scope.  
// Voici un exemple :
let understandThisLecon = true;
if (understandThisLecon) {
	let welcomeMessage = `Bravo !`
} else {
	let welcomeMessage = `Dommage...`
}
console.log(welcomeMessage); // renvoie une erreur
// Dans ce code, nous avons deux blocs de code issus de l'instruction 'if / else' :
// Le bloc de code du IF entre {}, et le bloc de code du ELSE entre {}.
// Chaques bloc déclare une variable par : let welcomeMessage
// Néanmoins, ces variables ne sont disponibles qu'à l'intérieur des blocs où elles sont déclarées. 
// C'est pourquoi, quand vous essayez d'afficher le contenu de  welcomeMessage  sur la console, vous obtenez une erreur.
// Car pour le code en dehors des blocs (aussi appelé portée extérieure ou parente), il n'y a pas de variable "welcomeMessage".
// pour que ça fonctionne, il faut déclaré la variable dans la portée extérieure, pour la rendre accessible à la console :
let understandThisLecon = true;
let welcomeMessage; // on déclare la variable ici sans l'initalisé
// OU Autre format : 
let welcomeMessage = ''; // Pour déclaré la variable et l'initialisé en chaîne de caractère.
if (understandThisLecon) { // et on l'initalise la variable dans la condition IF et ELSE (ou on modifie la variable si on a choisit l'autre format)
	welcomeMessage = `Bravo !` // ici
} else {
	welcomeMessage = `Dommage...` // ou ici
}
console.log(welcomeMessage); // Affiche "Bravo !"
// Ici, du fait que la variable est déclarée dans le scope parent, elle est disponible partout, accessible et peut être modifiée correctement.




// __________________ Instructions SWITCH __________________ //
// si vous souhaitez vérifier la valeur d'une variable par rapport à une liste de valeurs attendues, 
// vous pouvez utiliser l'instruction 'switch' :
switch () {
    case ' ': ;
        break;
    case ' ': ;
        break;
    // ...
    default: ;
}
// Exemple :
// Supposons que vous ayez quelques objets utilisateurs et souhaitiez vérifier quel type de compte a chacun, 
// pour envoyer un message personnalisé :
let firstUser = {
    name: "Will Alexander",
    age: 33,
    accountLevel: "normal"
};

let secondUser = {
    name: "Sarah Kate",
    age: 21,
    accountLevel: "premium"
};

let thirdUser = {
    name: "Audrey Simon",
    age: 27,
    accountLevel: "mega-premium"
};
// Vous pouvez ici utiliser une instruction 'switch', 
// qui prend la variable à vérifier et une liste de valeurs comme différents cas :
switch (firstUser.accountLevel) {
    case 'normal':
        console.log('You have a normal account!');
        break;
    case 'premium':
        console.log('You have a premium account!');
        break;
    case 'mega-premium':
        console.log('You have a mega premium account!');
        break;
    default:
        console.log('Unknown account type!');
}
// Après le code à exécuter dans chaque instruction  case, ajoutez l'instruction break.
// Si vous ne le faites pas, JavaScript continuera l'exécution des cas suivants (en cascade) jusqu'à rencontrer une instruction break ou la fin de l'instruction  switch.
// Optionnellement, vous pouvez aussi ajouter un cas  default  qui ne sera exécuté que si la variable que vous vérifiez ne correspond à aucune des valeurs répertoriées.





















// __________________ PERSO __________________ //

// Test antoine

// HTML : 
// <div id="prout"></div>
// CSS : 
// width = 20px;
// height = 20px;
// border = solid 2px #444;

// Pour changer la couleur de la bordure :
// Je relie ma div à une variable JS, que je nomme "crotte" par exemple :
var crotte = document.getElementById('prout');
// Puis j'appel une fonction, que je nomme "caca" par exemple, qui changera le style de la div.
function caca() {
    crotte.style.border = 'solid 1px #333';
}
// Attention, la propriété border est entièrement changé donc soit on appel directement le border-color, soit on réécrit les élément du border en intégralité.
