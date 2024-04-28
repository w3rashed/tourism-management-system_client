import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AutProvider";
import Footer from "../Components/Shared/Footer/Footer";

const Root = () => {
  const { user, loading } = useContext(AuthContext);
  const navigation = useNavigation();

  if (navigation.state === "loading" || (!user && loading)) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
