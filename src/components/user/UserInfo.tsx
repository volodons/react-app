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

function UserInfo(): JSX.Element {
  const dispatch = useDispatch();
  const { userInfo, loading, error } = useSelector((state) => state.users);
  const { userId } = useParams();

  useEffect(() => {
    dispatch(fetchUserInfo(userId));
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading user's info</div>;
  }

  return (
    <div className="flex flex-col items-center mt-4">
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
