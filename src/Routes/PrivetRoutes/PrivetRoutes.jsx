import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AutProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location.pathname);

  if (loading) {
    return (
      <span className="loading loading-spinner text-info flex mx-auto  h-screen items-center"></span>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivateRoutes;
