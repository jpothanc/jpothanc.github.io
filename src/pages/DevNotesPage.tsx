import DevNotes from "../components/DevNotes";
import NavBar from "../components/NavBar";
const Main = () => {
  return (
    <>
      <NavBar />
      <div
        className=" container mx-auto  xl:w-[40%] xl:min-w-[1200px]
        md:w-[90%] xl-texl-lg"
      >
        <DevNotes />
      </div>
    </>
  );
};

export default Main;
