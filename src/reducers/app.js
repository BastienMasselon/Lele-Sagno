import {CLOSE_BURGER, CHANGE_FORM_SUBMIT_MESSAGE, TOGGLE_BURGER, CHANGE_FORM_FIELD_ERROR_MESSAGE} from 'actions/app';
import { CHANGE_FIELD_VALUE } from 'actions/user';

const initialState = {
  isBurgerOpen: false,
  newsletterEmail: '',
  newsletterPhone: '', // newsletter honeypot field
  contactEmail: '',
  contactName: '',
  contactContent: '',
  contactWebsite: '', // contact honeypot field
  formSubmitMessage: {
    success: false,
    text: '',
  },
  formFieldErrors: {
    contact: {
      contactEmail: '',
      contactName: '',
      contactContent: '',
    },
    newsletter: {
      newsletterEmail: '',
    }
  },
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {

    case TOGGLE_BURGER: 
        return {
            ...state,
            isBurgerOpen: !state.isBurgerOpen,
        };
        
    case CLOSE_BURGER:
        return {
          ...state,
          isBurgerOpen: false,
        };

    case CHANGE_FORM_SUBMIT_MESSAGE: 
      return {
        ...state,
        formSubmitMessage: {
          success: action.success,
          text: action.message,
        }
      }

    // updating any form field value
    case CHANGE_FIELD_VALUE:
      return {
        ...state,
        [action.field]: action.value,
      };

    case CHANGE_FORM_FIELD_ERROR_MESSAGE :
      return {
        ...state,
        formFieldErrors: {
          ...state.formFieldErrors,
          [action.formName] : {
            ...state.formFieldErrors[action.formName],
            [action.field]: action.message,
          }
        }
      };
        
    default:
      return state;
  }
}

export default reducer;
