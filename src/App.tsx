import About from "./pages/About";
import Contents from "./pages/Contents";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectPersonalSummary from "./pages/ProjectPersonalSummary";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/contents" element={<Contents />}></Route>
          <Route path="/projects" element={<ProjectPersonalSummary />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
