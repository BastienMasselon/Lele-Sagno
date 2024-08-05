// == Import
import { useDispatch, useSelector } from 'react-redux';
import RecipeCard from './RecipeCard/RecipeCard';
import noImage from "assets/img/empty-image.png";
import { setDocumentTitle } from 'utils/utils';
import { fetchAllPosts, fetchAllRecipes } from 'actions/apiData';
import { useEffect } from 'react';
import Loading from 'components/Loading/Loading';


// == Composant
function Recipes() {
  setDocumentTitle('recettes');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllRecipes());
  }, []);
  
  const { recipeList, loadingRecipes } = useSelector((state) => state.data);
  return (
    <section className='py-6 lg:py-0'>
      <div className="shell">
        <h1 className='font-brandon-fat uppercase tracking-wider text-lele-orange text-center text-xl my-8'>Tu es gourmand(e) comme moi ? Je te partage mes recettes préférées 😋</h1>
        <div className='flex flex-col gap-8 md:flex-row md:flex-wrap md:justify-center px-4 md:px-0 md:py-6'>
          { loadingRecipes && <div className="w-full flex justify-center"><Loading /></div>}
          {
            !loadingRecipes && recipeList.map( (recipe) =>
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
    </section>
  );
}

// == Export
export default Recipes;
