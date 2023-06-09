// == Import
import { Link } from 'react-router-dom';
import PropTypesLib from 'prop-types';

// == Composant
function PostCard({ thumbnail, title, content, publishedDate, postId}) {
  return (
    <Link
        to={`/post/${postId}`}
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
        <p className='font-brandon-fat uppercase text-md tracking-wide'>{title}</p>
        <div className="flex justify-end items-center mt-3 mr-3">
          <span>publié le <time>{publishedDate}</time></span>
        </div>
      </div>
    </Link>
  );
}

PostCard.propTypes = {
  thumbnail: PropTypesLib.string.isRequired,
  title: PropTypesLib.string.isRequired,
  content: PropTypesLib.string,
  publishedDate: PropTypesLib.string.isRequired,
  postId: PropTypesLib.number.isRequired,
}
// == Export
export default PostCard;
