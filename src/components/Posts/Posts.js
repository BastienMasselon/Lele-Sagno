// == Import

import { useSelector } from "react-redux";
import PostCard from "./PostCard/PostCard";
import noImage from "assets/img/empty-image.png";
import { setDocumentTitle } from "utils/utils";

// == Composant
function Posts() {
    setDocumentTitle('Publications');
    
    const { postList } = useSelector((state) => state.data);

  return (
    <div className="px-4 md:py-6">
        <h1 className='font-brandon-fat uppercase tracking-wider text-lele-blue text-center text-xl my-8'>Société, bien-être, expériences... Je te partage mes pensées et mes folles aventures 😄</h1>
        <div className='flex flex-col gap-8 md:flex-row md:flex-wrap md:justify-center'>
        {
          postList.map( (post) =>
              <PostCard
                  // should use recipe's id as key
                  key={post.id}
                  thumbnail={post.featured_image ? post.featured_image : noImage}
                  title={post.title.rendered}
                  publishedDate={post.date}
                  postId={post.id}
                  slug={post.slug}
              />
          )
        }
      </div>
    </div>
  );
}

// == Export
export default Posts;
