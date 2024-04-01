import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Loading from "./components/loading/Loading";
import Login from "./pages/auth/Login";

const Home = lazy(() => import("./pages/Home"));
const Subject = lazy(() => import("./pages/Subject"));
const SubjectDetails = lazy(() => import("./pages/SubjectDetails"));
const McqSubject = lazy(() => import("./pages/McqSubjects"));
const McqSubUnit = lazy(() => import("./pages/McqSubUnit"));
const Mcq = lazy(() => import("./components/common/Mcq"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mcq" element={<McqSubject />} />
          <Route path="/mcq/:id" element={<McqSubUnit />} />
          <Route path="/mcq/:id/easy" element={<Mcq />} />
          <Route path="/subject/:id" element={<Subject />} />
          <Route path="/syllabus/:id/:id/:title" element={<SubjectDetails />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
