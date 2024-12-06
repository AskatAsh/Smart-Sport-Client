import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";
import { Navigate } from "react-router-dom";
import { PropTypes } from 'prop-types';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (user && user?.email) {
    return children;
  }

  if (loading) {
    return <Loading />;
  }

  return <Navigate to={"/login"}></Navigate>;
};

PrivateRoutes.propTypes = {
    children: PropTypes.object
}

export default PrivateRoutes;
