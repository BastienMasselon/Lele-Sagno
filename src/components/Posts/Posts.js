// == Import

import { useSelector } from "react-redux";
import PostCard from "./PostCard/PostCard";
import noImage from "assets/img/empty-image.png";

// == Composant
function Posts() {
    const { postList } = useSelector((state) => state.data);

  return (
    <div className="flex flex-col px-4">
        <h1 className='font-brandon-fat uppercase tracking-wider text-lele-blue text-center text-xl mt-8'>Société, bien-être, expériences... Je te partage mes pensées et mes folles aventures 😄</h1>
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
  );
}

// == Export
export default Posts;
