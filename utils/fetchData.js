import axios from "axios";
import _ from "lodash";

export const getPosts = async () => {
  try {
    const res = await axios.get(`https://simple-blog-api.crew.red/posts`);
    return await res.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getSinglePost = async (id) => {
  try {
    const res = await axios.get(`https://simple-blog-api.crew.red/posts/${id}`);
    return await res.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const createPost = async (title, body) => {
  try {
    const newPost = {
      id: _.uniqueId("p_"),
      title,
      body,
    };

    const res = await axios.post(
      `https://simple-blog-api.crew.red/posts`,
      newPost
    );

    return await res.data;
  } catch (error) {
    throw new Error(error);
  }
};
