const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };
      break;

    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "INCREASE":
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload)
          return { ...cartItem, amount: cartItem.amount + 1 };
        return cartItem;
      });
      return { ...state, cart: tempCart };
      break;

    case "DECREASE":
      let tempCarte = state.cart
        .map((cartItem) => {
          if (cartItem.id === action.payload)
            return { ...cartItem, amount: cartItem.amount - 1 };
          return cartItem;
        })
        .filter((cartItem) => cartItem.id !== 0);

      return { ...state, cart: tempCarte };
      break;

    case "GET_TOTALS":
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.total += itemTotal;
          cartTotal.amount += amount;

          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );

      total = parseFloat(total.toFixed(2));

      return { ...state, total, amount };
      break;

    case "LOADING":
      return { ...state, loading: true };
      break;

    case "DISPLAY_ITEMS":
      return { ...state, cart: action.payload, loading: false };
      break;
  }

  return state;
};

export default reducer;
