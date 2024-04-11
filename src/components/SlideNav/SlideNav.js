// == Import
import './slidenav.css';
import HomeCard from "components/HomeCard/HomeCard";
import PropTypesLib from "prop-types";
import colorVariants from "data/colorVariants";
import noImage from "assets/img/empty-image.png";

// == Composant
function SlideNav({data, bgColor, buttonsColor, postType}) {

    // saving the 5 latest posts in an array. If there are less than 5 posts, saving the total amount of posts
    const nbLatestPosts = data.length;
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
                            thumbnail={post.featured_image  ? post.featured_image  : noImage}
                            title={post.title.rendered}
                            buttonColor={buttonsColor}
                            slug={post.slug}
                            postType={postType}
                        />
                    </div>
                ))
            }
        </nav>
    );
}

SlideNav.defaultProps = {
    bgColor: 'lele-blue',
    buttonsColor: 'lele-orange',
    postType: 'post',
}
SlideNav.propTypes = {
    data: PropTypesLib.array.isRequired,
    bgColor: PropTypesLib.string,
    buttonsColor: PropTypesLib.string,
    postType: PropTypesLib.string.isRequired,
}

// == Export
export default SlideNav;
