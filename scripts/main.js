
// #25 Pickachu https://pokeapi.co/api/v2/pokemon/25/
// #55 Golduck https://pokeapi.co/api/v2/pokemon/55/
// #79 Slowpoke https://pokeapi.co/api/v2/pokemon/79/


// create pokemon container object with constructor function
// store API call in a function that takes in the pokemon-specific url as a param
// call function 3 times after API call to execute (different urls for the param - one for each pokemon)
// store the 3 different function calls in a array (different urls for the param - one for each pokemon)

// create carousel slideshow-like functionality for the pokedex revolving around the array of function calls (ref Munder Difflin Paper Co)
// this functionality is triggered and controlled by the launchpad buttons (.click) along with the proper css animation - put css animation in function calls


class Pokemon {
    constructor(api_url) {
        $(".pokemonImg").html("");
        $(".pokemonInfo").html("");
        let self = this;
        $.ajax({
            type: 'get',
            url: api_url,
            success: (data) => {
                console.log('fresh new Pokemon!')
                self.xyzAllDataResults = data;
                let $pokemonName = $(`<h1 class="pokemonName">${data.name}</h1>`);
                let $pokemonImage = $(`<div class="frame frame-primary mask mask-primary"><img src=${data.sprites.back_default}></div>`);
                    let $frontImg = $(`<div class="frame frame-primary mask mask-primary"><img src=${data.sprites.front_default}></div>`);
                    let $backImg = $(`<div class="frame frame-primary mask mask-primary"><img src=${data.sprites.back_default}></div>`);
                let $hp = $(`<h1 class="hp">HP: ${data.stats[5].base_stat}</h1>`);
                let $attack = $(`<div class="attack">attack: ${data.stats[4].base_stat}</div>`);
                let $defense = $(`<p class="defense">defesne: ${data.stats[3].base_stat}</p>`);
                let $abilities = $("</br><p class='abilities'>ABILITIES:</p>");
                let $abilitiesArr = [];
                data.abilities.forEach((element) => {
                    $abilitiesArr.push($(`<a class="ability" href="${element.ability.url}">${element.ability.name}</a>`));
                });
                $abilities.append($abilitiesArr);

                $('.pokemonImg').append($pokemonImage);
                $('.pokemonInfo').append($pokemonName, $hp, $attack, $defense, $abilities);

                self.name = data.name;
                self.hp = data.stats[5].base_stat;
                self.attack = data.stats[4].base_stat;
                self.defense = data.stats[3].base_stat;
                self.abilitiesList = [];
                data.abilities.forEach((element) => {
                    self.abilitiesList.push(element.ability.name);
                });

                mawuAkumaPokedex[data.name] = self;
            },
            error: (err) => {
                console.log(err)
            }
        });
        console.log(self);
    }

    someCapability (data) {
        return // the damn capability
    }

    anotherCapability (data) {
        return // the other damn capability
    }
}



const mawuAkumaPokedex = {
    all: (PokemonNumber1, PokemonNumber2, PokemonNumber3) => {
        // array of all 3 pokemon objects
        let pokemonArr = [];
        pokemonArr.push(new Pokemon(`https://pokeapi.co/api/v2/pokemon/${PokemonNumber1}/`));
        pokemonArr.push(new Pokemon(`https://pokeapi.co/api/v2/pokemon/${PokemonNumber2}/`));
        pokemonArr.push(new Pokemon(`https://pokeapi.co/api/v2/pokemon/${PokemonNumber3}/`));
        return pokemonArr
    },
    get:  (PokemonNumber) => {
        // return // pokemon object called by its name
        new Pokemon(`https://pokeapi.co/api/v2/pokemon/${PokemonNumber}/`);
        // return this
    }
}




$(document).ready(() => {
    mawuAkumaPokedex.get(55);
})


