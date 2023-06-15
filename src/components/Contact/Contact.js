// == Import

import { submitContactForm, changeFieldValue } from "actions/user";
import FormModal from "components/FormModal/FormModal";
import { useDispatch, useSelector } from "react-redux";

// == Composant
function Contact() {
    const { contactEmail, contactName, contactContent, contactSubmitMessage } = useSelector( (state) => state.app)
    const dispatch = useDispatch();
    const handleChange = (evt) => {
        dispatch(changeFieldValue(evt.target.name, evt.target.value));
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch(submitContactForm());
    }
    

  return (
    <div className="">
      <p className="text-center px-4 pt-4 text-xl">Une demande, une info, un message ? N'hésite pas à me contacter ! :)</p>

        <form 
            className="p-4 flex flex-col"
            onSubmit={handleSubmit}
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
                    onChange={handleChange}
                    placeholder='Votre adresse mail'
                    required
                />
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
                    onChange={handleChange}
                    placeholder='Votre nom/pseudonyme'
                    required
                />
            </label>
            <label
                className="flex flex-col text-lg mt-8"
            >
                <p className="bg-lele-blue text-white rounded-t w-fit px-2">Message*</p>
                <textarea
                    className="text-xl border border-lele-blue/60 rounded-b rounded-tr p-1"
                    name="contactContent"
                    value={contactContent}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Ecrivez votre message ici"
                    required
                />
            </label>

            <p className="mt-6">* : champs obligatoires</p>

            <div className='flex justify-center items-center text-xl bg-lele-blue rounded-md px-4 mt-2 h-11 w-fit text-slate-100 self-center shadow-md'>
                <input
                    type="submit"
                    value="Envoyer"
                    className="font-brandon-med uppercase tracking-wider"  
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

        {(contactSubmitMessage.text !== '') && <FormModal success={contactSubmitMessage.success} message={contactSubmitMessage.text} />}
    </div>
  );
}

// == Export
export default Contact;
