// == Import
import logoLele from 'assets/img/logo-LS.png';
import burgerIcon from 'assets/img/icon-burger.svg';
import closeBurgerIcon from 'assets/img/icon-burger-open.svg'

import { toggleBurger } from 'actions/app';
import BurgerMenu from './BurgerMenu/BurgerMenu';

// Dependencies
import { useDispatch, useSelector } from 'react-redux';

// == Composant
function Header() {

  const dispatch = useDispatch();

  function handleClickBurger() {
    dispatch(toggleBurger());
  };

  const { isBurgerOpen } = useSelector((state) => state.app);

  return (
    <header className="fixed w-full top-0 z-50 shadow-[0_1px_3px_1px_rgba(0,0,0,0.2)]">
        <div className="bg-lele-orange h-16 flex justify-between items-center">
          <img src={logoLele} alt="palmier" className="w-10 ml-3" />
          <img src={isBurgerOpen ? closeBurgerIcon : burgerIcon} alt="palmier" onClick={handleClickBurger} className="stroke-white w-14 mr-3" />
        </div>

        <BurgerMenu isOpen={isBurgerOpen} />
    </header>
  );
}

// == Export
export default Header;
