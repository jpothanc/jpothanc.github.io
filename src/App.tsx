import About from "./pages/About";
import Contents from "./pages/Contents";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectPersonalSummary from "./pages/ProjectPersonalSummary";
import { CounterProvider } from "./contexts/CounterProvider";
const App = () => {
  return (
    <>
      <Router>
        <CounterProvider>
          <Routes>
            <Route path="/" element={<About />}></Route>
            <Route path="/contents" element={<Contents />}></Route>
            <Route
              path="/projects"
              element={<ProjectPersonalSummary />}
            ></Route>
          </Routes>
        </CounterProvider>
      </Router>
    </>
  );
};

export default App;
