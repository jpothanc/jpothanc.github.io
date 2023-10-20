import About from "./components/About";
import Contents from "./components/Contents";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/contents" element={<Contents />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
