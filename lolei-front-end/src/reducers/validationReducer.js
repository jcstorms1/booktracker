export default function validationReducer(
  state = {
    error: false,
    firstNameError: false,
    lastNameError: false,
    messages: []
  },
  action
) {
  switch (action.type) {
    case "FORM_ERROR":
      return { ...state, error: action.bool };
    case "FIRST_NAME_ERROR":
      return {
        ...state,
        firstNameError: action.bool,
        messages: [...state.messages, action.message]
      };
    case "LAST_NAME_ERROR":
      return { ...state, lastNameError: action.bool };
    default:
      return state;
  }
}
