import { SUBMIT_CONTACT_FORM } from "actions/user";
import emailjs from '@emailjs/browser';
import DOMPurify, { sanitize } from "dompurify";

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
                console.log(response);
            }, (error) => {
                console.log(error.text);
            });
    }

    default:
      next(action);
      break;
  }
};

export default user;
