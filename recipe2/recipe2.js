let recipeItems = [
    {

        nameOfItem: 'Biryani',
        stepsOfRecipe: {
            step1: [
                {
                    todo: "wash",
                    time: 1
                },
                {
                    todo: "cut_veggies",
                    time: 1
                },
                {
                    todo: "marinate",
                    time: 5
                }

            ],
            step2: [
                {
                    todo: "wash_rice",
                    time: 1
                },
                {
                    todo: "boil_rice",
                    time: 1
                },
                {
                    todo: "cool",
                    time: 4
                }
            ],
            step3: [
                {
                    todo: "mix",
                    time: 1
                },
                {
                    todo: "saute",
                    time: 1
                },
                {
                    todo: "cook_in_kadai",
                    time: 3
                }
            ],

            step4: [
                {
                    todo: "transfer_to_cooker_and_steam",
                    time: 10
                }
            ]

        }
    },
    {

        nameOfItem: 'non-veg_biryani',
        stepsOfRecipe: {
            step1: [
                {
                    todo: "wash",
                    time: 1
                },
                {
                    todo: "cut_veggies_and_add_chiken",
                    time: 1
                },
                {
                    todo: "marinate",
                    time: 5
                }
            ],
            step2: [
                {
                    todo: "wash_rice",
                    time: 1
                },
                {
                    todo: "boil_rice",
                    time: 1
                },
                {
                    todo: "cool",
                    time: 4
                }
            ],
            step3: [
                {
                    todo: "mix",
                    time: 1
                },
                {
                    todo: "saute",
                    time: 1
                },
                {
                    todo: "cook_in_kadai",
                    time: 3
                }
            ],

            step4: [
                {
                    todo: "transfer_to_cooker_and_steam",
                    time: 10
                }
            ]

        }
    }

]



let y = 0;
let z;
function biryani() {
    console.log("Name of item :- ", recipeItems[y].nameOfItem);
    console.log("steps of recipe :-");

    console.log("steps-1 of recipe :-", recipeItems[y].stepsOfRecipe.step1);
    let time1 = recipeItems[y].stepsOfRecipe.step1[z = 0].time + recipeItems[y].stepsOfRecipe.step1[z += 1].time + recipeItems[y].stepsOfRecipe.step1[z += 1].time;
    console.log("time :- ", time1);


    console.log("steps-2 of recipe :-", recipeItems[y].stepsOfRecipe.step2);
    let time2 = recipeItems[y].stepsOfRecipe.step2[z = 0].time + recipeItems[y].stepsOfRecipe.step2[z += 1].time + recipeItems[y].stepsOfRecipe.step2[z += 1].time;
    console.log("time :- ", time2);

    let time3 = recipeItems[y].stepsOfRecipe.step3[z = 0].time + recipeItems[y].stepsOfRecipe.step3[z += 1].time + recipeItems[y].stepsOfRecipe.step3[z += 1].time;

    if (time1 + time2 == 13) {
        console.log("steps-3 of recipe :-", recipeItems[y].stepsOfRecipe.step3);
        console.log("time :- ", time3);
    } else {
        console.log("step 1 and step2 not completed");

    }

    let time4 = recipeItems[y].stepsOfRecipe.step4[z = 0].time;

    if (time1 + time2 + time3 == 18) {
        console.log("steps-4 of recipe :-", recipeItems[y].stepsOfRecipe.step4);
        console.log("time :- ", time4);
    } else {
        console.log("step 3 not completed");

    }

    if (time1 + time2 + time3 + time4 == 28) {
        console.log("Recipe is Ready");
    } else {
        console.log("recipe not completed");

    }
}

function nonvegbiryani() {
    y += 1;
    console.log("Name of item :- ", recipeItems[y].nameOfItem);
    console.log("steps of recipe :-");

    console.log("steps-1 of recipe :-", recipeItems[y].stepsOfRecipe.step1);
    let time1 = recipeItems[y].stepsOfRecipe.step1[z = 0].time + recipeItems[y].stepsOfRecipe.step1[z += 1].time + recipeItems[y].stepsOfRecipe.step1[z += 1].time;
    console.log("time :- ", time1);


    console.log("steps-2 of recipe :-", recipeItems[y].stepsOfRecipe.step2);
    let time2 = recipeItems[y].stepsOfRecipe.step2[z = 0].time + recipeItems[y].stepsOfRecipe.step2[z += 1].time + recipeItems[y].stepsOfRecipe.step2[z += 1].time;
    console.log("time :- ", time2);

    let time3 = recipeItems[y].stepsOfRecipe.step3[z = 0].time + recipeItems[y].stepsOfRecipe.step3[z += 1].time + recipeItems[y].stepsOfRecipe.step3[z += 1].time;

    if ((time1 + time2) == 13) {
        console.log("steps-3 of recipe :-", recipeItems[y].stepsOfRecipe.step3);
        console.log("time :- ", time3);
    }

    let time4 = recipeItems[y].stepsOfRecipe.step4[z = 0].time;

    if (time1 + time2 + time3 == 18) {
        console.log("steps-4 of recipe :-", recipeItems[y].stepsOfRecipe.step4);
        console.log("time :- ", time4);
    }


    if (time1 + time2 + time3 + time4 == 28) {
        console.log("Recipe is Ready");
    }
}
