import { useState } from "react";
import { useParams } from "react-router-dom";
import Syllabus from "../components/common/Syllabus";
import SideNav from "../components/header/SideNav";
import TopNav from "../components/header/TopNav";
import { SubjectData, SyllabusData } from "../constant/SubData";

const SyllabusItem = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <Syllabus key={item.id} item={item} />
      ))}
    </>
  );
};

const Subject = () => {
  const [show, setShow] = useState(true);
  const params = useParams();
  const handleShow = () => {
    setShow(!show);
  };

  const filterByParentId = (data, paramsId) => {
    return data.filter((item) => item.parentId === Number(paramsId));
  };
  const filteredData = filterByParentId(SubjectData, params.id);

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
                filteredData.map((s) => (
                  <div className="subject_card feature" key={s.id}>
                    <div className="title pb-1 ">{s.title}</div>
                    <div className="sub_features">
                      <SyllabusItem
                        items={SyllabusData.filter(
                          (item) => item.parentId === s.id
                        )}
                      />
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

export default Subject;
