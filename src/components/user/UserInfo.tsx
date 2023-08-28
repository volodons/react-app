import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserInfo } from "../../api/usersApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneVolume,
  faLocationDot,
  faGlobe,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../../store/store";

function UserInfo(): JSX.Element {
  const dispatch = useDispatch();
  const { userInfo, loading, error } = useSelector(
    (state: RootState) => state.users
  );
  const { userId } = useParams<{ userId: string }>();

  useEffect(() => {
    dispatch(fetchUserInfo(userId));
  }, [dispatch, userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading user's info</div>;
  }

  return (
    <div className="flex flex-col items-center mt-4">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl ">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          User {userId} Info
        </span>
      </h1>
      <ul>
        <li className="mt-4">
          <FontAwesomeIcon icon={faEnvelope} style={{ color: "#3b82f6" }} />
          <span className="ml-6 font-bold">{userInfo.email}</span>
        </li>
        <li className="mt-4">
          <FontAwesomeIcon icon={faPhoneVolume} style={{ color: "#3b82f6" }} />
          <span className="ml-6 font-bold">{userInfo.phone}</span>
        </li>
        <li className="mt-4">
          <FontAwesomeIcon icon={faLocationDot} style={{ color: "#3b82f6" }} />
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
  );
}

export default UserInfo;
