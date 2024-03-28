import { useState } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { useParams } from "react-router-dom";
import SideNav from "../components/header/SideNav";
import TopNav from "../components/header/TopNav";
import { SubjectData, SyllabusData } from "../constant/SubData";
import PdfViewer from "../components/common/PdfViewer";
import Mcqs from "../components/common/Mcqs";

const SyllabusItem = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <PdfViewer key={item.id} item={item} />
      ))}
    </>
  );
};

const SubjectDetails = () => {
  const [show, setShow] = useState(true);
  const params = useParams();
  const handleShow = () => {
    setShow(!show);
  };

  const filterByParentId = (data, paramsId) => {
    return data.filter((item) => item.id === Number(paramsId));
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
        <div className="home_container p-2 p-lg-4">
          <div className="course_group pt-1 pt-lg-2">
            <div className="details_card">
              {filteredData &&
                filteredData.map((s) => (
                  <div className="sub_detailss" key={s.id}>
                    <div className="title pb-2 pb-lg-3 mb-3">{s.title}</div>

                    <div className="sub_features">
                      <Tab.Container
                        id="left-tabs-example"
                        defaultActiveKey="first"
                      >
                        <Col sm={12}>
                          <Nav variant="pills" className="flex-row">
                            <Nav.Item>
                              <Nav.Link eventKey="first">Syllabus</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="second">Notes</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="third">
                                Question Answer
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="fourth">MCQ's</Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </Col>
                        <Col sm={12}>
                          <Tab.Content>
                            <Tab.Pane eventKey="first">
                              <SyllabusItem
                                items={SyllabusData.filter(
                                  (item) => item.parentId === s.id
                                )}
                              />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second"></Tab.Pane>
                            <Tab.Pane eventKey="third">
                              Second tab content
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                              <Mcqs />
                            </Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Tab.Container>
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

export default SubjectDetails;
