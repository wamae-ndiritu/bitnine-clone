export const reducer = (state, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "USER_REGISTER_SUCCESS":
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
      };
    case "USER_REGISTER_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "USER_LOGIN_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
      };
    case "USER_LOGIN_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
