// == Import
import './slidenav.css';
import HomeCard from "components/HomeCard/HomeCard";
import PropTypesLib from "prop-types";
import colorVariants from "data/colorVariants";

// == Composant
function SlideNav({data, bgColor, buttonsColor}) {
    // const nbLatestPosts = data.length;
    // console.log(nbLatestPosts);
    // const latestPosts = data.slice(0, nbPosts < 4 ? nbPosts : 4);
  return (
    <nav className={`${colorVariants[bgColor]} overflow-y-scroll space-x-6 flex pt-8 pb-4 px-6 scroll-nav`}>
        {
            data.map((post) => (
                <div 
                    className='bg-white h-72 w-80 w-94 flex-shrink-0 shadow-[0_0_6px_0px_rgba(0,0,0,0.5)]' 
                    key={Math.random()}
                >
                    <HomeCard
                        thumbnail="https://www.state.gov/wp-content/uploads/2018/11/France-1980x1406.jpg"
                        title={"hey"}
                        buttonColor={buttonsColor}
                    />
                </div>
            ))
        }
    </nav>
  );
}

SlideNav.propTypes = {
    data: PropTypesLib.array.isRequired,
    bgColor: PropTypesLib.string,
    buttonsColor: PropTypesLib.string,
}

// == Export
export default SlideNav;
