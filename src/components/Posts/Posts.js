// == Import

import PostCard from "./PostCard/PostCard";

// == Composant
function Posts() {
    // const for loop, to simulate array of data that will be retrieved from the API
    const arrayForLoop = [1, 2, 3, 4, 5]

  return (
    <div className="flex flex-col px-4">
        <h1 className='font-brandon-fat uppercase tracking-wider text-lele-blue text-center text-xl mt-8'>Société, bien-être, expériences... Je te partage mes pensées et mes folles aventures 😄</h1>
      {
        arrayForLoop.map( (value) => 
            <PostCard
                // should use recipe's id as key
                key={value}
                thumbnail={'https://www.state.gov/wp-content/uploads/2018/11/France-1980x1406.jpg'}
                title={"Non, partir en France ne va pas transformer ta vie en vie de rêve"}
                publishedDate={"6 juin 2023"}
                postId={value}
            />
        )
      }
    </div>
  );
}

// == Export
export default Posts;
