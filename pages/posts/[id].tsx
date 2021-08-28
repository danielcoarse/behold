import type { NextPage, NextPageContext } from "next";
import NextHeader from "../../components/NextHeader";
import { PostType } from "../../interfaces";
import { getPostComments, postComment } from "../../utils/fetchData";
import {
  Divider,
  Title2,
  StyledPostContainer,
} from "../../components/StyledComponents";
import List from "../../components/List";
import ListItem from "../../components/ListItem";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { updateList } from "../../store/commentListSlice";
import CommentForm from "../../components/CommentForm";
import { useEffect } from "react";

interface PostPageProps {
  post: PostType;
}

const PostPage: NextPage<PostPageProps> = ({ post }) => {
  const dispatch = useAppDispatch();
  const commentsList = useAppSelector((state) => state.comments.value);

  useEffect(() => {
    dispatch(updateList(post.comments));
  }, [post.comments, dispatch]);

  return (
    <StyledPostContainer>
      <NextHeader title={post.title} description={post.body} />
      <Title2>{post.title}</Title2>
      <p>{post.body}</p>

      <Divider />

      <CommentForm postId={post.id} />

      <List>
        {post?.comments &&
          commentsList &&
          commentsList.map((comment) => (
            <ListItem key={comment.id}>
              <p>{comment.body}</p>
            </ListItem>
          ))}
      </List>
    </StyledPostContainer>
  );
};

export default PostPage;

export const getServerSideProps = async ({ query }: NextPageContext) => {
  const post: PostType = await getPostComments(query.id);

  return {
    props: {
      post,
    },
  };
};
