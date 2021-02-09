const recipe = {
  name: "Spaghetti Bolognese",
  ingredients: ["egg", "salt"],
}

const added = {
  ...recipe,
  ingredients: [...recipe.ingredients, "cream"]
};

const updated = {
  ...recipe,
  ingredients: recipe.ingredients.map(ingredient =>
    ingredient === "egg" ? "egg white" : ingredient
  )
};

const removed = {
  ...recipe,
  ingredients: recipe.ingredients.filter(ingredient => ingredient !== "egg")
};