console.log("CONNECTED...");

let person = ["Nick", "McClure", 200, 4.5, true];

let personObj = {
    fName : "Nick",
    lName: "McClure",
    height: 200,
    iq: 4.5,
    likesBurgers: true
};

console.log(personObj.height);

console.log(person);

let zoo = [
    {
        animalName: "Mufasa",
        species: "Panthera Leo",
        favFoods: [
            {
                foodName: "Zebra",
                calCount: 3000
            },
            {
                foodName: "Antelope",
                calCount: 2500
            },
            {
                foodName: "Beef",
                calCount: 5000
            }
        ],
        lastDentalAppt: "2000-01-01 BC",
        weight: 540
    },
    {
        animalName: "Tigger",
        species: "Panthera Tigris",
        favFoods: [
            {
                foodName: "Boar",
                calCount: 3000
            },
            {
                foodName: "Small Kids",
                calCount: 2500
            },
            {
                foodName: "Bacon",
                calCount: 5000
            }
        ],
        lastDentalAppt: "2022-01-01 AD",
        weight: 725
    },
    {
        animalName: "Mustafa",
        species: "Moose",
        favFoods: [
            {
                foodName: "Buger",
                calCount: 3000
            },
            {
                foodName: "Pizza",
                calCount: 2500
            }
        ],
        lastDentalAppt: "2023-01-01 AD",
        weight: 100
    }
];

console.log(zoo[0]);
console.log(zoo[0].weight);

//Task: What is the Tiger's Second Favourite Food?:
console.log(zoo[1].favFoods[1]);

//Task: What is the Amount of Calories in Zebra for the Lion?:
console.log(zoo[0].favFoods[0].calCount);

//Task: What is the Total Weight of All Animals in the Zoo?:
let totalWeight = 0;

for(let i = 0; i < zoo.length; i++)
{
    totalWeight += zoo[i].weight;
}

console.log(totalWeight);
//On Seperate lines, Output the FavFoods for All the Animals.:
//The Lion:
console.log("Favourite Foods of the Lion:");
console.log(zoo[0].favFoods[0].foodName);
console.log(zoo[0].favFoods[1].foodName);
console.log(zoo[0].favFoods[2].foodName);

//Loop to Kill Repetition:
for (var i = 0; i < zoo.length; i++)
{
    let animalFavMeal = zoo[i].favFoods;

    for (let j = 0; j < animalFavMeal.length; j++)
    {
       console.log(animalFavMeal[i].foodName); 
    }
}

