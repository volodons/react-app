import { useSelector, useDispatch } from "react-redux";
import { sendPost } from "../../api/postsApi";
import { useForm, Controller } from "react-hook-form";

function AddPostForm(): JSX.Element {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.posts);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      body: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      await dispatch(sendPost(data));
      reset();
    } catch (error) {
      console.error("Failed to send post: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col align-center m-4">
        <label htmlFor="title" className="font-semibold">
          Title:
        </label>
        <Controller
          name="title"
          control={control}
          rules={{
            required: "Title is required",
            minLength: {
              value: 5,
              message: "Title must be at least 5 characters long",
            },
            maxLength: {
              value: 50,
              message: "Title must not exceed 50 characters",
            },
          }}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              id="title"
              placeholder="Put post title here..."
              className="rounded-md p-2 text-black"
            />
          )}
        />
        {errors.title && (
          <p className="text-red-600 font-bold">{errors.title.message}</p>
        )}
      </div>
      <div className="flex flex-col align-center m-4">
        <label htmlFor="body" className="font-semibold">
          Text:
        </label>
        <Controller
          name="body"
          control={control}
          rules={{
            required: "Body is required",
            minLength: {
              value: 10,
              message: "Body must be at least 10 characters long",
            },
            maxLength: {
              value: 100,
              message: "Body must not exceed 100 characters",
            },
          }}
          render={({ field }) => (
            <textarea
              {...field}
              id="body"
              placeholder="Put post text here..."
              className="rounded-md p-2 h-32 text-black"
            />
          )}
        />
        {errors.body && (
          <p className="text-red-600 font-bold">{errors.body.message}</p>
        )}
      </div>
      {loading ? <div>Sending...</div> : null}
      {error && <div>{error}</div>}
      <div className="flex justify-center m-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default AddPostForm;
