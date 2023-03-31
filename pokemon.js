// Class Pokémon
class Pokemon {
    constructor(name, id, size, weight, type, lifePointNumber, firstAttack, secondAttack) {
        this.name = name;
        this.id = id;
        this.size = size;
        this.weight = weight;
        this.type = type;
        this.lifePointNumber = lifePointNumber;
        this.firstAttack = firstAttack;
        this.secondAttack = secondAttack;

    }

    attackMethod(pokemonAttacked) {
        console.log(this.lifePointNumber);
        if (this.lifePointNumber >= 0.2 * pokemonAttacked.lifePointNumber) {

            console.log(this.firstAttack.damageNumber);
            pokemon1.lifePointNumber = pokemon1.lifePointNumber - this.firstAttack.damageNumber;
            console.log(`${pokemonAttacked.name} a perdu des points, il a maintenant ${this.lifePointNumber}`);
        }
        else {
            console.log(this.secondAttack.damageNumber);
            pokemonAttacked.lifePointNumber = pokemon2.lifePointNumber - this.firstAttack.damageNumber;
            console.log(`${pokemonAttacked.name} a perdu des points, il a maintenant ${this.lifePointNumber}`);
        }

        if (this.lifePointNumber == 0) {
            console.log(`${this.name} est KO`);
        }
    }


    // Sélection du premier joueur
    playerSelect(pokemon1, pokemon2) {
        if (Math.random() > 0.5) {
            pokemon1.attackMethod(pokemon2);
            console.log(`${pokemon1.name} lance l'attaque contre ${pokemon2.name}`);
        }
        else {
            pokemon2.attackMethod(pokemon1);
            console.log(`${pokemon2.name} lance l'attaque contre ${pokemon1.name}`);
        }
    }
}
