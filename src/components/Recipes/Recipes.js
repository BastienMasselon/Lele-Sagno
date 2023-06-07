// == Import
import RecipeCard from './RecipeCard/RecipeCard';

// == Composant
function Recipes() {
    // const for loop, to simulate array of data that will be retrieved from the API
    const arrayForLoop = [1, 2, 3, 4, 5]

  return (
    <div className="flex flex-col px-4">

        <p className='font-brandon-fat uppercase tracking-wider text-lele-orange text-center text-xl mt-8'>Tu es gourmand(e) comme moi ? Je te partage mes recettes préférées 😋</p>
      {
        arrayForLoop.map( (value) => 
            <RecipeCard
                // should use recipe's id as key
                key={value}
                thumbnail={'https://www.recettethermomix.com/wp-content/uploads/2022/04/Nouilles-Sautees-aux-legumes-legeres-.jpg'}
                title={"Nouilles sautées au poulet et aux légumes"}
                preparationTime={"30 minutes"}
            />
        )
      }
    </div>
  );
}

// == Export
export default Recipes;
