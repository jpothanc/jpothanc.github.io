import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Contents from "./components/Contents";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Contents />
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
