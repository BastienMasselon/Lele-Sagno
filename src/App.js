// import logo from './logo.svg';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import './styles/wordpress/style.min.css';

// Components
import { useEffect } from 'react';
import { fetchAllPosts, fetchAllRecipes, fetchAllYoutubeVideos, fetchHomeVideo } from 'actions/apiData';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Footer from 'components/Footer/Footer';
import Home from 'components/Home/Home';
import Videos from 'components/Videos/Videos';
import Contact from 'components/Contact/Contact';
import Recipes from 'components/Recipes/Recipes';
import Posts from 'components/Posts/Posts';
import Post from 'components/Post/Post';
import Recipe from 'components/Recipe/Recipe';
import Loading from 'components/Loading/Loading';
import Error from 'components/Error/Error';
import FormModal from 'components/FormModal/FormModal';

function App() {
  // using dispatch hook to be able (to call store) to dispatch actions at any moment
  const dispatch = useDispatch();

  // getting location 
  const location = useLocation();

  const { loadingPosts, loadingRecipes, loadingVideos, loadingHomeVideo } = useSelector((state) => state.data);
  const { formSubmitMessage } = useSelector((state) => state.app);
  // const isLoading = loadingPosts || loadingRecipes || loadingVideos || loadingHomeVideo;
  
  // using location in effect hook to scroll back to the top of the page every time the user switch pages
  useEffect(
    () => {
      // scroll to top of the page
      window.scrollTo(0, 0)
    },
    // specifying which change triggers the scroll
    [location]
  )
  // jhbkjb
  useEffect(() => {
    dispatch(fetchAllYoutubeVideos());
    dispatch(fetchAllPosts());
    dispatch(fetchAllRecipes());
  }, []);
  
  console.log('homevideo loading ?', loadingHomeVideo);
  
  return (
    <div className="App font-brandon flex flex-col min-h-screen justify-between lg:bg-foret-sacre">
        <>
          <Header />
    
          <main className="mt-16 max-w-[1800px] lg:w-9/12 bg-white lg:m-auto lg:my-20 lg:shadow-[0_0_40px_15px_rgba(0,0,0,0.3)] lg:rounded-sm">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/post/:slug" element={<Post />} />
              <Route path="/recipe/:slug" element={<Recipe />} />
              <Route path="*" element={<Error />} />
            </Routes>

            {(formSubmitMessage.text !== '') && <FormModal success={formSubmitMessage.success} message={formSubmitMessage.text} />}
          </main>
    
          <Footer />
        </>
    </div>
  );
}

export default App;
