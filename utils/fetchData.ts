import axios from "axios";
import _ from "lodash";

export const getPosts = async () => {
  try {
    const res = await axios.get(`${process.env.API_URL}/posts`);
    return await res.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getSinglePost = async (id: string | string[] | undefined) => {
  try {
    const res = await axios.get(`${process.env.API_URL}/posts/${id}`);
    return await res.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const createPost = async (title: string, body: string) => {
  try {
    const newPost = {
      id: _.uniqueId("p_"),
      title,
      body,
    };

    const res = await axios.post(`${process.env.API_URL}/posts`, newPost);

    return await res.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
