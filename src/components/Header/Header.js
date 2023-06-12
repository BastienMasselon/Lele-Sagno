// == Import
import logoLele from 'assets/img/logo-LS.png';
import burgerIcon from 'assets/img/icon-burger.svg';
import closeBurgerIcon from 'assets/img/icon-burger-open.svg'

import { closeBurger, toggleBurger } from 'actions/app';
import BurgerMenu from './BurgerMenu/BurgerMenu';

// Dependencies
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
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
    <header className="fixed w-full top-0 z-50 shadow-[0_1px_3px_1px_rgba(0,0,0,0.2)]">
        <div className="bg-lele-orange h-16 flex justify-between items-center">
          <Link to="/"><img src={logoLele} alt="logo de Lele Sagno" className="w-10 ml-3" /></Link>
          <img src={isBurgerOpen ? closeBurgerIcon : burgerIcon} alt="palmier" onClick={handleClickBurger} className="stroke-white w-14 mr-3" />
        </div>

        <BurgerMenu isOpen={isBurgerOpen} />
    </header>
  );
}

// == Export
export default Header;
