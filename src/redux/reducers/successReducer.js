const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ACTION":
      return {
        ...state
      };

    default:
      return state;
  }
};
