// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header/Header';
import Footer from 'components/Footer/Footer';
import Home from 'components/Home/Home';
import Videos from 'components/Videos/Videos';
import Contact from 'components/Contact/Contact';
import Recipes from 'components/Recipes/Recipes';
import Posts from 'components/Posts/Posts';
import { useEffect } from 'react';
import { fetchAllYoutubeVideos } from 'actions/apiData';
import { useDispatch } from 'react-redux';

function App() {
  // using dispatch hook to be able (to call store) to dispatch actions at any moment
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchAllYoutubeVideos());
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
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
