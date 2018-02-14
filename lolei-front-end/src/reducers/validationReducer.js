export default function validationReducer(
  state = {
    error: false,
    firstNameError: false,
    lastNameError: false,
    usernameError: false,
    passwordError: false,
    emptyError: false,
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
      return {
        ...state,
        lastNameError: action.bool,
        messages: [...state.messages, action.message]
      };
    case "USERNAME_ERROR":
      return {
        ...state,
        usernameError: action.bool,
        messages: [...state.messages, action.message]
      };
    case "PASSWORD_ERROR":
      return {
        ...state,
        passwordError: action.bool,
        messages: [...state.messages, action.message]
      };
    case "EMPTY_ERROR":
      return {
        ...state,
        emptyError: action.bool,
        messages: [...state.messages, action.message]
      };
    case "CLEAR_MESSAGES":
      return { ...state, messages: [] };
    default:
      return state;
  }
}
