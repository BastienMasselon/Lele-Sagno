// == Import
import './Header.css';

import logoLele from 'assets/img/logo-LS.png';
import burgerIcon from 'assets/img/icon-burger.svg';
import closeBurgerIcon from 'assets/img/icon-burger-open.svg'

import { closeBurger, toggleBurger } from 'actions/app';
import BurgerMenu from './BurgerMenu/BurgerMenu';

// Dependencies
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, NavLink } from 'react-router-dom';
import { useEffect } from 'react';

// == Composant
function Header() {

  const dispatch = useDispatch();
  const { pathname } = useLocation();

  // closing burger menu when user switches page
  useEffect(() => {
    dispatch(closeBurger());
  }, [pathname]);

  // dispatching toggleBurger action when user taps on the burger menu icon
  function handleClickBurger() {
    dispatch(toggleBurger());
  };

  const { isBurgerOpen } = useSelector((state) => state.app);

  return (
    <header className="fixed w-full top-0 z-50 lg:static lg:bg-lele-blue lg:text-lele-orange lg:h-20">
        {/* mobile header */}
        <div className="bg-lele-orange h-16 flex justify-between items-center lg:hidden">
          <Link to="/"><img src={logoLele} alt="logo de Lele Sagno" className="w-10 ml-3" /></Link>
          <img src={isBurgerOpen ? closeBurgerIcon : burgerIcon} alt="palmier" onClick={handleClickBurger} className="stroke-white w-14 mr-3" />
        </div>

        <BurgerMenu isOpen={isBurgerOpen} />

        {/* pc header */}
        <div className='max-[1023px]:hidden flex font-brandon-fat tracking-wider uppercase h-full w-full px-6'>
          <div className='h-full flex items-center'>
            <Link to="/"><img src={logoLele} alt="logo de Lele Sagno" className="w-12" /></Link>
          </div>
          <nav className='h-full w-full flex items-center'>
            <ul className="w-full text-lele-orange text-lg font-bold flex justify-end">
                <li className="px-8 py-2 hover:scale-125 ease-in-out duration-300 text-center">
                <NavLink 
                    to='/' 
                    className={({isActive}) => (isActive ? "active-link" : "") + " flex justify-center"}
                  >
                    <svg 
                      className="text-inherit fill-current w-5 mr-4" 
                      viewBox="0.4 13.01 511.2 485.99">
                      <path d="M246.3 14.6c-3.2 1.2-30.9 25.9-122.6 109.4C-7.6 243.6.5 235.5.5 248.5c.1 10.8 5.6 19.4 15.5 23.9 4 1.8 6.9 2.1 25.7 2.4l21.3.4v106.1c0 118.5-.5 110.5 6.9 115.4l3.4 2.3h135.4l3.4-2.3c7.2-4.8 6.9-1.7 6.9-74.5V357h74v65.2c0 72.8-.3 69.7 6.9 74.5l3.4 2.3h135.4l3.4-2.3c7.4-4.9 6.9 3.1 6.9-115.4V275.2l21.3-.4c18.8-.3 21.7-.6 25.7-2.4 9.9-4.5 15.4-13.1 15.5-23.9 0-13 8.1-4.9-123.1-124.4C260.3 7.4 266.9 12.9 255.6 13.1c-2.8 0-7 .7-9.3 1.5zM346 44.5c.8.8 26.7 24.3 57.5 52.3l56 51 .3-46.6c.3-51.9.3-51.3-6.7-55.9l-3.4-2.3h-52.6c-46 0-52.3.2-51.1 1.5z"/>
                    </svg>
                    accueil 
                  </NavLink>
                </li>

                <li className="px-8 py-2 hover:scale-125 ease-in-out duration-300 text-center">
                  <NavLink 
                    to='/posts' 
                    className={({isActive}) => (isActive ? "active-link" : "") + " flex justify-center"}
                  >
                    <svg 
                      className="text-inherit fill-current w-5 mr-4" 
                      viewBox="0 0.14 511.88 511.86">
                      <path d="M392.3 1.5c-13 3.5-5.5-3.6-181.6 172.3C78.5 306 44.7 340.3 43.5 343.5c-3 8.2-43.5 151.6-43.5 154 0 6.7 7.8 14.5 14.4 14.5 3.4 0 149.9-41.7 155.1-44.1 2.8-1.3 54.2-52.1 169.2-167.1C514.9 124.4 507 132.7 510.5 119.3c2.7-10.2 1.4-21.6-3.6-31.6C504 81.9 431.4 9.1 425 5.6c-9.8-5.3-22.3-6.9-32.7-4.1zm17 29.9c1.8.8 18.3 16.6 37.4 35.7 36.3 36.6 36.3 36.6 34.8 44.7-.5 3.1-3.7 6.7-18.3 21.5L445.5 151l-42.2-42.2L361 66.5l16.8-16.8c9.2-9.3 18.1-17.5 19.7-18.3 3.9-1.7 7.8-1.7 11.8 0zM382.5 130l42 42L294 302.5 163.5 433l-42.2-42.2L79 348.5l130.2-130.2C280.9 146.6 339.7 88 340 88c.3 0 19.4 18.9 42.5 42zM100 412.5c18.9 18.9 34.2 34.6 34 34.8-.8.6-96.3 27.7-96.7 27.4-.4-.5 27.1-96.7 27.7-96.7.3 0 16 15.5 35 34.5z"/>
                    </svg>
                    publications 
                  </NavLink>
                </li>

                <li className="px-8 py-2 hover:scale-125 ease-in-out duration-300 text-center">
                  <NavLink 
                    to='/recipes' 
                    className={({isActive}) => (isActive ? "active-link" : "") + " flex justify-center"}
                  >
                    <svg 
                      className="text-inherit fill-current w-8 mr-4"
                      viewBox="15 118.91 479.51 259.09"
                    >
                      <path d="M127.7 121.4c-1.7 1.6-2.8 3.9-3.2 7.2-.9 5.7-3 9.6-8 14.4-9.9 9.5-13.6 17.5-13.6 29.3-.1 10 3.3 17.6 11.8 26.8 8.3 9 9.3 10.7 9.3 16.1 0 6.7-.9 8.3-9.4 17.7-8.5 9.4-11.5 15.8-11.7 24.5-.2 5.8 1.3 8.9 4.8 10.5 6.4 2.9 12.6-1 13.8-8.6.9-6.3 1.6-7.5 9.1-15.6 3.4-3.8 7.5-9.2 9-12 2.7-4.8 2.9-6 2.9-15.7 0-12.8-1.5-16.4-11.7-27.5-8.2-9.1-9-10.6-9-16.5s.9-7.5 8.8-16.2c8.6-9.3 11.6-15.3 12.2-24.3.4-6.6.3-7.2-2.3-9.8-3.6-3.6-9.1-3.7-12.8-.3zm56.9-.2c-1.8 1.6-2.9 4-3.6 7.7-1.2 6.4-1.7 7.2-10.3 16.9-9.3 10.4-11.1 14.6-11.1 25.7-.1 11.4 2.3 17 11.8 27.4 12.9 13.9 13 19.6.6 32.8-9.1 9.8-12.3 16.3-12.4 25.5-.1 6.4.1 7.1 2.7 9.4 3 2.5 7.5 3.1 10.8 1.4 2.4-1.3 4.9-6.1 4.9-9.5 0-3.9 2.4-7.9 9.7-15.8 9.4-10.2 11.8-15.8 11.7-27.2 0-11.1-1.8-15.2-11.2-26-8.3-9.4-10.2-12.9-10.2-18 0-4.8 1.8-7.9 9.8-16.8 8.6-9.4 11.5-15.4 11.6-24 .1-6.3-.1-7.1-2.7-9.3-3.6-3.1-8.7-3.2-12.1-.2zm56.1.4c-1.7 1.7-2.8 4.2-3.3 7.2-.9 6.2-1.4 7-9.4 15.9-7.9 8.6-10.9 14.2-11.9 21.6-1.6 12.6 2.1 22.5 12.5 33.7 7.5 8 8.4 9.7 8.4 15.4 0 6.3-1.1 8.5-7.7 15.7-10.3 11.1-13.2 16.9-13.4 26.4-.2 5.7 1.3 8.8 4.8 10.4 6.4 2.9 12.6-1 13.8-8.6.9-6.3 1.6-7.5 9.1-15.6 3.4-3.8 7.5-9.2 9-12 2.7-4.8 2.9-6 2.9-15.7 0-12.7-1.6-16.6-11.1-26.9-8.7-9.6-9.4-10.8-9.4-17.1 0-6.3.7-7.6 9.2-16.8 7.9-8.5 11-14.9 11.6-23.7.4-6.6.3-7.2-2.3-9.8-3.7-3.7-9.2-3.7-12.8-.1zM21 296.1c-4.2 1.7-6 4.8-6 11.1 0 12.1 4.2 26.7 11.1 38.6 4.8 8.1 18 20.7 27.9 26.7l8.4 5 115.8.3 115.9.2 6.1-3c18.9-9.4 34.5-27.2 40.4-46.3l1.8-5.7h73.1c80.7 0 76.2.4 78.5-6.4 1.2-3.9.3-7.1-3-10.1-2.2-2-3.8-2-74.5-2.3l-72.3-.3-1.3-3c-2.5-6.2 6.9-5.9-163.6-5.8-99.3 0-156.7.4-158.3 1z"/>
                    </svg>
                    recettes 
                  </NavLink>
                </li>

                <li className="px-8 py-2 hover:scale-125 ease-in-out duration-300 text-center">
                  <NavLink 
                    to='/videos' 
                    className={({isActive}) => (isActive ? "active-link" : "") + " flex justify-center"}
                  >
                    <svg 
                      className="text-inherit fill-current w-6 mr-4" 
                      viewBox="8 15 48 34"
                    >            
                      <path d="M32 15c-17.062 0-19.34.178-21.527 2.428C8.286 19.678 8 23.252 8 32s.286 12.323 2.473 14.572C12.66 48.822 14.938 49 32 49s19.34-.179 21.527-2.428C55.714 44.322 56 40.748 56 32s-.286-12.322-2.473-14.572S49.062 15 32 15zm0 4c13.969 0 17.38.062 18.535 1.232C51.691 21.402 52 24.538 52 32c0 7.462-.309 10.598-1.465 11.768C49.38 44.938 45.97 45 32 45c-13.969 0-17.38-.062-18.535-1.232-1.156-1.17-1.434-4.306-1.434-11.768 0-7.462.278-10.598 1.434-11.768S18.03 19 32 19zm-4.05 6.018v13.964l12.146-7.037-12.147-6.927z" />           
                    </svg>
                    vidéos 
                  </NavLink>
                </li>

                <li className="px-8 py-2 hover:scale-125 ease-in-out duration-300 text-center">
                  <NavLink 
                    to='/contact' 
                    className={({isActive}) => (isActive ? "active-link" : "") + " flex justify-center"}
                  >
                    <svg 
                      className="text-inherit fill-current w-6 mr-4" 
                      viewBox="-0.1 75.97 512.2 360.13"
                    >
                      <path d="M34.5 77.4c-8.4 2.1-14.7 5.7-21.1 12.1C6.9 96 2.9 103.1 1.1 111.8c-1.6 7.6-1.6 281 0 288.4 3.7 17.1 17.7 31.1 34.7 34.7 7.5 1.6 432.9 1.6 440.4 0 17-3.6 31.1-17.8 34.7-34.7 1.6-7.6 1.6-281 0-288.4-3.7-17.2-17.6-31.1-34.7-34.7-8.1-1.7-434.9-1.4-441.7.3zm329 125.7c-53.4 53.3-98.2 97.7-99.7 98.5-3.5 1.8-12.1 1.8-15.6 0-1.5-.8-46.3-45.2-99.7-98.5l-97-97.1h409l-97 97.1zM94.7 320.7 30 385.5v-259l64.7 64.8 64.8 64.7-64.8 64.7zM482 256.2v129.3l-64.7-64.7-64.8-64.8 64.5-64.5c35.5-35.5 64.6-64.5 64.7-64.5.2 0 .3 58.2.3 129.2zm-278.1 45.1c21.5 21.3 24.3 23.7 31.5 27.3l8 3.9h12.5c12.5 0 12.7 0 20.5-3.8 7.3-3.5 9.6-5.5 31.8-27.4l23.9-23.7 64.2 64.2 64.2 64.2h-409l64-64c35.2-35.2 64.2-64 64.4-64 .3 0 11.1 10.5 24 23.3z"/>
                    </svg>
                    contact 
                  </NavLink>
                </li>
            </ul>
      </nav>
        </div>
    </header>
  );
}

// == Export
export default Header;
