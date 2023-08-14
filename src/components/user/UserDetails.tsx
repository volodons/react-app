import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserDetails } from "../../api/usersApi";

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
    return <div>Error loading users</div>;
  }

  return (
    <div>
      This is User number {userId}, his data is {userDetails.name},
      {userDetails.address.street}, {userDetails.address.geo.lat}
    </div>
  );
}

export default UserDetails;
