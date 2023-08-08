import { useSelector, useDispatch } from "react-redux";
import {
  setTitle,
  setBody,
  resetForm,
  setValidationErrors,
} from "../../slices/formSlice";
import { addPost } from "../../slices/postsSlice";
import { sendPost } from "../../api/postsApi";

function AddPostForm(): JSX.Element {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.posts);
  const { title, body, validationErrors } = useSelector((state) => state.form);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = [];

    if (!title || !body) {
      errors.push("Title and body are required.");
    }

    if (title.length < 5) {
      errors.push("Title must be at least 5 characters long.");
    }

    if (body.length < 10) {
      errors.push("Body must be at least 10 characters long.");
    }

    if (title.length > 100) {
      errors.push("Title must not exceed 100 characters.");
    }

    if (body.length > 500) {
      errors.push("Body must not exceed 500 characters.");
    }

    if (errors.length > 0) {
      dispatch(setValidationErrors(errors));
      return;
    }

    const data = {
      title: title,
      body: body,
    };

    try {
      await dispatch(addPost(data));
      await dispatch(sendPost(data));
      dispatch(resetForm());
    } catch (error) {
      console.error("Failed to send post: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => dispatch(setTitle(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="body">Text:</label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => dispatch(setBody(e.target.value))}
        />
      </div>
      {validationErrors.map((error, index) => (
        <div key={index} className="text-red-500">
          {error}
        </div>
      ))}
      {loading ? <div>Sending...</div> : null}
      {error && <div>{error}</div>}
      <button type="submit">Send</button>
    </form>
  );
}

export default AddPostForm;
