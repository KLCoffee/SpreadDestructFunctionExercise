// SPREAD DESTRUCTURING FUNCTIONS EXERCISE

// 1a
const jPDinos = [`Velociraptors`,
                `Tyrannosaurus Rex`,
                `Dilophosaurus`   
]

// 1b
function seeDinos(v, ...t){
    console.log(v);
    console.log(t);
}
seeDinos(`Velociraptors`,`Tyrannosaurus Rex`,`Dilophosaurus`);

// 2a
const jPCharacters = {
    alanGrant: "Sam Neill",
    ellieSattler: "Laura Dern",
    ianMalcolm: "Jeff Goldblum"
}

// 2b
seeCharacters = ({ellieSattler}) => console.log(ellieSattler);
seeCharacters(jPCharacters);

// 3a
const jurassicParkMovies = { 
                park: {
                one: "Jurassic Park",
                two: "The Lost World: Jurassic Park", 
                three: "Jurassic Park III"
            },
                world: {
                four: "Jurassic World", 
                five: "Jurassic World: Fallen Kingdom", 
                six: "Jurassic World: Dominion" 
            }
        };
       
// 3b
function seeJPMovies(jurassicParkMovies({park}, {world})){
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
}

seeJPMovies(jurassicParkMovies);

