import { 
  RESOGNIZE_IMAGE_FAILED  
  RESOGNIZE_IMAGE_SUCCESS,
  RESOGNIZE_IMAGE_START
}
  from '../constants/image-consts';

const initialState = {
  preloader: false,
};

export default function cookiesReducer(state = initialState, action) {
  switch (action.type) {
    case RESOGNIZE_IMAGE_START:
      return { ...state, preloader: true };
    case RESOGNIZE_IMAGE_SUCCESS:
      return { ...state, preloader: false };
    case RESOGNIZE_IMAGE_FAILED:
      return { ...state, preloader: false };
    default:
      return state;
  }
}
