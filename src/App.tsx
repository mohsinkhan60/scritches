import Header from "./components/Header";
import HeaderCopy from "./components/Header copy";
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
