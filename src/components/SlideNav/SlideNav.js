// == Import
import './slidenav.css';
import HomeCard from "components/HomeCard/HomeCard";
import PropTypesLib from "prop-types";
import colorVariants from "data/colorVariants";
import noImage from "assets/img/empty-image.png";

// == Composant
function SlideNav({data, bgColor, buttonsColor}) {
    const nbLatestPosts = data.length;
    // saving the 5 latest posts in an array. If there are less than 5 posts, saving the total amount of posts
    const latestPosts = data.slice(0, nbLatestPosts < 4 ? nbLatestPosts : 4);
  return (
    <nav className={`${colorVariants[bgColor]} overflow-y-scroll space-x-6 flex pt-8 pb-4 px-6 scroll-nav`}>
        {
            latestPosts.map((post) => (
                <div 
                    className='bg-white h-72 w-80 w-94 flex-shrink-0 flex flex-col relative shadow-[0_0_6px_0px_rgba(0,0,0,0.5)]' 
                    key={post.id}
                >
                    <HomeCard
                        thumbnail={post._embedded && post._embedded["wp:featuredmedia"] ? post._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url : noImage}
                        title={post.title.rendered}
                        buttonColor={buttonsColor}
                        slug={post.slug}
                    />
                    <p
                        className={`${colorVariants[buttonsColor]} uppercase text-center font-brandon-med text-lg text-white self-center absolute bottom-4 rounded-full p-1 mt-3 w-24`}
                    >
                        lire
                    </p>
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
