import {TOGGLE_BURGER} from 'actions/app';
import { CHANGE_FIELD_VALUE } from 'actions/user';

const initialState = {
  isBurgerOpen: false,
  newsletterEmail: '',
  contactEmail: '',
  contactName: '',
  contactContent: '',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {

    case TOGGLE_BURGER: 
        return {
            ...state,
            isBurgerOpen: !state.isBurgerOpen,
        };

    // updating any form field value
    case CHANGE_FIELD_VALUE:
      return {
        ...state,
        [action.field]: action.value,
      }
        
    default:
      return state;
  }
}

export default reducer;
