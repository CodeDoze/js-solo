let nom = "Anthony";
console.log(nom);

// 3.1 ⭐ Quel type ?
// Affiche le type de chacune de ces valeurs avec typeof : "Frites", 3.5, true, undefined.
console.log(typeof "Frites")
console.log(typeof 3.5 )
console.log(typeof true)
console.log(typeof undefined)

// 3.2 ⭐ Le bon type pour chaque information
// Déclare une variable pour chaque information d'un plat : son nom ("Burger végé"), son prix (12.5) et s'il est végétarien (oui). Affiche ensuite le type de chacune avec typeof.
const nomDuPlat="Burger végé";
const prix = 12.5;
const estVegetarien = true;

console.log(typeof nomDuPlat)
console.log(typeof prix)
console.log(typeof estVegetarien)
// 3.3 ⭐ Une variable vide
// Déclare let commentaire; sans valeur, puis affiche sa valeur et son type.
let commentaire;
console.log(commentaire)
console.log(typeof commentaire)

// 3.4 ⭐⭐ Le piège des guillemets
// Quelle est la différence entre ces deux variables ? Affiche le type de chacune.
// const prixA = 12;
// const prixB = "12";
const prixA = 12;
const prixB = "12";
// prix A c'est une variable qui a une valeur un nombre , prixB elle contient du texte (number,string) 
// 3.5 ⭐⭐ null ou undefined ?
// La table 7 n'est volontairement réservée par personne : range null dans reservationTable7. Affiche sa valeur et son type. Le type affiché te surprend-il ?
const reservationTable7 = null;
console.log(reservationTable7 )
console.log(typeof reservationTable7 )

// 3.6 ⭐⭐ typeof de typeof
// Que renvoie typeof typeof 42 ? Réfléchis, puis vérifie.

console.log( typeof  42)
console.log( typeof typeof 42)

// 3.7 ⭐⭐ Vrai ou « vrai » ?
// Affiche le type de true et de "true". Lequel utiliser pour dire que la cuisine est ouverte ?
console.log(typeof true)
console.log(typeof "true")
const estOuvert = true;
console.log(estOuvert)

// 3.8 ⭐⭐⭐ La fiche produit
// Crée la fiche d'un produit du food truck : nom ("Frites"), prix (3.5), en stock (true), allergènes (pas encore renseignés : undefined), promotion (aucune, exprès : null). Affiche chaque valeur suivie de son type, comme ceci :
// Frites string
// 3.5 number
// true boolean
// undefined undefined
// null object
const nomDuPlats = "Frites";
const prices  = 3.5;
const enStock = true;
let allergene ;
const promo = null;

console.log(nomDuPlats,typeof nomDuPlats)
console.log(prices,typeof prices)
console.log(allergene,typeof allergene)
console.log(promo , typeof promo)
console.log(enStock, typeof enStock)

// 3.9 ⭐⭐⭐ Repère les mauvais types
// Chaque information ci-dessous a le mauvais type. Corrige-les et affiche leurs types.

// js
// const nombreCouverts = "24"; 
// const estComplet = "false";
// const nomServeur = Lina; 
const nombreCouverts = 24;
const estComplet = false;
const nomServeur = "Lina";

console.log(typeof nombreCouverts);
console.log(typeof estComplet);
console.log(typeof nomServeur);

// 3.10 🏆 Des nombres pas comme les autres
// Affiche le type de NaN (« Not a Number ») et de Infinity, puis le résultat de 1 / 0. Explique le premier résultat.
console.log(typeof NaN);
console.log(typeof Infinity);
console.log(1 / 0);
// NaN est de type Number  c'est le resultat d' un calcul rate