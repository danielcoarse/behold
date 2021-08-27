import styled from "styled-components";
import Form from "../../components/Form";

const PostPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`;

const NewPost = () => (
  <PostPageStyled>
    <h2>Create your own post</h2>
    <Form />
  </PostPageStyled>
);

export default NewPost;
