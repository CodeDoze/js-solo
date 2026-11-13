console.log("5" + 2);
console.log("5" * 2);
console.log("5" - 2);

// 6.2 ⭐ Un texte en nombre
// Un prix lu dans un champ de formulaire est toujours un texte.
//
// 1. Déclare une constante prixTexte qui vaut le texte "12.5".
// 2. Convertis prixTexte en nombre avec Number() et range le résultat dans une constante prix.
// 3. Affiche prix + 1.
//
// Tu dois obtenir :
//
// 13.5
{
	// Ton code ici
}

// 6.3 ⭐ Un nombre en texte
// 1. Déclare une constante nombre qui vaut 42.
// 2. Convertis nombre en texte avec String() et range le résultat dans une constante texte.
// 3. Affiche texte puis son type (typeof texte), sur une seule ligne.
//
// Tu dois obtenir :
//
// 42 string
{
	// Ton code ici
}

// 6.4 ⭐⭐ Number ou parseInt ?
// Un client a tapé le nombre de couverts dans un champ.
//
// 1. Déclare une constante saisie qui vaut le texte "12 personnes".
// 2. Affiche Number(saisie).
// 3. Affiche parseInt(saisie) sur la ligne suivante, et compare les deux résultats.
//
// Tu dois obtenir :
//
// NaN
// 12
{
	// Ton code ici
}

// 6.5 ⭐⭐ Deux décimales pour un prix
// 1. Déclare une constante prix qui vaut 7.5.
// 2. Écris prix avec deux décimales (toFixed(2)) et range le résultat dans une constante affichage.
// 3. Affiche affichage.
// 4. Affiche le type de affichage sur la ligne suivante.
//
// Tu dois obtenir :
//
// 7.50
// string
{
	// Ton code ici
}

// 6.6 ⭐⭐ Une saisie invalide
// Un champ contient un texte qui n'est pas un nombre.
//
// 1. Convertis le texte "abc" avec Number() et range le résultat dans une constante resultat.
// 2. Affiche resultat.
// 3. Affiche Number.isNaN(resultat).
// 4. Affiche resultat === NaN, pour voir pourquoi cette écriture ne marche pas.
//
// Tu dois obtenir :
//
// NaN
// true
// false
{
	// Ton code ici
}

// 6.7 ⭐⭐ Additionner deux champs
// Deux champs de formulaire contiennent des textes.
//
// 1. Déclare une constante champ1 qui vaut "3" et une constante champ2 qui vaut "4".
// 2. Affiche champ1 + champ2 pour voir le piège.
// 3. Affiche la vraie somme des deux nombres sur la ligne suivante.
//
// Tu dois obtenir :
//
// 34
// 7
{
	// Ton code ici
}

// 6.8 ⭐⭐⭐ Le prix à la belge
// 1. Déclare une constante prix qui vaut 12.5.
// 2. Écris le prix avec deux décimales, remplace le point par une virgule et ajoute " €" à la fin.
//    Range le tout dans une constante prixBelge.
// 3. Affiche prixBelge.
//
// Tu dois obtenir :
//
// 12,50 €
{
	// Ton code ici
}

// 6.9 ⭐⭐⭐ La virgule de l'utilisateur
// Un client belge a tapé un prix avec une virgule.
//
// 1. Déclare une constante saisie qui vaut le texte "19,99".
// 2. Affiche parseFloat(saisie) : parseFloat ne comprend pas la virgule.
// 3. Remplace la virgule par un point, puis affiche le bon nombre sur la ligne suivante.
//
// Tu dois obtenir :
//
// 19
// 19.99
{
	// Ton code ici
}

// 6.10 🏆 L'arrondi aux 5 cents
// En Belgique, quand on paie en espèces, le total est arrondi aux 5 cents les plus proches.
//
// 1. Déclare une constante prix1 qui vaut 12.37 et une constante prix2 qui vaut 12.38.
// 2. Arrondis chaque prix aux 5 cents les plus proches.
// 3. Affiche les deux prix arrondis avec deux décimales, un par ligne.
//
// Tu dois obtenir :
//
// 12.35
// 12.40
{
	// Ton code ici
}
