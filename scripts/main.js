
// #25 Pickachu https://pokeapi.co/api/v2/pokemon/25/
// #55 Golduck https://pokeapi.co/api/v2/pokemon/55/
// #79 Slowpoke https://pokeapi.co/api/v2/pokemon/79/


// create pokemon container object with constructor function
// store API call in a function that takes in the pokemon-specific url as a param
// call function 3 times after API call to execute (different urls for the param - one for each pokemon)
// store the 3 different function calls in a array (different urls for the param - one for each pokemon)

// create carousel slideshow-like functionality for the pokedex revolving around the array of function calls (ref Munder Difflin Paper Co)
// this functionality is triggered and controlled by the launchpad buttons (.click) along with the proper css animation - put css animation in function calls


////// NOT DONE YET!!!!!!

// refactor code to separate ajax call and object exention from browser display
// make use of higher order functions
// write functionality for button carousel to shuffle between pokemons 
// document.ready >> getAll() >> show(first)  -- get the data from the Pokedex object, not the API


// has to be deployed on GitPages (github.io)
// has to look like a GameBoy

// implement materialze carousel view for get all method




///////////////////////////////////// OLD CODE //////////////////////////////////////////


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
                let $hp = $(`<h2 class="hp">HP: ${data.stats[5].base_stat}</h2>`);
                let $attack = $(`<div class="attack">attack: ${data.stats[4].base_stat}</div>`);
                let $defense = $(`<p class="defense">defense: ${data.stats[3].base_stat}</p>`);
                let $abilities = $("<p class='abilities'></br></br>abilities:</br></br></p>");
                let $abilitiesArr = [];
                data.abilities.forEach((element) => {
                    $abilitiesArr.push($(`<a class="ability" href="${element.ability.url}">${element.ability.name}</a>`));
                    // $abilitiesArr.push($(`<a class="ability" href="${element.ability.url}">${element.ability.name}</a></br></br></br>`));
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

    call (api_url) {

    }

    someCapability (something) {
        return // the damn capability
    }

    anotherCapability (something) {
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
        $(".pokemonImg").html("");
        $(".pokemonInfo").html("");
        return pokemonArr
    },
    get:  (PokemonNumber) => {
        // return // pokemon object called by its name
        new Pokemon(`https://pokeapi.co/api/v2/pokemon/${PokemonNumber}/`);
        // return this
    }
}




$(document).ready(() => {
    mawuAkumaPokedex.get(25);

    let consoleLeft = document.getElementById("consoleLeft");
    consoleLeft.setAttribute('class', 'slideInLeft');




    let myPokemonNumbers = [25, 55, 79]
    let i = 1;
    let currentPokemon = myPokemonNumbers[i];

    $(".buttonGreen").click(() => {
        // for (let i = 0; i < myPokemonNumbers.length; i++) {

        // }
        // let currentPokemon = myPokemonNumbers[i];
        // currentPokemon = (currentPokemon != myPokemonNumbers.length - 1) ? currentPokemon + 1 : 0;
        // mawuAkumaPokedex.get(myPokemonNumbers[currentPokemon + 1]);

    
      
        mawuAkumaPokedex.get(myPokemonNumbers[i++]);
        // currentPokemon = (currentPokemon != myPokemonNumbers.length - 1) ? currentPokemon + 1 : 0;
    })
    $(".buttonRed").click(() => {
        mawuAkumaPokedex.get(myPokemonNumbers[i - 2]);
    })
})


















///////////////////////////////////////////////////// CODE REFACTORING /////////////////////////////////////////////



// class Pokemon {
//     call (api_url) {
//         let newPokemon = this;
//         $.ajax({
//             type: 'get',
//             url: api_url,
//             success: (data) => {
//                 console.log('fresh new Pokemon!')
//                 newPokemon.xyzAllDataResults = data;
//                 newPokemon.name = data.name;
//                 newPokemon.hp = data.stats[5].base_stat;
//                 newPokemon.attack = data.stats[4].base_stat;
//                 newPokemon.defense = data.stats[3].base_stat;
//                 newPokemon.abilitiesList = [];
//                 newPokemon.abilities.forEach((element) => {
//                     newPokemon.abilitiesList.push(element.ability.name);
//                 });

//                 mawuAkumaPokedex[data.name] = newPokemon;
//             },
//             error: (err) => {
//                 console.log(err)
//             }
//         });
//         console.log(newPokemon);
//     }

//     constructor(api_url) {
        

//     }

//     someCapability (data) {
//         return // the damn capability
//     }

//     anotherCapability (data) {
//         return // the other damn capability
//     }
// }



// const mawuAkumaPokedex = {
//     pokedex: [],
//     all: (PokemonNumber1, PokemonNumber2, PokemonNumber3) => {
//         // array of all 3 pokemon objects
//         pokedex.push(new Pokemon(`https://pokeapi.co/api/v2/pokemon/${PokemonNumber1}/`));
//         pokedex.push(new Pokemon(`https://pokeapi.co/api/v2/pokemon/${PokemonNumber2}/`));
//         pokedex.push(new Pokemon(`https://pokeapi.co/api/v2/pokemon/${PokemonNumber3}/`));
//         $(".pokemonImg").html("");
//         $(".pokemonInfo").html("");
//         return pokedex
//     },
//     get:  (PokemonNumber) => {
//         // return // pokemon object called by its name
//         let singlePokemon = new Pokemon(`https://pokeapi.co/api/v2/pokemon/${PokemonNumber}/`);
//         return singlePokemon
//     },
//     showSingle: (pokemon) => {
//         $(".pokemonImg").html("");
//         $(".pokemonInfo").html("");
//         let $pokemonName = $(`<h1 class="pokemonName">${pokedex[0].name}</h1>`);
//         let $pokemonImage = $(`<div class="frame frame-primary mask mask-primary"><img src=${pokedex[0].sprites.back_default}></div>`);
//             let $frontImg = $(`<div class="frame frame-primary mask mask-primary"><img src=${pokedex[0].sprites.front_default}></div>`);
//             let $backImg = $(`<div class="frame frame-primary mask mask-primary"><img src=${pokedex[0].sprites.back_default}></div>`);
//         let $hp = $(`<h2 class="hp">HP: ${pokedex[0].stats[5].base_stat}</h2>`);
//         let $attack = $(`<div class="attack">attack: ${pokedex[0].stats[4].base_stat}</div>`);
//         let $defense = $(`<p class="defense">defense: ${pokedex[0].stats[3].base_stat}</p>`);
//         let $abilities = $("<p class='abilities'></br></br>abilities:</br></br></p>");
//         let $abilitiesArr = [];
//         pokedex[0].abilities.forEach((element) => {
//             $abilitiesArr.push($(`<a class="ability" href="${element.ability.url}">${element.ability.name}</a>`));
//             // $abilitiesArr.push($(`<a class="ability" href="${element.ability.url}">${element.ability.name}</a></br></br></br>`));
//         });
//         $abilities.append($abilitiesArr);

//         $('.pokemonImg').append($pokemonImage);
//         $('.pokemonInfo').append($pokemonName, $hp, $attack, $defense, $abilities);
//     },
//     showAll: () => {

//     }
// }




// $(document).ready(() => {
//     mawuAkumaPokedex.get(79);
//     mawuAkumaPokedex.showSingle(mawuAkumaPokedex.pokedex[0])
// })






