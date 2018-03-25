
// #25 Pickachu https://pokeapi.co/api/v2/pokemon/25/
// #55 Golduck https://pokeapi.co/api/v2/pokemon/55/
// #79 Slowpoke https://pokeapi.co/api/v2/pokemon/79/


// create pokemon container object with constructor function
// store API call in a function that takes in the pokemon-specific url as a param
// call function 3 times after API call to execute (different urls for the param - one for each pokemon)
// store the 3 different function calls in a array (different urls for the param - one for each pokemon)

// create carousel slideshow-like functionality for the pokedex revolving around the array of function calls (ref Munder Difflin Paper Co)
// this functionality is triggered and controlled by the launchpad buttons (.click) along with the proper css animation - put css animation in function calls



// AJAX call within a JS class

// GetReports.prototype.getResults = function() {
//     var self = this;
//     jQuery.ajax({
//         type      :  'post',
//         dataType  :  'json',
//         url       :  'reporting/getStaffMemberReports',
//         async     :  false,
//         data      :  options,
//         success   :  function(data) {
//             self.results = data;
//             setResult(self.results);
//         };
//     }); 
// }






const mawuAkumaPokedex = {
    apiCall: (api_url) => {
        $.ajax({
            type: 'get',
            url: api_url,
            success: (data) => {
                console.log(data)
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
            },
            error: (err) => {
                console.log(err)
            }
        })
    }
}



class Pokemon {
    constructor(pokemon_url) {
    $(".pokemonImg").html("");
    $(".pokemonInfo").html("");
    mawuAkumaPokedex.apiCall(pokemon_url);
    this.name =  mawuAkumaPokedex.apiCall.$pokemonName;
    this.hp = mawuAkumaPokedex.apiCall.$hp;
    this.attack = mawuAkumaPokedex.apiCall.$attack;
    this.defense = mawuAkumaPokedex.apiCall.$defense;
    this.abilities = mawuAkumaPokedex.apiCall.$abilitiesArr;
    console.log(this);
    }

    someCapability (data) {
        return // the damn capability
    }

    anotherCapability (data) {
        return // the other damn capability
    }
}



const all = (PokemonNumber1, PokemonNumber2, PokemonNumber3) => {
    // array of all 3 pokemon objects
    let pokemonArr = [];
    pokemonArr.push(new Pokemon(`https://pokeapi.co/api/v2/pokemon/${PokemonNumber1}/`));
    pokemonArr.push(new Pokemon(`https://pokeapi.co/api/v2/pokemon/${PokemonNumber2}/`));
    pokemonArr.push(new Pokemon(`https://pokeapi.co/api/v2/pokemon/${PokemonNumber3}/`));
    return pokemonArr
}

const get =  (PokemonNumber) => {
    // return // pokemon object called by its name
    new Pokemon(`https://pokeapi.co/api/v2/pokemon/${PokemonNumber}/`);
    // return this
}


$(document).ready(() => {
    get(25);
})
