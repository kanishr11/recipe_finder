const searchForm = document.querySelector('form');
const searchInput = document.querySelector('.input-search');
const searchButton = document.querySelector('#submit');
const resultList = document.querySelector('#result-container');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchRecipes();
})

async function searchRecipes() {
    const searchValue = searchInput.value.trim();
    const app_key = '1cb9938e26e54b68f411d80d5f40b7c8';
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchValue}&app_id=25a0b439&app_key=${app_key}`);
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    displayRecipes(data.hits);
}


function displayRecipes(recipes) {
    let html = '';
    recipes.forEach(recipe => {
        html += `
        <article class="card">
            <img src=${recipe.recipe.image} alt=${recipe.recipe.label}>
            <div class="card-content">
                <h2>${recipe.recipe.label}</h2>
                <ol>${recipe.recipe.ingredientLines.map(ingredient=>`<li>${ingredient}</li>`)}</ol>
                <div class="footer">
                <a href=${recipe.recipe.url} class="btn">Read More</a>
                </div>
            </div>
        </article>
        `;
    });
    resultList.innerHTML = html;
}


{/* <header>
      <h2>${recipe.recipe.label}</h2>
    </header>
    <img src=${recipe.recipe.image} alt=${recipe.recipe.label}>
    <div class="content">
        <ol>
            ${recipe.recipe.ingredientLines.map(ingredient => `<li>${ingredient}</li>`)}    
        </ol>    </div>
    <footer><a href=${recipe.recipe.url} target="_blank" >View Recipe</a></footer> */}