import { PiSignIn } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";

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
        <PiSignIn className="auth_icon" />
      </div>
    </div>
  );
};

export default TopNav;
