import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserDetails } from "../../api/usersApi";
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
  const { userDetails, loading, error } = useSelector((state) => state.users);
  const { userId } = useParams();

  useEffect(() => {
    dispatch(fetchUserDetails(userId));
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
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          User Info
        </button>
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          User Albums
        </button>
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          User ToDos
        </button>
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          User Posts
        </button>
      </div>
      <div className="flex flex-col items-center mt-4">
        <ul>
          <li className="mt-4">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#3b82f6" }} />
            <span className="ml-6 font-bold">{userDetails.email}</span>
          </li>
          <li className="mt-4">
            <FontAwesomeIcon
              icon={faPhoneVolume}
              style={{ color: "#3b82f6" }}
            />
            <span className="ml-6 font-bold">{userDetails.phone}</span>
          </li>
          <li className="mt-4">
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#3b82f6" }}
            />
            <span className="ml-6 font-bold">{userDetails.address?.city}</span>
          </li>
          <li className="mt-4">
            <FontAwesomeIcon icon={faGlobe} style={{ color: "#3b82f6" }} />
            <span className="ml-6 font-bold">{userDetails.website}</span>
          </li>
          <li className="mt-4">
            <FontAwesomeIcon icon={faBriefcase} style={{ color: "#3b82f6" }} />
            <span className="ml-6 font-bold">{userDetails.company?.name}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserDetails;
