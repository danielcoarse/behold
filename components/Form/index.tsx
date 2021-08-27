import { StyldedButton } from "../../components/StyledComponents";
import { StyledForm, StyledInput, StyledTextArea } from "./Form.components";
import { createPost } from "../../utils/fetchData";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { changeBody, changeTitle, resetForm } from "../../store/formSlice";

const Form = () => {
  const dispatch = useAppDispatch();
  const title = useAppSelector((store) => store.form.value.title);
  const body = useAppSelector((store) => store.form.value.body);

  const onSubmitForm = async (e: any) => {
    e.preventDefault();
    const res = await createPost(title, body);

    if (res) dispatch(resetForm());
  };

  return (
    <StyledForm onSubmit={(e) => onSubmitForm(e)}>
      <StyledInput
        type="text"
        name="title"
        id="title"
        value={title}
        placeholder="Post Title"
        onChange={(e) => dispatch(changeTitle(e.target.value))}
        required
      />
      <StyledTextArea
        name="body"
        id="body"
        value={body}
        rows={15}
        placeholder="Post Body"
        onChange={(e) => dispatch(changeBody(e.target.value))}
        required
      />
      <StyldedButton>Submit</StyldedButton>
    </StyledForm>
  );
};

export default Form;
