const nom = "awa";
const nom_produit = "ordinateur";
const prix_unitaire = 250000;
const quantite = 2;
const livraison_livraison = 5000;
const taux_tva = 0.18;
let montantTotal= 0;
let montant_tva = 0;
let montant_totalttc = 0;
let montant_final = 0;
let prix_moyenttc = 0;
console.log("nom du client:" + nom);
console.log("nom produit:" + nom_produit);
console.log("prix unitaire:"+ prix_unitaire);
montantTotal = quantite * prix_unitaire;
console.log("montant total est:"+ montantTotal);
montant_tva = montantTotal * taux_tva;
console.log("montant tva:" + montant_tva);
montant_totalttc = montantTotal + montant_tva;
console.log("montant totalttc:"+ montant_totalttc);
montant_final = montant_totalttc + livraison_livraison;
console.log("montant final:"+ montant_final);
prix_moyenttc = montant_totalttc / quantite;
console.log("prix moyen ttc:"+ prix_moyenttc);
console.log(typeof nomclient);
console.log(typeof nom_produit);
console.log(typeof prix_unitaire);
console.log(typeof quantite);
console.log(typeof livraison_livraison);
console.log(typeof taux_tva);
console.log(typeof montantproduit);
console.log(typeof montant_tva);
console.log(typeof montant_totalttc);
controle.log(typeof montant_final);
controle.log(typeof prix_unitaire);


 





