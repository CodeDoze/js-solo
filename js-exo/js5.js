// 5.1 ⭐ Le message d'accueil
// Avec la variable prenom qui vaut "Sofia", affiche Bonjour Sofia ! grâce à un gabarit (template literal).
const prenom = "Sofia"
console.log(`Bonjour ${prenom}`)
// 5.2 ⭐ Combien de lettres ?
// Affiche le nombre de caractères du mot Brushing.

console.log("brushing".length)
// 5.3 ⭐ Le nom en majuscules
// Sur le ticket, le nom du client s'écrit en majuscules. Affiche martin en majuscules.
const prenoms = "martin";
console.log(prenoms.toUpperCase())
// 5.4 ⭐⭐ Nettoyer une saisie
// Un client a tapé "   sofia   " dans le formulaire. Nettoie les espaces autour, puis mets le résultat en majuscules.
let nom = "  sofia  "
console.log(nom.trim())

// 5.5 ⭐⭐ Ce plat est-il végé ?
// Le nom du plat est "Burger végé maison". Affiche s'il contient le mot végé, puis s'il contient poulet.
const nomPlat = "Burger végé maison"
console.log(nomPlat.includes("végé"))
console.log(nomPlat.includes("poulet"))
// 5.6 ⭐⭐ Les initiales
// Avec prenom = "Sofia" et nom = "Martin", affiche les initiales SM.
const prenm = "Sofia" ;
const nm = "Martin" ;
