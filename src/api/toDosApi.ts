import axios from "axios";

export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      dispatch(fetchTodosSuccess(response.data));
    } catch (error) {
      dispatch(fetchTodosFailure(error.message));
    }
  };
};

const fetchTodosSuccess = (todos) => ({
  type: "FETCH_TODOS_SUCCESS",
  payload: todos,
});

const fetchTodosFailure = (error) => ({
  type: "FETCH_TODOS_FAILURE",
  payload: error,
});
