// == Import
import './post.css';
import arrow from 'assets/img/arrow-down-white.svg';
import { useSelector } from 'react-redux';
import { Link, Navigate, useParams } from 'react-router-dom';
import { findPost } from 'utils/selectors';
import { makeDatePrettier } from 'utils/utils';

// == Composant
function Post() {
  const { postList } = useSelector((state) => state.data);
  // getting the post slug from url
  const { slug } = useParams();
  // find the post matching the slug
  const post = findPost(postList, slug);
  console.log(post);
  
  // send user to error page if article does not exist
  if (!post) {
    return <Navigate to="/error" replace={true} />;
  }
  
  const formatedDate = makeDatePrettier(post.date);
  return (
    <div className="post_container flex flex-col text-lg p-4">
      {/* <h1 className="font-brandon-fat uppercase text-xl text-lele-blue mt-4">Non, partir en France ne va pas transformer ta vie en vie de rêve</h1>
      <div className="mt-5 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet mauris rhoncus, suscipit ante eu, maximus neque. Nunc id massa sapien. Suspendisse vel orci quis nulla iaculis convallis dictum id orci. Sed convallis, urna sed semper elementum, justo eros auctor nunc, nec bibendum quam eros vel tortor. Pellentesque sit amet urna congue, egestas turpis id, aliquam nunc. Curabitur viverra augue non tortor rutrum, non tincidunt mi euismod. Donec egestas enim sed nulla tincidunt, eu laoreet diam ornare. Quisque vitae consequat orci, quis efficitur erat. Sed cursus orci ac massa porta congue. Suspendisse quis dolor sed sem cursus faucibus eu eget lorem. Maecenas eu sollicitudin diam, vel vehicula nisi. Aliquam erat volutpat. Integer semper mi metus, sed iaculis arcu porttitor eu. Maecenas ut mattis sapien. Ut egestas leo et velit sodales, at ullamcorper leo iaculis. Curabitur consectetur id leo nec mattis.</div>
      <div className="mt-8 self-end"><span>publié le 6 juin 2023</span></div> */}
      <h1 
        className="font-brandon-fat uppercase text-xl text-lele-blue mt-2 self-center"
        dangerouslySetInnerHTML={{__html: post.title.rendered}}
      ></h1>
      <p className='italic text-slate-400 self-center mt-1'><time dateTime={post.date}>{formatedDate}</time></p>
      <div 
        dangerouslySetInnerHTML={{__html: post.content.rendered}}
        className='flex flex-col'
      ></div>
      <Link 
        className="flex items-center bg-lele-blue text-white w-fit p-3 rounded-lg font-brandon-med text-lg mt-8 h-12 shadow-md"
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
