
// #25 Pickachu https://pokeapi.co/api/v2/pokemon/25/
// #55 Golduck https://pokeapi.co/api/v2/pokemon/55/
// #79 Slowpoke https://pokeapi.co/api/v2/pokemon/79/


// create pokemon container object with constructor function
// store API call in a function that takes in the pokemon-specific url as a param
// call function 3 times after API call to execute (different urls for the param - one for each pokemon)
// store the 3 different function calls in a array (different urls for the param - one for each pokemon)

// create carousel slideshow-like functionality for the pokedex revolving around the array of function calls (ref Munder Difflin Paper Co)
// this functionality is triggered and controlled by the launchpad buttons (.click) along with the proper css animation - put css animation in function calls


const mawuAkumaPokedex = {
    apiCall: (api_url) => {
        $.ajax({
            type: 'get',
            url: api_url,
            success: (data) => {
                console.log(data)
                let $pokemonName = $(`<h1 class="pokemonName">${data.name}</h1>`);
                let $pokemonImage = $(`<div class="frame frame-primary mask mask-primary"><img src=${data.sprites.front_default}></div>`);
                let $hp = $(`<h1 class="hp">${data.stats[5].base_stat}</h1>`);
                let $attack = $(`<div class="attack">${data.stats[4].base_stat}</div>`);
                let $defense = $(`<p class="defense">${data.stats[3].base_stat}</p>`);
                let $abilitiesArr = [];
                data.abilities.forEach((element) => {
                    $abilitiesArr.push($(`<a href="${element.ability.url}">${element.ability.name}</a></br>`));
                });

                $('.pokemonImg').append($pokemonImage);
                $('.pokemonInfo').append($pokemonName, $hp, $attack, $defense, $abilitiesArr);
                // getEachRepo(data.repos_url); // calls the function with the API call to get each repo's name and corresponding link
                // getFollowers(data.followers_url) // calls the function with the API call to get each follower's info
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
        // this.name =  mawuAkumaPokedex.API_call.$pokemonName;
        // this.hp = mawuAkumaPokedex.API_call.$hp;
        // this.attack = mawuAkumaPokedex.API_call.$attack;
        // this.defense = mawuAkumaPokedex.API_call.$defense;
        // this.abilities = mawuAkumaPokedex.API_call.$abilities;
    }

    someCapability (data) {
        return // the damn capability
    }

    anotherCapability (data) {
        return // the damn other capability
    }
}



const all = () => {
    return // array of all 3 pokemon objects
}

const get =  (name) => {
    return // pokemon object called by its name
}







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