import {CLOSE_BURGER, CHANGE_CONTACT_SUBMIT_MESSAGE, TOGGLE_BURGER} from 'actions/app';
import { CHANGE_FIELD_VALUE } from 'actions/user';

const initialState = {
  isBurgerOpen: false,
  newsletterEmail: '',
  contactEmail: '',
  contactName: '',
  contactContent: '',
  contactSubmitMessage: {
    success: false,
    text: '',
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

    case CHANGE_CONTACT_SUBMIT_MESSAGE: 
      return {
        ...state,
        contactSubmitMessage: {
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
        
    default:
      return state;
  }
}

export default reducer;
