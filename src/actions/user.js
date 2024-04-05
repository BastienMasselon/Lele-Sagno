// updating user input in the state 
export const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';
export const changeFieldValue = (field, value) => ({
  type: CHANGE_FIELD_VALUE,
  field,
  value,
});

// Sending user's inputs on contact page to Lele via EmailJS library
export const SUBMIT_CONTACT_FORM = 'SUBMIT_CONTACT_FORM';
export const submitContactForm = () => ({
  type: SUBMIT_CONTACT_FORM,
});

// Adding user's input on newsletter form to subscribers list in database
export const SUBMIT_NEWSLETTER_FORM = 'SUBMIT_NEWSLETTER_FORM';
export const submitNewsletterForm = () => ({
  type: SUBMIT_NEWSLETTER_FORM,
});
