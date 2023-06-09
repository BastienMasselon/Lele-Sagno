// == Import
import { Link } from 'react-router-dom';
import PropTypesLib from 'prop-types';

// == Composant
function RecipeCard({ thumbnail, title, preparationTime, recipeId}) {
  return (
    <Link
        to={`/recipe/${recipeId}`}
        className="mt-12 bg-lele-blue/5 rounded-xl"
    >
      <div className='w-full '>
        <img 
        src={thumbnail} 
        alt="poilée de nouilles appétissante" 
        className='object-cover h-60 w-full rounded-t-xl'
        />
      </div>
      <div className='p-3 border-l-8 border-lele-orange text-lele-orange rounded-b-xl'>
        <p className='font-brandon-fat uppercase text-md tracking-wide'>{title}</p>
        <div className="flex items-center mt-3">
          <svg 
            viewBox="64.06 64.05 383.77 383.45"
            className='fill-current w-4 mr-2'
          ><path d="M145.4 65c-4.2 1.7-7.4 6.8-7.4 11.8v4.6l30.9 31c20.6 20.8 31.1 32 31.5 33.9 2.2 9.5-8.8 20.1-17.8 17.1-1.3-.5-16.6-14.7-34-31.7-31.1-30.3-31.5-30.7-35.7-30.7-3.5 0-4.7.6-8 3.9s-3.9 4.5-3.9 8.2c0 4.7-3.8.4 44.6 49.9 9.5 9.6 17.5 18.6 17.9 19.8 2.7 9-7.8 19.8-17.2 17.6-1.9-.4-13.1-10.9-33.9-31.5l-31-30.9h-4.7c-8.1 0-14.4 7.8-12.2 15.2 1.2 3.9 61 63.3 69.4 68.9 17.6 11.6 42.3 13.9 60.7 5.5 3.1-1.4 5.9-2.6 6.3-2.6.4 0 4 3.8 8.1 8.5s7.8 8.5 8.2 8.5c.4 0 6.6-5.3 13.8-11.8l13.1-11.7-3.3-3c-1.8-1.7-6.2-5.6-9.7-8.7l-6.4-5.6 2.7-6.2c8.3-18.5 6.5-42.9-4.5-60.1-4.4-6.9-63.2-66.8-68.1-69.5-3-1.6-6.2-1.7-9.4-.4z"/><path d="M375.2 66.1c-11.5 2.4-19.9 5.5-32 11.9-49 25.8-74.1 72.4-60.1 111.9 1.6 4.7 3.1 9.4 3.2 10.3.1 1.1-33.9 32.3-96.3 88.3-53.1 47.6-99.8 89.9-103.8 94-8.5 8.8-15.2 18.8-18.9 28.2-2.1 5.3-2.7 8.6-2.7 15.3-.1 10.1 1.5 13.8 8.3 18.5 4 2.8 4.8 3 13.9 3 9.3 0 10-.2 18.2-4.1 10-4.8 18.1-10.8 26.6-19.6 3.4-3.5 44.3-48.8 90.9-100.8 46.6-52 85.6-95.4 86.6-96.4 1.7-1.9 1.9-1.8 8.1.7 10.3 4.3 14.7 5.1 27.3 5 9.9-.1 13.5-.5 20.8-2.7 18.1-5.4 30.4-13.2 45.3-28.9 24.9-26 38.7-58.4 37.1-86.7-1-16.9-7.6-30.3-19.4-39.2-13.7-10.3-31.5-13.2-53.1-8.7z"/><path d="M283.6 279c-6.4 7.1-12.8 14.3-14.2 15.9l-2.5 3.1 53.2 59.2c29.2 32.6 56.2 62.4 59.8 66.1 8.6 8.9 17.9 15.7 27.7 20.4 7.5 3.6 8.4 3.8 17.6 3.8 9.1 0 9.9-.2 13.9-3 6.7-4.7 8.4-8.4 8.3-18.5 0-7-.5-9.8-2.9-15.5-3.3-8.3-8.1-16-14.4-23.5-4.8-5.7-132.5-121-134-121-.4 0-6.1 5.8-12.5 13z"/></svg>
          <p className='font-bold'>{preparationTime}</p>
        </div>
      </div>
    </Link>
  );
}

RecipeCard.propTypes = {
  thumbnail: PropTypesLib.string.isRequired,
  title: PropTypesLib.string.isRequired,
  preparationTime: PropTypesLib.string.isRequired,
  recipeId: PropTypesLib.number.isRequired,
}
// == Export
export default RecipeCard;
