// == Import

import { Link } from "react-router-dom";
import PropTypesLib from 'prop-types';
import colorVariants from "data/colorVariants";


// == Composant
function HomeCard({thumbnail, title, buttonColor, slug}) {
  return (
    <Link 
        className='flex flex-col items-center'
        to={`/post/${slug}`}
    >
        <div className='w-full'>
            <img 
                src={thumbnail}
                className='object-cover h-32 w-full'
            />
        </div>
        <p className='text-xl font-semibold text-gray-600 leading-6 p-3' dangerouslySetInnerHTML={{__html: title}}></p>
        {/* <p
            className={`${colorVariants[buttonColor]} uppercase text-center font-brandon-med text-lg text-white rounded-full p-1 mt-3 w-24`}
        >
            lire
        </p> */}
    </Link>
  );
}

HomeCard.propTypes = {
    thumbnail: PropTypesLib.string,
    title: PropTypesLib.string.isRequired,
    buttonColor: PropTypesLib.string,
    slug: PropTypesLib.string.isRequired,
};

// == Export
export default HomeCard;
