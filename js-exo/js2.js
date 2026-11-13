// JS-02 · Les variables · Exercices
// Écris ton code sous chaque énoncé, puis lance : node js-02-exercices.js
// Le guide « Faire les exercices dans VS Code » : https://code-en-action.apprendre-le-web-dev.workers.dev/guides/exercices-dans-vs-code
// Les accolades { } séparent les exercices : écris le code de chaque exercice entre les siennes.

// 2.1 ⭐ Le nom du restaurant
// Fais-le en deux temps, en lançant le code après chaque étape :
//
// 1. Déclare une constante nomRestaurant qui vaut le texte "La Friterie du Coin". Lance le code :
//    que voit-on dans la console ?
// 2. Affiche nomRestaurant avec console.log, puis lance à nouveau.
//
// Après l'étape 1, la console reste vide. Après l'étape 2, tu dois obtenir :
//
// La Friterie du Coin
{
	// Ton code ici
}

// 2.2 ⭐ Le compteur de clients
// 1. Déclare avec let une variable nombreClients qui vaut 0.
// 2. Modifie sa valeur : trois clients entrent, elle vaut maintenant 3.
// 3. Affiche nombreClients.
//
// Tu dois obtenir :
//
// 3
{
	// Ton code ici
}

// 2.3 ⭐ Des noms bien écrits
// Un collègue a noté ces quatre variables, avec des noms mal écrits :
//
// prix_du_menu = 12
// NomClient = "Sofia"
// table numero = 4
// TOTALTVAC = 24.2
//
// 1. Déclare ces quatre variables avec le bon mot-clé, en réécrivant chaque nom en camelCase et en
//    gardant les valeurs.
// 2. Affiche les quatre variables avec un seul console.log, dans l'ordre de la liste, séparées par
//    des virgules.
//
// Tu dois obtenir, sur une seule ligne :
//
// 12 Sofia 4 24.2
{
	// Ton code ici
}

// 2.4 ⭐⭐ const ou let ?
// Pour chaque information du salon de coiffure, choisis le bon mot-clé de déclaration :
//
// - le nom du salon : "Studio Coiff" ;
// - le nombre de clients dans la journée : 0 au début ;
// - le prix d'une coupe (fixe) : 25 ;
// - le numéro du client en cours : 1 au début.
//
// 1. Déclare les quatre variables, avec le nom de ton choix.
// 2. Affiche les quatre variables avec un seul console.log, dans l'ordre de la liste.
//
// Tu dois obtenir, sur une seule ligne :
//
// Studio Coiff 0 25 1
{
	// Ton code ici
}

// 2.5 ⭐⭐ Trouve l'erreur
// Ce code plante avec TypeError: Assignment to constant variable.
//
// 1. Lis le message d'erreur : une valeur change alors qu'elle est déclarée comme constante.
// 2. Corrige le code pour qu'il affiche 8.
//
// Tu dois obtenir :
//
// 8
{
	const stock = 10;
	stock = 8;
	console.log(stock);
}

// 2.6 ⭐⭐ Échanger le plat et le dessert
// Le serveur s'est trompé : plat contient "Tiramisu" et dessert contient "Lasagnes".
//
// 1. Déclare plat qui vaut "Tiramisu" et dessert qui vaut "Lasagnes" (leurs valeurs vont changer).
// 2. Échange leurs valeurs : plat doit valoir "Lasagnes" et dessert "Tiramisu". Une variable
//    intermédiaire t'aidera.
// 3. Affiche Plat : suivi de la valeur de plat, puis Dessert : suivi de la valeur de dessert,
//    chacun sur sa ligne.
//
// Tu dois obtenir :
//
// Plat : Lasagnes
// Dessert : Tiramisu
{
	// Ton code ici
}

// 2.7 ⭐⭐ Majuscules et minuscules
// Voici un code (sans erreur) avec deux variables dont le nom ne diffère que par une majuscule.
//
// 1. Prédis ce que la console affiche, ligne par ligne.
// 2. Recopie et lance le code pour vérifier.
// 3. Écris en commentaire (//) pourquoi les deux lignes ne donnent pas la même chose.
{
	const prix = 5;
	const Prix = 50;
	console.log(prix);
	console.log(Prix);
}

// 2.8 ⭐⭐⭐ Les commandes de la soirée
// 1. Déclare avec let une variable commandes qui vaut 0.
// 2. Augmente commandes de 1 : la première commande arrive.
// 3. Affiche Commandes : suivi de la valeur de commandes.
// 4. Recommence les étapes 2 et 3 deux fois de plus, pour la deuxième et la troisième commande
//    (trois affichages en tout).
//
// Tu dois obtenir :
//
// Commandes : 1
// Commandes : 2
// Commandes : 3
{
	// Ton code ici
}

// 2.9 ⭐⭐⭐ Déclarer avant d'utiliser
// Ce code plante avec ReferenceError: Cannot access 'table' before initialization.
//
// 1. Lis le message : on utilise table avant de l'avoir déclarée.
// 2. Corrige le code pour qu'il affiche la valeur de table.
//
// Tu dois obtenir :
//
// Table 4
{
	console.log(table);
	const table = "Table 4";
}

// 2.10 🏆 La fiche de réservation
// 1. Déclare les variables de la réservation, en choisissant const ou let : nomClient ("Sofia"),
//    nombrePersonnes (4), heure ("19h30") et table (12).
// 2. Modifie la bonne variable : la cliente arrive avec une personne de plus (ne retape pas 5).
// 3. Affiche la fiche en quatre lignes : Réservation :, Personnes :, Heure : et Table :, chacun
//    suivi de sa valeur.
//
// Tu dois obtenir :
//
// Réservation : Sofia
// Personnes : 5
// Heure : 19h30
// Table : 12
{
	// Ton code ici
}
