import { postTypes } from "../../actions/types";
import postsReducer from "./postsReducer";

describe("Post reducer", () => {
  const initialState = {
    posts: []
  };

  it("Should return initial state or defult state", () => {
    const newState = postsReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });

  it("Should return new state if receiving type", () => {
    const posts = [{ test1: "Test1" }, { test2: "Test2" }, { test3: "Test3" }];
    const newState = postsReducer(initialState, {
      type: postTypes.GET_POST,
      payload: posts
    });
    expect(newState.posts).toEqual(posts);
  });
});
