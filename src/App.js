import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Loading from "./components/loading/Loading";

const Home = lazy(() => import("./pages/Home"));
const Subject = lazy(() => import("./pages/Subject"));
const SubjectDetails = lazy(() => import("./pages/SubjectDetails"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Subject />} />
          <Route path="/:id/:id/:title" element={<SubjectDetails />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
