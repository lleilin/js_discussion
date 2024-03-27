let pokemonList = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran", "Nidorina", "Nidoqueen", "Nidoran", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"];

// Answers

// Question 1
document.querySelector("#host-name").innerHTML = "Lei";
document.querySelector("#collaborator-name").innerHTML = "Kristina";
document.querySelector("#collaborator-2-name").innerHTML = "N/A";



// Question 2
// You can also create their own CSS classes in style.css file and use that. 



// Question 3
const firstNameInput = document.getElementById('first_name');
const lastNameInput = document.getElementById('last_name');

firstNameInput.addEventListener('input', () => {
    if (firstNameInput.value === 'John') {
        lastNameInput.value = 'Doe';
    }
});



// Question 4
// Try change event first
// There is another event which fires for every character. This is what we want to use.
const usernameInput = document.getElementById('user_name');
const usernameAlert = document.getElementById('username-alert');

usernameInput.addEventListener('input', () => {
    // const username = usernameInput.value.trim().toLowerCase();
    if (pokemonList.includes(usernameInput.value)) {
        usernameAlert.textContent = 'Username already exists';
    } else {
        usernameAlert.textContent = 'Unique username created';
    }
});

// Question 5
// Try change event first
// There is another event which fires for every character. This is what we want to use.




//Question 6





//Question 7 





//Question 8
const colorPicker = document.querySelector('#color-picker');

colorPicker.addEventListener("input", () => {
    const selectedColor = colorPicker.value;
    console.log(colorPicker.value)
    document.body.style.backgroundColor = selectedColor;
})




//Question 9 

