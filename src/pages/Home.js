import { useState } from "react";
import { Link } from "react-router-dom";
import SideNav from "../components/header/SideNav";
import TopNav from "../components/header/TopNav";
import { FaBookOpen } from "react-icons/fa6";
import { SideBarData } from "../constant/NavData";

const Home = () => {
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
        <div className="home_container p-3 p-lg-4">
          <h4 className="pt-2">Welcome to Learning Hammer</h4>
          <p className="pt-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
            dignissimos ab molestias ipsum, quae porro dolor sit reprehenderit!
          </p>

          <div className="course_group pt-1 pt-lg-2">
            <div className="course_card">
              {SideBarData &&
                SideBarData.map((s) => (
                  <div className="subject_card" key={s.id}>
                    <Link to={`/subject/${s.id}`} className="card_link">
                      <div className="title">{s.title}</div>
                      <div className="icon">
                        <FaBookOpen className="book_icon" />
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
