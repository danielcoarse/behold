import type { NextPage, NextPageContext } from "next";
import { PostType } from "../../interfaces";
import { getSinglePost } from "../../utils/fetchData";

interface PostPageProps {
  post: PostType;
}

const PostPage: NextPage<PostPageProps> = ({ post }) => (
  <>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
  </>
);

export default PostPage;

export const getServerSideProps = async ({ query }: NextPageContext) => {
  const post: PostType = await getSinglePost(query.id);

  return {
    props: {
      post,
    },
  };
};
