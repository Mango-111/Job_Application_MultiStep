import { UPDATE_FORM_DATA } from "./formActions";

const initialState = {
  formData: {
    step1: {},
    step2: [],
    step3: {},
    step4: {},
    step5: {},
  },
};

const formDataReducer = (state = { initialState }, action) => {
  switch (action.type) {
    case UPDATE_FORM_DATA: {
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.step]: action.payload.data,
        },
      };
    }
    default :
    return state
  }
};

export default formDataReducer
