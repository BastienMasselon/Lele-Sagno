// == Import
import './slidenav.css';
import Card from "components/Card/Card";
import PropTypesLib from "prop-types";
import colorVariants from "data/colorVariants";

// == Composant
function SlideNav({data, bgColor, buttonsColor}) {

  return (
    // linear gradient idea: bg-gradient-to-bl from-lele-orange/90 to-lele-blue/90
    <nav className={`${colorVariants[bgColor]} overflow-y-scroll space-x-6 flex pt-8 pb-4 px-6 scroll-nav`}>
        {
            data.map((value) => (
                <div 
                    className='bg-white h-72 w-80 w-94 flex-shrink-0 shadow-[0_0_6px_0px_rgba(0,0,0,0.5)]' 
                    key={value}
                >
                    <Card
                        thumbnail="https://static1.mclcm.net/iod/images/v2/69/citytheque/localite_101_466/1200x630_100_300_000000x30x0.jpg"
                        title="Un titre de publication tout ce qu'il y a de plus commun en l'absence d'inspiration, pas mal non ?"
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
