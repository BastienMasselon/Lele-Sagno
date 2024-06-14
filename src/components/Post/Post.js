// == Import
import { useEffect } from 'react';
import './post.css';
import arrow from 'assets/img/arrow-down-white.svg';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useParams } from 'react-router-dom';
import { findPost } from 'utils/selectors';
import { makeDatePrettier, setDocumentTitle, unescapeString, unicodeToChar } from 'utils/utils';
import { fetchPost } from 'actions/apiData';
import Loading from 'components/Loading/Loading';

// == Composant
function Post() {
  const dispatch = useDispatch();
  const { currentPost, loadingPost, postError } = useSelector((state) => state.data);
  const post = currentPost;
  let documentTitle = '';

  if (Object.keys(post).length !== 0) {
    documentTitle = post.title.rendered
  }
  setDocumentTitle(unescapeString(documentTitle));

  const { slug } = useParams();
  useEffect(() => {
    dispatch(fetchPost(slug));
  }, []);

  let formatedDate = '';
  if (Object.hasOwn(post, 'date')) {
    formatedDate = makeDatePrettier(post.date);
  }

  if (postError) {
    return <Navigate to="/error" replace={true} />;
  }

  return (
    <div className="post_container flex flex-col text-lg p-4 lg:py-8">
      
      {loadingPost && (
        <div className='flex justify-center'>
          <Loading />
        </div>
      )}

      {!loadingPost && (
      <>
        <h1 
          className="font-brandon-fat uppercase text-xl text-lele-blue mt-2 self-center"
          dangerouslySetInnerHTML={{__html: post.title.rendered}}
        ></h1>
        <p className='italic text-slate-400 self-center mt-1'><time dateTime={post.date}>{formatedDate}</time></p>
        <div 
          dangerouslySetInnerHTML={{__html: post.content.rendered}}
          className='flex flex-col text-xl max-w-fit lg:w-[800px] lg:mx-auto xl:w-[1000px]'
        ></div>
      </>
      )}
      <Link 
        className="flex items-center bg-lele-blue text-white w-fit p-3 rounded-lg font-brandon-med text-lg mt-8 h-12 shadow-md border-b-[4px] border-[#003c59] hover:border-b-2 lg:mx-auto border-box"
        to="/posts"
      >
        <img 
            src={arrow}
            className='w-5 rotate-90'
        />
        <p className='ml-1'>Toutes mes publications</p>
      </Link>
    </div>
  );
}

// == Export
export default Post;
