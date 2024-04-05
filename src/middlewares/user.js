import { SUBMIT_CONTACT_FORM, SUBMIT_NEWSLETTER_FORM, changeFieldValue } from "actions/user";
import emailjs from '@emailjs/browser';
import DOMPurify, { sanitize } from "dompurify";
import { changeContactSubmitMessage} from "actions/app";
import axios from "axios";

const user = (store) => (next) => (action) => {
  switch (action.type) {

    // Send user's inputs to Lele's email adress using EmailJS library
    case SUBMIT_CONTACT_FORM: {
        const { app: {contactName, contactEmail, contactContent}} = store.getState();
        // Unsafe use of public key for now, request will be called with a back-end API
        const EmailJSApiKey = process.env.REACT_APP_EMAILJS_API_KEY;

        // Sanitizing inputs just in case
        const sanitizedContactEmail = DOMPurify.sanitize(contactEmail);
        const sanitizedContactName = DOMPurify.sanitize(contactName);
        const sanitizedContactContent = DOMPurify.sanitize(contactContent);

        // Preparing email body's parameters in an object
        const templateParams = {
            'from_name': sanitizedContactName,
            'message': sanitizedContactContent,
            'user_email': sanitizedContactEmail,
        };

        // calling emailjs send function, giving him service ID, form template ID, params and public key.
        // https://dashboard.emailjs.com/admin
        emailjs.send('contact_service', 'contact_form', templateParams, EmailJSApiKey)
            .then((response) => {
                // if request is successfull
                if (response.status === 200) {
                    // emptying form fields
                    store.dispatch(changeFieldValue('contactEmail', ''));
                    store.dispatch(changeFieldValue('contactName', ''));
                    store.dispatch(changeFieldValue('contactContent', ''));
                    // Opening modal to notify user the message has been successfully sent
                    store.dispatch(changeContactSubmitMessage(true, 'Votre message a bien été envoyé à Lele Sagno'));
                }
            }, (error) => {
                // Notifying the user that the message couldn't be sent.
                store.dispatch(changeContactSubmitMessage(false, "Votre message n'a pas pu être envoyé. Veuillez ré-essayer."));
            });
    }

    case SUBMIT_NEWSLETTER_FORM : {
        const requestUrl = process.env.REACT_APP_WP_NEWSLETTER_API_DOMAIN + 'subscribers';
        console.log(requestUrl);
        const auth = {
            username: process.env.REACT_APP_WP_NEWSLETTER_CLIENT_KEY,
            password: process.env.REACT_APP_WP_NEWSLETTER_CLIENT_SECRET,
        }
        const data = {
            email: "user3@example.com",
            status: "confirmed",
        }
        
        // 201 : successfully created
        // 400 : email address already exists
        // 401 : authentication is missing or invalid
        axios.post(requestUrl, data, { auth: auth })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    default:
      next(action);
      break;
  }
};

export default user;
