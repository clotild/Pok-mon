// Attaque méthode

let attack1 = new Attack('statik', 10);
let attack2 = new Attack('paratonnerre', 25);
let attack3 = new Attack('adaptabilité', 9);
let attack4 = new Attack('anticipation', 15);
let pokemon1 = new Pokemon('Pikachu', 025, 40, 6, 'electrique', 82, attack1, attack2);
let pokemon2 = new Pokemon('Evoli', 133, 30, 6.5, 'normal', 70, attack3, attack4);
console.log(pokemon1, pokemon2);
pokemon1.attackMethod(pokemon2);
pokemon2.attackMethod(pokemon1);
pokemon1.playerSelect(pokemon1, pokemon2);
pokemon2.playerSelect(pokemon1, pokemon2);
while
    (pokemon1.lifePointNumber > 0 || pokemon2.lifePointNumber > 0) {
    pokemon1.attackMethod(pokemon2);
    pokemon2.attackMethod(pokemon1);
}



