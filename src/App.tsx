import About from "./pages/About";
import Contents from "./pages/Contents";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ProjectPersonalSummary from "./pages/ProjectPersonalSummary";
import { CounterProvider } from "./contexts/CounterProvider";

import DevNotesPage from "./pages/DevNotesPage";
import ShareNotes from "./components/ShareNotes";
import { useEffect, useState } from "react";
const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <>
      <Router>
        <CounterProvider>
          <Routes>
            <Route path="/" element={<About />}></Route>
            <Route path="/contents" element={<Contents />}></Route>
            <Route path="/devnotes" element={<DevNotesPage />}></Route>
            <Route path="/sharenotes" element={<ShareNotes />}></Route>
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
