import { useDispatch } from "react-redux";
import { switchUserDetailsTab } from "../../slices/usersSlice";

function UserDetailsTab({ tabNumber, currentTab, children }): JSX.Element {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className={
        currentTab === tabNumber
          ? "bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          : "bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
      }
      onClick={() => dispatch(switchUserDetailsTab(tabNumber))}
    >
      {children}
    </button>
  );
}

export default UserDetailsTab;
