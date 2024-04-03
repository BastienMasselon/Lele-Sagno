// == Import
import { Link } from 'react-router-dom';
import PropTypesLib from 'prop-types';
import { makeDatePrettier } from 'utils/utils';

// == Composant
function PostCard({ thumbnail, title, content, publishedDate, postId, slug}) {
  const formatedDate = makeDatePrettier(publishedDate);
  return (
    <Link
        to={`/post/${slug}`}
        className="mt-12 bg-lele-blue/5 rounded-xl"
    >
      <div className='w-full '>
        <img 
        src={thumbnail} 
        alt="poilée de nouilles appétissante" 
        className='object-cover h-60 w-full rounded-t-xl'
        />
      </div>
      <div className='p-3 border-l-8 border-lele-blue text-lele-blue rounded-b-xl'>
        <p className='font-brandon-fat uppercase text-md tracking-wide' dangerouslySetInnerHTML={{__html: title}}></p>
        <div className="flex justify-end items-center mt-3 mr-3">
          <span>publié le <time>{formatedDate}</time></span>
        </div>
      </div>
    </Link>
  );
}

PostCard.propTypes = {
  thumbnail: PropTypesLib.oneOfType([
    PropTypesLib.string,
    PropTypesLib.object,
  ]),
  title: PropTypesLib.string.isRequired,
  content: PropTypesLib.string,
  publishedDate: PropTypesLib.string.isRequired,
  postId: PropTypesLib.number.isRequired,
  slug: PropTypesLib.string.isRequired,
}
// == Export
export default PostCard;
