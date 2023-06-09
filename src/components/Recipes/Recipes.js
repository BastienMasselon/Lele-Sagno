// == Import
import RecipeCard from './RecipeCard/RecipeCard';

// == Composant
function Recipes() {
    // const for loop, to simulate array of data that will be retrieved from the API
    const arrayForLoop = [1, 2, 3, 4, 5]

  return (
    <div className="flex flex-col px-4">
        <h1 className='font-brandon-fat uppercase tracking-wider text-lele-orange text-center text-xl mt-8'>Tu es gourmand(e) comme moi ? Je te partage mes recettes préférées 😋</h1>
      {
        arrayForLoop.map( (value) => 
            <RecipeCard
                // should use recipe's id as key
                key={value}
                thumbnail={'https://image.over-blog.com/Wixf7SBJeEE3O1TrCC40HIQaGCk=/filters:no_upscale()/image%2F0651923%2F20190201%2Fob_45741b_wok-legumes-croquants-nouilles-poul.jpg'}
                title={"Nouilles sautées au poulet et aux légumes"}
                preparationTime={"30 minutes"}
                recipeId={value}
            />
        )
      }
    </div>
  );
}

// == Export
export default Recipes;
