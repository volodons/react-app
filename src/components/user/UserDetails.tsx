import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { switchUserDetailsTab } from "../../slices/usersSlice";
import { fetchUserInfo } from "../../api/usersApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneVolume,
  faLocationDot,
  faGlobe,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

function UserDetails(): JSX.Element {
  const dispatch = useDispatch();
  const {
    userDetailsTab,
    userInfo,
    userAlbums,
    userTodos,
    userPosts,
    loading,
    error,
  } = useSelector((state) => state.users);
  const { userId } = useParams();

  useEffect(() => {
    dispatch(fetchUserInfo(userId));
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading user details</div>;
  }

  return (
    <div className="p-8">
      <div className="flex gap-4">
        <button
          type="button"
          className={
            userDetailsTab === 1
              ? "bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
              : "bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
          }
          onClick={() => dispatch(switchUserDetailsTab(1))}
        >
          User's Info
        </button>
        <button
          type="button"
          className={
            userDetailsTab === 2
              ? "bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
              : "bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
          }
          onClick={() => dispatch(switchUserDetailsTab(2))}
        >
          User's Albums
        </button>
        <button
          type="button"
          className={
            userDetailsTab === 3
              ? "bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
              : "bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
          }
          onClick={() => dispatch(switchUserDetailsTab(3))}
        >
          User's ToDos
        </button>
        <button
          type="button"
          className={
            userDetailsTab === 4
              ? "bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
              : "bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
          }
          onClick={() => dispatch(switchUserDetailsTab(4))}
        >
          User's Posts
        </button>
      </div>
      <div className="flex flex-col items-center mt-4">
        <ul>
          <li className="mt-4">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#3b82f6" }} />
            <span className="ml-6 font-bold">{userInfo.email}</span>
          </li>
          <li className="mt-4">
            <FontAwesomeIcon
              icon={faPhoneVolume}
              style={{ color: "#3b82f6" }}
            />
            <span className="ml-6 font-bold">{userInfo.phone}</span>
          </li>
          <li className="mt-4">
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#3b82f6" }}
            />
            <span className="ml-6 font-bold">{userInfo.address?.city}</span>
          </li>
          <li className="mt-4">
            <FontAwesomeIcon icon={faGlobe} style={{ color: "#3b82f6" }} />
            <span className="ml-6 font-bold">{userInfo.website}</span>
          </li>
          <li className="mt-4">
            <FontAwesomeIcon icon={faBriefcase} style={{ color: "#3b82f6" }} />
            <span className="ml-6 font-bold">{userInfo.company?.name}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserDetails;
