// == Import
import { changeFormFieldErrorMessage } from 'actions/app';
import { changeFieldValue, submitNewsletterForm } from 'actions/user';
import fbLogo from 'assets/img/social media/icons8-facebook.svg';
import instaLogo from 'assets/img/social media/icons8-instagram.svg';
import youtubeLogo from 'assets/img/social media/icons8-youtube.svg';
import FieldError from 'components/Error/FieldError';
import HoneypotField from 'components/HoneypotField/HoneypotField';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { validateEmail } from 'utils/validators';

// == Composant
function Footer() {
  const dispatch = useDispatch();
  const { newsletterEmail, newsletterPhone,  formFieldErrors } = useSelector((state) => state.app);

  const handleChange = (evt) => {
    dispatch(changeFieldValue(evt.target.name, evt.target.value));

    // testing assertions only if field is not a honeypot
    if ( evt.target.name !== 'newsletterPhone') {
      if (!validateEmail(evt.target.value)) {
        dispatch(changeFormFieldErrorMessage('newsletter', evt.target.name, 'Veuillez entrer une adresse email valide (exemple : "james.bond@gmail.com")'));
      } 
      else {
        dispatch(changeFormFieldErrorMessage('newsletter', evt.target.name, ''));
      }
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const isValid = Object.values(formFieldErrors.newsletter).every((error) => error === '');
    // Only send form if it is valid and honeypot field is not filled
    if (isValid && newsletterEmail.trim() !== '' && newsletterPhone.trim() === '') dispatch(submitNewsletterForm());
  }

  return (
    <footer className="mt-10 p-4 bg-lele-blue text-slate-200 lg:flex lg:justify-center">
      <div className='flex flex-col items-center lg:w-fit '>
        <form 
          className='flex flex-col justify-center text-black w-11/12'
          onSubmit={handleSubmit}
        >
          <div className='text-slate-200'>
            <p className='font-brandon-med text-lg'>Ne rate aucune de mes publications !</p>
            <p>Reçois une notification directement dans ta boîte mail.</p>
          </div>
          <HoneypotField 
            name='newsletterPhone'
            value={newsletterPhone}
            onChange={handleChange}
          />
          <div className='flex flex-col lg:flex-row'>
            <div className='lg:w-80 lg:mr-3'>
              <input
                type="email"
                name="newsletterEmail"
                placeholder='Votre adresse mail'
                required
                value={newsletterEmail}
                onChange={handleChange}
                className='w-full rounded-md h-8 mt-2 p-2 lg:w-full'
              />
              {formFieldErrors.newsletter.newsletterEmail !== '' ? <FieldError message={formFieldErrors.newsletter.newsletterEmail}/> : '' }
            </div>
            <input
              type="submit"
              value="S'inscrire"
              className='font-brandon-med text-lg bg-lele-orange text-lele-blue rounded-md px-2 mt-2 h-8 hover:cursor-pointer hover:shadow-lg hover:text-black'
            />
          </div>
        </form>
      </div>

      {/* social media section */}
      <div className='flex center justify-evenly mt-4 lg:items-center lg:ml-8'>
        <Link 
            to='https://www.facebook.com/lelesagno'
            target='_blank'
            rel="noopener noreferrer"
            className='w-12 lg:mx-3'
        >
            <img src={fbLogo}></img>
        </Link>
        <Link
            to='https://www.instagram.com/lelesagno/'
            target='_blank'
            rel="noopener noreferrer"
            className='w-12 lg:mx-3'
        >
            <img src={instaLogo}></img>
        </Link>
        <Link
            to='https://www.youtube.com/@lelesagno1187'
            target='_blank'
            rel="noopener noreferrer"
            className='w-12 lg:mx-3'
        >
            <img src={youtubeLogo}></img>
        </Link>
      </div>
    </footer>
  );
}

// == Export
export default Footer;
