async function fetchRecipes() {
  try {
    const response = await fetch(
      "https://dummyjson.com/recipes?limit=10&skip=10&select=name,instructions"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.recipes;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return []; // Handle error gracefully, return empty array for now
  }
}

async function displayRecipes() {
  const recipes = await fetchRecipes();
  const recipeCards = document.querySelectorAll(".recipe-card");

  if (!recipes.length) {
    console.warn("No recipes found to display");
    return;
  }

  recipes.forEach((recipe, index) => {
    const recipeCard = recipeCards[index];
    recipeCard.querySelector(".recipe-instructions").textContent =
      recipe.instructions[0];
  });
}

function toggleRecipe(event) {
  const clickedCard = event.currentTarget;
  const instructions = clickedCard.querySelector(".recipe-instructions");
  instructions.classList.toggle("hidden"); // Toggle visibility

  const plusMinus = clickedCard.querySelector(".plus"); // Assuming a plus/minus element exists
  if (plusMinus) {
    plusMinus.textContent = instructions.classList.contains("hidden")
      ? "+"
      : "-";
  }
}

displayRecipes(); // Call to fetch and display recipes

const recipeCards = document.querySelectorAll(".recipe-card");
recipeCards.forEach((card) => card.addEventListener("click", toggleRecipe));
