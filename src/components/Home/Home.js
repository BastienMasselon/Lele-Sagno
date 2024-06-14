// == Import
import verseBackground from 'assets/img/porto.JPG';
import arrowBlack from 'assets/img/arrow-down.svg';
import arrowWhite from 'assets/img/arrow-down-white.svg';
import SlideNav from 'components/SlideNav/SlideNav';
import leleHomePicture from 'assets/img/lele-home.jpg';
import YoutubeEmbed from 'components/YoutubeEmbed/YoutubeEmbed';
import fbLogo from 'assets/img/social media/icons8-facebook.svg';
import instaLogo from 'assets/img/social media/icons8-instagram.svg';
import youtubeLogo from 'assets/img/social media/icons8-youtube.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setDocumentTitle } from 'utils/utils';
import { useEffect } from 'react';
import { fetchHomeVideo } from 'actions/apiData';

// == Composant
function Home() {
  setDocumentTitle('Accueil');
  const dispatch = useDispatch();
  const { postList, recipeList, homeVideo, loadingHomeVideo } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchHomeVideo());
  }, [])
  
  return (
    <div className='lg:py-8'>

      {/* == Introduction section == */}
      <section className="text-xl text-center w-fit md:flex md:p-6 md:justify-center md:mx-auto">
        <div className='md:w-1/2'>
          <img
            className="object-cover h-96 w-full md:rounded md:max-w-[500px]"
            src={leleHomePicture}
            alt="Lele Sagno"
          >
          </img>
        </div>
        <div className='m-4 mt- md:w-1/2 md:m-4 md:max-w-[500px]'>
          <h1 className='mb-4 md:text-2xl'>
            Hello! My name is Lele Sagno, bienvenue dans mon monde! Ici je partage des idées, des recettes et tu peux aussi retrouver mes vidéos!
          </h1>
          <div className='mt-6'>
            <p className='font-brandon-med md:text-2xl'>Suivez moi :</p>
            <div className='flex center justify-center gap-6 mt-4 lg:items-center lg:gap-1'>
              <Link 
                  to='https://www.facebook.com/lelesagno'
                  target='_blank'
                  rel="noopener noreferrer"
                  className='w-10 h-10 p-1 lg:mx-3 bg-lele-orange rounded-full hover:bg-lele-blue'
              >
                  <img src={fbLogo}></img>
              </Link>
              <Link
                  to='https://www.instagram.com/lelesagno/'
                  target='_blank'
                  rel="noopener noreferrer"
                  className='w-10 h-10 p-1 lg:mx-3 bg-lele-orange rounded-full hover:bg-lele-blue'
              >
                  <img src={instaLogo}></img>
              </Link>
              <Link
                  to='https://www.youtube.com/@lelesagno1187'
                  target='_blank'
                  rel="noopener noreferrer"
                  className='w-10 h-10 p-1 lg:mx-3 bg-lele-orange rounded-full hover:bg-lele-blue'
              >
                  <img src={youtubeLogo}></img>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* == Daily verse section == */}
      
      <h2 className="font-brandon-fat px-2 text-xl text-lele-orange text-center tracking-wider uppercase mt-10 lg:text-2xl">Verset du moment</h2>

      <section className="relative text-xl mt-4 overflow-hidden md:max-w-[700px] md:max-h-[700px] md:mx-auto md:rounded lg:max-w-[700px]">
        <img src={verseBackground} alt="inspirational landscape" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full p-2 bg-black/40 text-center text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)] object-cover">
          <p className="italic mb-4 lg:text-2xl">"Car je connais les projets que j'ai formés sur vous, dit l'Eternel, projets de paix et non de malheur, afin de vous donner un avenir et de l'espérance."</p>
          <p className="text-lg lg:text-xl">Jérémie 29 : 11</p>
        </div>
      </section>

      {/* == Posts overview section == */}

      <h2 className="font-brandon-fat px-2 text-xl text-lele-blue text-center tracking-wider uppercase mt-12 lg:text-2xl">dernières publications</h2>

      <section className='mt-4'>
          <SlideNav 
            data={postList}
          />
      </section>

      <div className='flex justify-center mt-6'>
        <Link 
          to='/posts'
          className='flex flex-col h-[75px] items-center py-2 px-5 rounded-full shadow-md bg-lele-orange border-b-[4px] border-[#99540c] hover:border-b-2 box-border'
        >
          <img 
            src={arrowBlack}
            className='w-7 animate-bounce'
          />
          <p className='font-brandon-med -mt-1 text-lg'>
            Toutes mes publications
          </p>
        </Link>
      </div>

      {/* == Recipes overview section == */}

      <h2 className="font-brandon-fat px-2 text-xl text-lele-orange text-center tracking-wider uppercase mt-12 lg:text-2xl">Mes dernières recettes</h2>

      <section className='mt-4'>
          <SlideNav 
            data={recipeList}
            bgColor={'lele-orange'}
            buttonsColor={'lele-blue'}
            postType='recipe'
          />
      </section>

      <div className='flex justify-center mt-6'>
        <Link 
          to='/recipes'
          className='flex flex-col h-[75px] items-center py-2 px-5 rounded-full shadow-md bg-lele-blue border-b-[4px] border-[#003c59] hover:border-b-2 box-border'
        >
          <img 
            src={arrowWhite}
            className='w-7 fill-white animate-bounce'
          />
          <p className='font-brandon-med -mt-1 text-white text-lg '>
            Toutes mes recettes
          </p>
        </Link>
      </div>

      {/* == Last youtube video section == */}

      <h2 className="font-brandon-fat text-xl text-lele-blue text-center tracking-wider uppercase mt-12 lg:text-2xl">ma dernière vidéo</h2>

      {
        !loadingHomeVideo && (
          <div className='w-full h-96 mt-4 md:max-w-[800px] md:mx-auto'>
            <YoutubeEmbed embedId={homeVideo.id !== undefined ? homeVideo.id : 'T2-V7_gc5Xc'} />
          </div>
        )
      }

      {
        loadingHomeVideo && (
          <p className='text-center'>Chargement...</p>
        )
      }

      <div className='text-xl text-center mt-6 mx-6 lg:text-2xl'>
        <p>Retrouve toutes mes vidéos (recettes, story times, discussions, etc...) sur</p>
        <Link 
          to="https://www.youtube.com/@lelesagno1187" 
          className='flex justify-center items-center mt-2 animate-wiggle'
          target='_blank'
          rel="noopener noreferrer"
        >
          <svg 
            className="text-lele-orange fill-current w-10 mx-2 " 
            viewBox="8 15 48 34">            
            <path d="M32 15c-17.062 0-19.34.178-21.527 2.428C8.286 19.678 8 23.252 8 32s.286 12.323 2.473 14.572C12.66 48.822 14.938 49 32 49s19.34-.179 21.527-2.428C55.714 44.322 56 40.748 56 32s-.286-12.322-2.473-14.572S49.062 15 32 15zm0 4c13.969 0 17.38.062 18.535 1.232C51.691 21.402 52 24.538 52 32c0 7.462-.309 10.598-1.465 11.768C49.38 44.938 45.97 45 32 45c-13.969 0-17.38-.062-18.535-1.232-1.156-1.17-1.434-4.306-1.434-11.768 0-7.462.278-10.598 1.434-11.768S18.03 19 32 19zm-4.05 6.018v13.964l12.146-7.037-12.147-6.927z" />           
          </svg>
          <p className='font-brandon-fat uppercase text-lele-orange underline '>
            Ma chaîne Youtube
          </p>
        </Link>
        <p className='mt-2'>
          ou bien en cliquant <span>
            <Link 
              className='text-lele-blue font-brandon-fat underline'
              to="/videos"
            >ici</Link>
          </span>
          .
        </p>
      </div>
    </div>
  );
}

// == Export
export default Home;
