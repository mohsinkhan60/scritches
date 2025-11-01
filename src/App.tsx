import Header from "./components/Home/Header";
import HeaderCopy from "./components/Home/Header copy";
import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="md:pt-2">
      <Navbar />
      <MobileNavbar />
      <Header />
      <HeaderCopy />
    </div>
  );
};
export default App;
