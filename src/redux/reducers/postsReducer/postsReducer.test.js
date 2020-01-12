import { postTypes } from "../../actions/types";
import postsReducer from "./postsReducer";

describe("Post reducer", () => {
  it("Should return initial state or defult state", () => {
    const newState = postsReducer(undefined, {});
    expect(newState).toEqual({});
  });

  it("Should return new state if receiving type", () => {
    const posts = [{ test1: "Test1" }, { test2: "Test2" }, { test3: "Test3" }];
    const newState = postsReducer(undefined, {
      type: postTypes.GET_POST,
      payload: posts
    });
    expect(newState).toEqual(posts);
  });
});
