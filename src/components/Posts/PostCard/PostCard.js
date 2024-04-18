// == Import
import { Link } from 'react-router-dom';
import PropTypesLib from 'prop-types';
import { makeDatePrettier, makeExcerpt } from 'utils/utils';

// == Composant
function PostCard({ thumbnail, title, content, publishedDate, postId, slug}) {
  const formatedDate = makeDatePrettier(publishedDate);
  return (
    <Link
        to={`/post/${slug}`}
        className="overflow-hidden bg-lele-blue/5 rounded-xl rounded-bl-sm md:w-2/5 xl:w-[30%] 2xl:w-[20%]"
    >
      <div className='w-full '>
        <img 
        src={thumbnail} 
        alt="poilée de nouilles appétissante" 
        className='object-cover h-60 lg:h-52 w-full rounded-t-xl xl:h-60'
        />
      </div>
      <div className='p-3 h-full border-l-[12px] border-lele-blue text-lele-blue rounded-b-xl'>
        <p className='font-brandon-fat uppercase text-md tracking-wide' dangerouslySetInnerHTML={{__html: makeExcerpt(title)}}></p>
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
