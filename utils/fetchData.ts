import axios from "axios";
import uuid from "react-uuid";

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
      id: uuid(),
      title,
      body,
    };

    const res = await axios.post(`${process.env.API_URL}/posts`, newPost);

    return await res.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getPostComments = async (
  id: number | string | string[] | undefined
) => {
  try {
    const res = await axios.get(
      `${process.env.API_URL}/posts/${id}?_embed=comments`
    );

    return await res.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const postComment = async (
  id: number | string | string[] | undefined,
  body: string | undefined
) => {
  try {
    const res = await axios.post(`${process.env.API_URL}/comments`, {
      postId: id,
      body,
    });

    return await res.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
