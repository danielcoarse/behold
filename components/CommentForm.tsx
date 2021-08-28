import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { changeText, resetCommentForm } from "../store/commentFormSlice";
import { updateList } from "../store/commentListSlice";
import { getPostComments, postComment } from "../utils/fetchData";
import { StyledForm, StyledTextArea } from "./Form/Form.components";
import { StyldedButton } from "./StyledComponents";

interface CommentFormProps {
  postId: number | string | undefined;
}

const CommentForm: React.FC<CommentFormProps> = ({ postId }) => {
  const dispatch = useAppDispatch();
  const formText = useAppSelector((state) => state.commentForm.value.body);

  const onSubmitForm = async (e: any) => {
    e.preventDefault();
    const res = await postComment(postId, formText);

    if (res) {
      dispatch(resetCommentForm());
      const res = await getPostComments(postId);
      res.comments && dispatch(updateList(res.comments));
      alert("Your comment added");
    }

    if (!res) {
      alert("Something went wrong!");
    }
  };

  return (
    <StyledForm onSubmit={(e) => onSubmitForm(e)}>
      <h3>Comments</h3>
      <StyledTextArea
        rows={6}
        id="comment-text"
        name="comment-text"
        placeholder="Write your comment here..."
        required
        value={formText}
        onChange={(e) => dispatch(changeText(e.target.value))}
      />
      <StyldedButton>Submit</StyldedButton>
    </StyledForm>
  );
};

export default CommentForm;
