// == Import

import { useSelector } from "react-redux";
import PostCard from "./PostCard/PostCard";
import noImage from "assets/img/empty-image.png";

// == Composant
function Posts() {
    // const for loop, to simulate array of data that will be retrieved from the API
    // const arrayForLoop = [1, 2, 3, 4, 5]

    const { postList } = useSelector((state) => state.data);
    console.log(postList[0]._embedded["wp:featuredmedia"][0])

  return (
    <div className="flex flex-col px-4">
        <h1 className='font-brandon-fat uppercase tracking-wider text-lele-blue text-center text-xl mt-8'>Société, bien-être, expériences... Je te partage mes pensées et mes folles aventures 😄</h1>
      {
        postList.map( (post) =>
            <PostCard
                // should use recipe's id as key
                key={post.id}
                thumbnail={post._embedded["wp:featuredmedia"] ? post._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url : noImage}
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
