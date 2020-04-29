import Search from "./models/Search"
import Recipe from "./models/Recipe"
import { elements, renderLoader, clearLoader } from "./views/base";
import * as searchView from "./views/searchView"
import * as recipeView from "./views/recipeView"
import List from "./models/List";
import * as listView from "./views/listView";
import Likes from "./models/Likes";
import * as likesView from "./views/likesView";

const state = {};

const controlSearch = async () => {
    const query = searchView.getInput();    

    //Testing 
    // const query = "pizza";

    if (query) {
        state.search = new Search(query);

        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);
        try {
            await state.search.getResults()
            clearLoader();
            searchView.renderResult(state.search.result);

        } catch (err) {
            alert("Something went wrong!");
            clearLoader();
        }
        
    }
}
elements.searchForm.addEventListener("submit", e => {
    e.preventDefault();    
    controlSearch();
})
window.addEventListener("load", e => {
    e.preventDefault();
    controlSearch();
})
window.addEventListener("load", e => {
    if (!state.likes) {
        state.likes = new Likes();
    }
    state.likes.readStorage();
    state.likes.likes.forEach(like => likesView.renderLike(like));
    likesView.toggleLikeMenu(state.likes.getNumLikes());
})


elements.searchResPages.addEventListener("click", e => {
    const btn = e.target.closest(".btn-inline");
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto);
        searchView.clearResults();
        searchView.renderResult(state.search.result, goToPage);
    }
})

    // const recipe = new Recipe(46956);
    // recipe.getRecipe();
    // console.log(recipe);

const controlRecipe = async () => {
    const id = window.location.hash.replace("#", "");
    // console.log(id);
    if (id) {
        recipeView.clearRecipe();
        state.recipe = new Recipe(id);
        renderLoader(elements.recipe);

        if (state.search) {
            searchView.highlightSelected(id);
        }

        try {
            const log = await state.recipe.getRecipe();        
            window.r = JSON.parse(JSON.stringify(state.recipe));
            state.recipe.parseIngredients();
            // console.log(state.recipe);
            state.recipe.calcTime();
            state.recipe.calcServings();

            clearLoader();
            recipeView.renderRecipe(state.recipe, state.likes.isLiked(id));
            // console.log(state.recipe);        
        } catch (err) {
            console.log("Error processing!");
            console.log(err);
        }
    }
}

const controlList = () => {
    if (!state.list) {
        state.list = new List();
    }
    state.recipe.ingredients.forEach(el => {
        const item = state.list.addItem(el.count, el.unit, el.ingredient);
        listView.renderItem(item);
    });
}
window.addEventListener("hashchange", controlRecipe);
window.addEventListener("load", controlRecipe);

const controlLike = () => {
    if (!state.likes) {
        state.likes = new Likes();
    }
    const currentID = state.recipe.id;    

    if (!state.likes.isLiked(currentID)) {
        const newLike = state.likes.addLike(
            currentID,
            state.recipe.title,
            state.recipe.author,
            state.recipe.img
        );

        likesView.toggleLikeBtn(true);
        likesView.renderLike(newLike);
        
    } else {
        state.likes.deleteLike(currentID);

        likesView.toggleLikeBtn(false);
        likesView.deleteLike(currentID);
    }
    likesView.toggleLikeMenu(state.likes.getNumLikes());
}

elements.shopping.addEventListener("click", e => {
    const id = e.target.closest(".shopping__item").dataset.itemid;
    // console.log(id);
    if (e.target.matches(".shopping__delete, .shopping__delete *")) {
        state.list.deleteItem(id);
        listView.deleteItem(id);
    } else if (e.target.matches(".shopping__count--value")) {
        const val = parseInt(e.target.value);        
        state.list.updateCount(id, val);
    }
});

elements.recipe.addEventListener("click", e => {
    if (e.target.matches(".btn-decrease, .btn-decrease *")) {
        if (state.recipe.servings > 1) {                        
            state.recipe.updateServings("dec");
            recipeView.updateServingsIngredients(state.recipe);
        }
    } else if (e.target.matches(".btn-increase, .btn-increase *")) {        
        state.recipe.updateServings("inc");
        recipeView.updateServingsIngredients(state.recipe);
    } else if (e.target.matches(".recipe__btn--add, .recipe__btn--add *")) {
        controlList();
    } else if (e.target.matches(".recipe__love, .recipe__love *")) {
        controlLike();
    }
    // console.log(state.recipe);
})

