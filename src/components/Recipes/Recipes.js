// == Import
import { useSelector } from 'react-redux';
import RecipeCard from './RecipeCard/RecipeCard';
import noImage from "assets/img/empty-image.png";
import { setDocumentTitle } from 'utils/utils';


// == Composant
function Recipes() {
    setDocumentTitle('recettes');
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
