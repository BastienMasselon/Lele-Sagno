// import logo from './logo.svg';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import './styles/wordpress/style.min.css';

// Components
import { useEffect } from 'react';
import { fetchAllPosts, fetchAllYoutubeVideos } from 'actions/apiData';
import { useDispatch } from 'react-redux';
import Header from './components/Header/Header';
import Footer from 'components/Footer/Footer';
import Home from 'components/Home/Home';
import Videos from 'components/Videos/Videos';
import Contact from 'components/Contact/Contact';
import Recipes from 'components/Recipes/Recipes';
import Posts from 'components/Posts/Posts';
import Post from 'components/Post/Post';
import Recipe from 'components/Recipe/Recipe';

function App() {
  // using dispatch hook to be able (to call store) to dispatch actions at any moment
  const dispatch = useDispatch();

  // getting location 
  const location = useLocation();

  // using location in effect hook to scroll back to the top of the page every time the user switch pages
  useEffect(
    () => {
      // scroll to top of the page
      window.scrollTo(0, 0)
    },
    // specifying which change triggers the scroll
    [location]
  )
  
  useEffect(() => {
    dispatch(fetchAllYoutubeVideos());
    dispatch(fetchAllPosts());
  }, []);



  return (
    <div className="App font-brandon flex flex-col min-h-screen justify-between">

      <Header />

      <main className="mt-16">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
