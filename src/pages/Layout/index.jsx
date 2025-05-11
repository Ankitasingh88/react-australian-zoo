import { Outlet } from "react-router-dom";
import VideoComponent from "../../components/VideoComponent";
import Navbar from "../../components/Navbar";

const Layout = ({ setUserHasClicked }) => {
  const handleCategoryClick  = () => {
    setUserHasClicked(null);
  };
  
  return (
    <>
      <VideoComponent />
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;


  