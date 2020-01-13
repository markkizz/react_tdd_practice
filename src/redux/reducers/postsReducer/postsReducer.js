import { postTypes } from "../../actions/types";

const initialState = {
  posts: []
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case postTypes.GET_POST:
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
};

export default postsReducer;
