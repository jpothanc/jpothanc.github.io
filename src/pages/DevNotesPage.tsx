import DevNotes from "../components/DevNotes";
import NavBar from "../components/NavBar";
const Main = () => {
  return (
    <>
      <NavBar pageInfo="<devnotes/>" />
      <DevNotes />
    </>
  );
};

export default Main;
