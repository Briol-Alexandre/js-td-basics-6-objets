/*
OBJETS - PRÉPA 3 : Modélisation d'un compte bancaire
1. Crée un objet compte qui a :
   - une propriété titulaire valant "Alex"
   - une propriété solde valant initialement 0 ;
   - une méthode crediter() ajoutant le montant passé en paramètre (éventuellement négatif)
     au solde du compte ;
   - une méthode decrire() renvoyant la description du compte.
2. Utilise cet objet pour
   - afficher sa description,
   - le créditer de 250,
   - puis le débiter de 80,
   - et enfin afficher de nouveau sa description.
*/
const compte = {
    titulaire: 'Alex',
    solde: 0,
    crediter() {
        this.solde += 200;
        this.solde -= 80;
        return this.solde;
    },
    decrire() {
        return `Le compte de ${this.titulaire} a un solde de ${this.solde}`;
    },
}

let descriptionCompte =compte.decrire();
console.log(descriptionCompte);
console.log('==========');

compte.crediter();
descriptionCompte =compte.decrire();
console.log(descriptionCompte)
