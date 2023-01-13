let x = 0;
function biryani() {
    console.log("Name of item :- ", recipeItems[x].nameOfItem);
    console.log("steps of recipe :-", recipeItems[x].stepsOfRecipe);
}
function non_veg_biryani() {
    x += 1;
    console.log("Name of item :- ", recipeItems[x].nameOfItem);
    console.log("steps of recipe :-", recipeItems[x].stepsOfRecipe);
}


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