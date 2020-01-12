import { postTypes } from "../../actions/types";

const initialState = {};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case postTypes.GET_POST:
      return action.payload;
    default:
      return state;
  }
};

export default postsReducer;
