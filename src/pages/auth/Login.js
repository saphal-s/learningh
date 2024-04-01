import { useState } from "react";
import { Link } from "react-router-dom";
import SideNav from "../../components/header/SideNav";
import TopNav from "../../components/header/TopNav";
import { FaBookOpen } from "react-icons/fa6";
import { SideBarData } from "../../constant/NavData";

const Login = () => {
  const [show, setShow] = useState(true);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="home_section">
      <div className={show ? "show" : "hidden"}>
        <SideNav />
        <div className="overlay" onClick={handleShow}></div>
      </div>
      <div className="right">
        <TopNav handleShow={handleShow} show={show} />
        <div className="login_form"></div>
      </div>
    </div>
  );
};

export default Login;
