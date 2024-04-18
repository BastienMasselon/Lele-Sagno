// == Import

import { changeFormFieldErrorMessage } from "actions/app";
import { submitContactForm, changeFieldValue } from "actions/user";
import FieldError from "components/Error/FieldError";
import HoneypotField from "components/HoneypotField/HoneypotField";
import { useDispatch, useSelector } from "react-redux";
import { setDocumentTitle } from "utils/utils";
import { isFieldEmpty, isStringLongerThan, validateEmail } from "utils/validators";

// == Composant
function Contact() {
    setDocumentTitle('Contact');
    const { contactEmail, contactName, contactContent, contactWebsite, formFieldErrors } = useSelector( (state) => state.app)
    const dispatch = useDispatch();
    const handleChangeContactFields = (evt) => {
        dispatch(changeFieldValue(evt.target.name, evt.target.value));

        // validating user's input (only if it is not honeypot field)
        if (evt.target.name !== 'contactWebsite') {
            switch (evt.target.name) {
                case 'contactEmail' :
                    if (!validateEmail(evt.target.value)) {
                        dispatch(changeFormFieldErrorMessage('contact', evt.target.name, 'Veuillez entrer une adresse email valide (exemple : "james.bond@gmail.com")'));
                        break;
                    } 
                    else {
                        dispatch(changeFormFieldErrorMessage('contact', evt.target.name, ''));
                    }
                    break;
                case 'contactName' :
                        dispatch(changeFormFieldErrorMessage('contact', evt.target.name, isFieldEmpty(evt.target.value) ? 'Ce champ est requis' : ''));
                        break;
                case 'contactContent' :
                    if (isFieldEmpty(evt.target.value)) {
                        dispatch(changeFormFieldErrorMessage('contact', evt.target.name, 'Ce champ est requis'));
                        break;
                    }
                    else if (!isStringLongerThan(evt.target.value, 10)) {
                        dispatch(changeFormFieldErrorMessage('contact', evt.target.name, 'Veuillez écrire un message d\'au moins 10 caractères'));
                        break;
                    }
                    else {
                        dispatch(changeFormFieldErrorMessage('contact', evt.target.name, ''));
                    }
            }
        }
    }
    const handleSubmitContactForm = (evt) => {
        evt.preventDefault();
        // Checking for form errors before trying to send it
        const isValid = Object.values(formFieldErrors.contact).every((error) => error === '');
        // also checking if honeypot has been filled before sending form
        if (isValid && contactEmail.trim() !== '' && contactWebsite.trim() === '') dispatch(submitContactForm());
    }
    

  return (
      <div className="md:py-6">
      <p className="text-center px-4 pt-4 text-xl">Une demande, une info, un message ? N'hésite pas à me contacter ! :)</p>

        <form 
            className="p-4 flex flex-col md:w-[36rem] md:mx-auto"
            onSubmit={handleSubmitContactForm}
        >
            <label
                className="flex flex-col text-lg mt-6"
            >
                <p className="bg-lele-blue text-white rounded-t w-fit px-2">E-mail*</p>
                <input 
                    className="text-xl border border-lele-blue/60 rounded-b rounded-tr h-10 p-1"
                    type="email"
                    name="contactEmail"
                    value={contactEmail}
                    onChange={handleChangeContactFields}
                    placeholder='Votre adresse mail'
                    required
                />
                {formFieldErrors.contact.contactEmail !== '' ? <FieldError message={formFieldErrors.contact.contactEmail}/> : '' }
            </label>
                
            <label
                className="flex flex-col text-lg mt-8"
            >
                <p className="bg-lele-blue text-white rounded-t w-fit px-2">Nom*</p>
                <input 
                    className="text-xl border border-lele-blue/60 rounded-b rounded-tr h-10 p-1"
                    type="text"
                    name="contactName"
                    value={contactName}
                    onChange={handleChangeContactFields}
                    placeholder='Votre nom/pseudonyme'
                    required
                />
                {formFieldErrors.contact.contactName !== '' ? <FieldError message={formFieldErrors.contact.contactName}/> : '' }
            </label>
            
            <HoneypotField name='contactWebsite' value={contactWebsite} onChange={handleChangeContactFields}/>

            <label
                className="flex flex-col text-lg mt-8"
            >
                <p className="bg-lele-blue text-white rounded-t w-fit px-2">Message*</p>
                <textarea
                    className="text-xl border border-lele-blue/60 rounded-b rounded-tr p-1"
                    name="contactContent"
                    value={contactContent}
                    onChange={handleChangeContactFields}
                    rows={6}
                    placeholder="Ecrivez votre message ici"
                    required
                />
                {formFieldErrors.contact.contactContent !== '' ? <FieldError message={formFieldErrors.contact.contactContent}/> : '' }
            </label>

            <p className="mt-6">* : champs obligatoires</p>

            <div className='flex justify-center items-center text-xl bg-lele-blue rounded-md px-4 mt-2 h-11 w-fit text-slate-100 self-center shadow-md hover:cursor-pointer hover:bg-lele-orange hover:text-black active:bg-lele-blue'>
                <input
                    type="submit"
                    value="Envoyer"
                    className="font-brandon-med uppercase tracking-wider hover:cursor-pointer"  
                />
                <svg 
                    className="h-6 fill-current pl-3"
                    viewBox="0.5 0 99.02 99.43">
                    <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)">
                    <path d="M490 737 c-303 -164 -485 -268 -485 -277 0 -10 44 -29 140 -61 139 -45 140 -46 138 -75 -2 -16 -8 -78 -13 -137 -10 -105 -9 -127 10 -127 5 0 49 45 96 99 l88 100 138 -131 c83 -78 143 -127 148 -122 13 13 252 973 245 985 -4 5 -9 9 -13 9 -4 0 -225 -118 -492 -263z m350 -235 c-59 -238 -110 -435 -112 -437 -2 -3 -56 48 -120 113 l-116 117 174 239 c96 131 174 245 174 252 0 8 -6 14 -13 14 -8 0 -124 -89 -259 -198 -134 -109 -249 -202 -256 -205 -15 -10 -237 62 -226 73 11 10 858 469 861 467 1 -1 -47 -197 -107 -435z m-147 136 c-6 -7 -69 -94 -141 -193 -73 -99 -157 -207 -187 -240 l-56 -60 6 90 c3 50 8 98 11 107 4 15 357 308 371 308 3 0 1 -6 -4 -12z"/>
                    </g>
                </svg>
            </div>
        </form>

    </div>
  );
}

// == Export
export default Contact;
