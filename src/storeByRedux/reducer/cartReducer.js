const INSTIAL_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
};
export function cartReducer(state = INSTIAL_STATE, action) {
  switch (action.type) {
    case "SET_CART":
      return {
        ...state,
        cart: action.payload,
      };

    default:
      return state;
  }
}
