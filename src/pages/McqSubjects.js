import { useState } from "react";
import { McqSubData, McqSubjects } from "../constant/McqSubData";
import SideNav from "../components/header/SideNav";
import TopNav from "../components/header/TopNav";
import { MdQuiz } from "react-icons/md";
import { Link } from "react-router-dom";

const McqSubject = () => {
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
          <div className="course_group pt-1 pt-lg-2">
            <div className="course_card">
              {McqSubData &&
                McqSubData.map((s) => (
                  <div className="subject_card feature" key={s.id}>
                    <div className="title pb-2 ">{s.title}</div>
                    {McqSubjects &&
                      McqSubjects.map((ms) => {
                        if (ms.parentId === s.id) {
                          return (
                            <div className="mcq-sub-title pb-1" key={ms.id}>
                              <Link to={`/mcq/${ms.id}`} className="mcqlink">
                                <MdQuiz className="mcqicon" />
                                {ms.title}
                              </Link>
                            </div>
                          );
                        } else return null;
                      })}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default McqSubject;
