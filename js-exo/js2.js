// 2.1 ⭐ Le nom du restaurant
// Range le nom La Friterie du Coin dans une variable bien nommée, puis affiche-la.
const nomResto = "La Friterie du coin";
console.log(nomResto);


// 2.2 ⭐ Le compteur de clients
// Crée une variable nombreClients qui vaut 0. Trois clients entrent : donne-lui la valeur 3, puis affiche-la.
let nombreClients = 0;
nombreClients = 3; 
console.log(nombreClients);


// 2.3 ⭐ Des noms bien écrits
// Un collègue a noté ces quatre variables, avec des noms mal écrits :

// text
// prix_du_menu = 12
// NomClient = "Sofia"
// table numero = 4
// TOTALTVAC = 24.2
// Copier
// Déclare-les avec const, en écrivant chaque nom en camelCase et en gardant les valeurs, puis affiche les quatre variables avec un seul console.log.
const prixDuMenu = 12;
const nomClient ="Sofia";
const tableNumero = 4;
const totalTvac =24.2;
console.log(prixDuMenu,nomClient,tableNumero,totalTvac);
// 2.4 ⭐⭐ const ou let ?
// Pour chaque information du salon de coiffure, choisis const ou let, puis écris la déclaration et affiche les quatre variables avec un seul console.log :

// le nom du salon : "Studio Coiff" ;
// le nombre de clients dans la journée : 0 au début ;
// le prix d'une coupe (fixe) : 25 ;
// le numéro du client en cours : 1 au début.
const nomDuSalon ="Studio Coiff";
let totalClients = 0;
const prixCoupe = 25 ;
let nCC = 1;
console.log(nomDuSalon,totalClients,prixCoupe,nCC);

// 2.5 ⭐⭐ Trouve l'erreur
// Ce code plante avec TypeError: Assignment to constant variable. Corrige-le pour qu'il affiche 8.
// j'ai changé le const en let
let stock = 10;
stock = 8;
console.log(stock);

// 2.6 ⭐⭐ Échanger le plat et le dessert
// Le serveur s'est trompé : plat contient "Tiramisu" et dessert contient "Lasagnes". Échange leurs valeurs, puis affiche les deux.
let plat = "Lasagne";
let dessert = "Tiramisu";
console.log(plat,dessert)

// 2.7 ⭐⭐ Majuscules et minuscules
// Qu'affiche ce code ? Pourquoi ?
// la valeurs qu'il ya dans les 2 variables,car c'est 2 variable differente la majuscule change la variable
const prix = 5;
const Prix = 50;
console.log(prix);
console.log(Prix);
// 2.8 ⭐⭐⭐ Les commandes de la soirée
// Crée commandes à 0. Trois commandes arrivent, une à une : après chacune, augmente commandes de 1 et affiche Commandes : ….
let commandes = 0;

commandes = commandes + 1;
commandes = commandes + 1;
commandes = commandes + 1;
console.log(commandes);
// 2.9 ⭐⭐⭐ Déclarer avant d'utiliser
// Ce code plante avec ReferenceError: Cannot access 'table' before initialization. Corrige-le.
// console.log(table);
// const table = "Table 4";
const table = "Table 4";
console.log(table)
// 2.10 🏆 La fiche de réservation
// Crée les variables d'une réservation (nom du client, nombre de personnes, heure, table) en choisissant const ou let. La cliente arrive avec une personne de plus : mets à jour la bonne variable. Affiche ensuite la fiche :

// Console
// Réservation : Sofia
// Personnes : 5
// Heure : 19h30
// Table : 12

const nomClients= "Sofia";
let Personnes =  5;
const heure = "19h30";
const tableReserve = 12;
Personnes = Personnes + 1;

console.log("Réservation :",nomClients);
console.log("Personnes :",Personnes);
console.log("Heure :",heure);
console.log("Table :",tableReserve);
