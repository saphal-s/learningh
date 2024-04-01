import { PiSignIn } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const TopNav = ({ handleShow, show }) => {
  return (
    <div className="top_bar">
      <div className="top_head">
        <div className="icon">
          <FiMenu onClick={handleShow} className="menu" />
        </div>
        <h3>Learning Hammer</h3>
      </div>
      <div className="auth">
        <Link to="/login" className="auth">
          <PiSignIn className="auth_icon" />
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
