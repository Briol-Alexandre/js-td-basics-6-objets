/*****************************
 * 027 - OBJETS - CODING CHALLENGE 4
 */

/*
Souvenons-nous du premier challenge de code où Mark et John comparaient leurs BMIs.
Implémentons à présent la même fonctionnalité avec des objets, des propriétés et des méthodes.
1. Pour chacun, crée un objet avec
    - les propriétés pour leur nom complet, leur poids et leur taille
    - une méthode qui calcule le BMI
        (enregistre le BMI dans l'objet et, en plus, le retourne à partir de la méthode)
2. Affiche dans la console qui a le BMI le plus élevé avec le nom complet et le BMI.
    N'oublie pas qu'il pourrait y avoir un ex æquo.

Rappel: BMI = poids / taille^2 = poids / (taille * taille). (poids en kg and taille en mètres).

BONNE CHANCE 😀
*/
const mark = {
    nom: 'Mark',
    poids: 88,
    taille: 1.78,
    bmi() {
        return this.poids / (this.taille * this.taille);
    }
}
let markBMI = mark.bmi();
console.log(markBMI);

const john = {
    nom: 'John',
    poids: 75,
    taille: 1.68,
    bmi() {
        return this.poids / (this.taille * this.taille);
    }
}
let johnBMI = john.bmi();
console.log(johnBMI);

function calcBMI() {
    if (johnBMI<markBMI){
        console.log(`Le bmi de Mark (${markBMI}) est plus élevé que ceui de John (${johnBMI})`);
    }else if (johnBMI>markBMI){
        console.log(`Le bmi de John (${johnBMI}) est plus élevé que ceui de Mark (${markBMI})`);
    }else{
        console.log(`Mark et John ont le même BMI (${markBMI})`);
    }
}
calcBMI();