// == Import
import { useSelector } from 'react-redux';
import RecipeCard from './RecipeCard/RecipeCard';
import noImage from "assets/img/empty-image.png";


// == Composant
function Recipes() {
    // const for loop, to simulate array of data that will be retrieved from the API
    const arrayForLoop = [1, 2, 3, 4, 5]
    const { recipeList } = useSelector((state) => state.data);

  return (
    <div className="px-4 md:py-6">
      <h1 className='font-brandon-fat uppercase tracking-wider text-lele-orange text-center text-xl my-8'>Tu es gourmand(e) comme moi ? Je te partage mes recettes préférées 😋</h1>
      <div className='flex flex-col gap-8 md:flex-row md:flex-wrap md:justify-center'>
        {
          recipeList.map( (recipe) =>
              <RecipeCard
                  key={recipe.id}
                  thumbnail={recipe.featured_image ? recipe.featured_image : noImage}
                  title={recipe.title.rendered}
                  preparationTime={recipe.acf.preparationTime ? recipe.acf.preparationTime : null}
                  recipeId={recipe.id}
                  slug={recipe.slug}
              />
          )
        }
      </div>
    </div>
  );
}

// == Export
export default Recipes;
