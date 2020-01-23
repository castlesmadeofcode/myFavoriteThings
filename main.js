//collecting user input
const foodContainer = document.getElementById("foodList")

const captureFoodInfo = () => {
    const enteredFood = document.getElementById("favoriteFood")
    const enteredRestaurant = document.getElementById("favoriteRestaurant")

    console.log(enteredFood)
    console.log(enteredRestaurant)

    foodContainer.innerHTML += `
        <section>
            <p>Food: ${enteredFood.value}</p>
            <p>Restaurant: ${enteredRestaurant.value}</p>
        </section>
    `
    enteredFood.value = "";
    enteredRestaurant.value = "";
}



document.getElementById("saveEntry").addEventListener("click", captureFoodInfo);