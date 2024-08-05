// == Import

import { useDispatch, useSelector } from "react-redux";
import PostCard from "./PostCard/PostCard";
import noImage from "assets/img/empty-image.png";
import { setDocumentTitle } from "utils/utils";
import { useEffect } from "react";
import { fetchAllPosts } from "actions/apiData";
import Loading from "components/Loading/Loading";

// == Composant
function Posts() {
  setDocumentTitle('Publications');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);
    
  const { postList, loadingPosts } = useSelector((state) => state.data);

  return (
    <section className="py-6 lg:py-0">
        <div className="shell"> 
          <h1 className='font-brandon-fat uppercase tracking-wider text-lele-blue text-center text-xl my-8'>Société, bien-être, expériences... Je te partage mes pensées et mes folles aventures 😄</h1>
          <div className='flex flex-col gap-8 md:flex-row md:flex-wrap md:justify-center px-4 md:px-0 md:py-6'>
            { loadingPosts && <div className="w-full flex justify-center"><Loading /></div>}
            {
              !loadingPosts && postList.map( (post) =>
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
    </section>
  );
}

// == Export
export default Posts;
