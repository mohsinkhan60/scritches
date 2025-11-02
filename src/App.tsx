import Header from "./components/Home/Header";
import ScritchesWorks from "./components/Home/ScritchesWorks";
import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="md:pt-2">
      <Navbar />
      <MobileNavbar />
      <Header />
      <ScritchesWorks />
    </div>
  );
};
export default App;
