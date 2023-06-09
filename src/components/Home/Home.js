// == Import
import verseBackground from 'assets/img/porto.JPG';
import arrowBlack from 'assets/img/arrow-down.svg';
import arrowWhite from 'assets/img/arrow-down-white.svg';
import SlideNav from 'components/SlideNav';
import YoutubeEmbed from 'components/YoutubeEmbed/YoutubeEmbed';
import youtubeLogo from 'assets/img/social media/icons8-youtube.svg';
import { Link } from 'react-router-dom';

// == Composant
function Home() {
  const i = [1, 2, 3, 4, 5]
  return (
    <div>

      {/* == Introduction section == */}
      <section className="text-xl text-center">
        <div>
          <img
            className="object-cover h-96 w-full"
            src="https://scontent-mrs2-1.xx.fbcdn.net/v/t1.6435-9/180606580_302381094791207_3444169882855242130_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9267fe&_nc_ohc=RZk1G_g46AwAX9i72Wf&_nc_ht=scontent-mrs2-1.xx&oh=00_AfAlTr7bxR__Re7KCa5M9bxXDJ1_nca_ry1gmZqnLGWxqg&oe=6485EFB8"
            alt="Lele Sagno smiling"
          >
          </img>
        </div>
        <h1 className='m-2 mt-4'>
          Hello! My name is Lele Sagno, bienvenue dans mon monde! Ici je partage des idées, des recettes et tu peux aussi retrouver mes vidéos!
        </h1>
      </section>

      {/* == Daily verse section == */}
      
      <h2 className="font-brandon-fat text-xl text-lele-orange text-center tracking-wider uppercase mt-8">Verset du jour</h2>

      <section className="relative text-xl mt-4">
        <img src={verseBackground} alt="inspirational landscape" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full p-2 bg-black/40 text-center text-slate-200 [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)]">
          <p className="italic mb-4">"Car je connais les projets que j'ai formés sur vous, dit l'Eternel, projets de paix et non de malheur, afin de vous donner un avenir et de l'espérance."</p>
          <p className="text-lg">Jérémie 29 : 11</p>
        </div>
      </section>

      {/* == Posts overview section == */}

      <h2 className="font-brandon-fat text-xl text-lele-blue text-center tracking-wider uppercase mt-12">dernières publications</h2>

      <section className='mt-4'>
          <SlideNav 
            data={i}
            bgColor={'lele-blue'}
            buttonsColor={'lele-orange'}  
          />
      </section>

      <div className='flex justify-center mt-6'>
        <Link 
          to='/posts'
          className='flex flex-col items-center py-2 px-5 rounded-full shadow-md bg-lele-orange'
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

      <h2 className="font-brandon-fat text-xl text-lele-orange text-center tracking-wider uppercase mt-12">recettes</h2>

      <section className='mt-4'>
          <SlideNav 
            data={i}
            bgColor={'lele-orange'}
            buttonsColor={'lele-blue'}  
          />
      </section>

      <div className='flex justify-center mt-6'>
        <Link 
          to='/recipes'
          className='flex flex-col items-center py-2 px-5 rounded-full shadow-md bg-lele-blue'
        >
          <img 
            src={arrowWhite}
            className='w-7 fill-white animate-bounce'
          />
          <p className='font-brandon-med -mt-1 text-white text-lg'>
            Toutes mes recettes
          </p>
        </Link>
      </div>

      {/* == Last youtube video section == */}

      <h2 className="font-brandon-fat text-xl text-lele-blue text-center tracking-wider uppercase mt-12">ma dernière vidéo</h2>

      <div className='w-full h-96 mt-4'>
        <YoutubeEmbed embedId='rCc5isgY5Qc' />
      </div>

      <div className='text-xl text-center mt-6 mx-6'>
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
          <p className='font-brandon-fat uppercase text-lele-orange underline'>
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
