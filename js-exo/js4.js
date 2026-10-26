// js4.1 ⭐ Le prix TVAC
// Un plat coûte 20 € HTVA. Calcule et affiche son prix TVAC avec une TVA de 21 % (multiplier par 1.21).
const prixHtva = 20;
const prixTvac = prixHtva * 1.21;
console.log(prixTvac);



// 4.2 ⭐ Les tables de 4
// 17 clients arrivent. Les tables sont de 4 places. Combien de clients restent sans table complète ?
 const nombreClients = 17;
 const placeTable= 4;
 const clientSansTable = nombreClients % placeTable
 console.log(clientSansTable)

// 4.3 ⭐ La puissance
// Affiche 2 à la puissance 10.
const puissance = 4**10
console.log(puissance) 

// 4.4 ⭐⭐ Le stock qui bouge
// Le stock de frites vaut 50. On en vend une portion (--), puis on reçoit une livraison de 20 (+=), puis on en vend 5 d'un coup (-=). Affiche le stock après chaque opération.
let stockFrite = 50;
stockFrite --;
stockFrite += 20;
stockFrite -= 5;
console.log(stockFrite)

// 4.5 ⭐⭐ Les priorités
// Sans l'exécuter, trouve ce qu'affichent ces deux lignes, puis vérifie.
// js
// console.log(2 + 3 * 4);
// console.log((2 + 3) * 4);
// 14
// 20

// 4.6 ⭐⭐ La moyenne des notes
// Calcule la moyenne de trois notes : 14, 16 et 11.
let moyenneNote = (14+16+11)/3
console.log(moyenneNote)
// 4.7 ⭐⭐ Pair ou impair ?
// Affiche le reste de la division par 2 de 7, puis de 10. Comment savoir si un nombre est pair ?
console.log(7 % 2)
console.log(10 % 2)
// 4.8 ⭐⭐⭐ Rendre la monnaie
// Le client doit 13.5 € et paie avec un billet de 20 €. Affiche la monnaie à rendre. Puis refais le calcul en centimes pour éviter les surprises des décimales.
const argentClient = 20 ;
const prixPayer = 13.5;
console.log(argentClient - prixPayer)
console.log((2000 - 1350)/100);

// 4.9 ⭐⭐⭐ Les minutes en heures
// La préparation d'un banquet dure 135 minutes. Affiche le nombre d'heures entières, puis les minutes restantes.
const duree = 135;
const minutes = duree % 60;
const heures = (duree - minutes) / 60;
console.log(heures, "h", minutes, "min");
// 4.10 🏆 Le mystère de 0.1 + 0.2
// Affiche 0.1 + 0.2. Le résultat n'est pas 0.3 ! Trouve une façon d'obtenir exactement 0.3, en travaillant en centimes.

console.log((10 + 20)/100)