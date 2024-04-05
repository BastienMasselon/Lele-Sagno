export const TOGGLE_BURGER = 'TOGGLE_BURGER'
export const toggleBurger = () => ({
    type: TOGGLE_BURGER,
});

export const CLOSE_BURGER = 'CLOSE_BURGER';
export const closeBurger = () => ({
  type: CLOSE_BURGER,
});

// Changing the message displayed when user submits the contact form
export const CHANGE_CONTACT_SUBMIT_MESSAGE = 'CHANGE_CONTACT_SUBMIT_MESSAGE';
export const changeContactSubmitMessage = (success, message) => ({
  type: CHANGE_CONTACT_SUBMIT_MESSAGE,
  success,
  message,
});

// Changing the error message of a specific field
export const CHANGE_FORM_FIELD_ERROR_MESSAGE = 'CHANGE_FORM_FIELD_ERROR_VALUE';
export const changeFormFieldErrorMessage = (formName, field, message) => ({
  type: CHANGE_FORM_FIELD_ERROR_MESSAGE,
  formName,
  field,
  message,
});
