import { useState } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import SideNav from "../components/header/SideNav";
import TopNav from "../components/header/TopNav";
import { McqSubjectUnit } from "../constant/McqSubData";

const McqSubUnit = () => {
  const [show, setShow] = useState(true);
  const params = useParams();
  const handleShow = () => {
    setShow(!show);
  };

  const filterByParentId = (data, paramsId) => {
    return data.filter((item) => item.parentId === Number(paramsId));
  };
  const filteredData = filterByParentId(McqSubjectUnit, params.id);

  return (
    <div className="home_section">
      <div className={show ? "show" : "hidden"}>
        <SideNav />
        <div className="overlay" onClick={handleShow}></div>
      </div>
      <div className="right">
        <TopNav handleShow={handleShow} show={show} />
        <div className="home_container p-3 p-lg-4">
          <div className="course_group pt-1 pt-lg-2">
            <div className="course_card">
              {filteredData &&
                filteredData.map((ms) => (
                  <div className="subject_card feature" key={ms.id}>
                    <div className="mcq-sub-title flex-title pb-1">
                      {ms.title}
                      <div className="question_type">
                        <div className="easy">
                          <Link to={`/mcq/${ms.id}/easy`} className="type_link">
                            Easy <FaRegPlayCircle />
                          </Link>
                        </div>
                        <div className="medium">
                          <Link
                            to={`/mcq/${ms.id}/medium`}
                            className="type_link"
                          >
                            Medium <FaRegPlayCircle />
                          </Link>
                        </div>
                        <div className="hard">
                          <Link to={`/mcq/${ms.id}/hard`} className="type_link">
                            Hard <FaRegPlayCircle />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default McqSubUnit;
