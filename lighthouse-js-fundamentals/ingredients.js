const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];


let i=0;

while (i< ingredients.length) {
	console.log(ingredients[i]);
		i++;
}


for (let item of ingredients)
{
	console.log(item);
}

i= ingredients.length - 1;

while (i >= 0) 
{
        console.log(ingredients[i]);
                i--;
}

