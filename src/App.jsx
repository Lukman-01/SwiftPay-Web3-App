import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import MultiSendTable from "./components/MultiSendTable";
import Footer from "./components/Footer";

const App = () => (
  <div>
    <div className="bg-slate-800">
      <Navbar />
      <MainPage />
      <MultiSendTable />
      <Footer />
    </div>
  </div>
);

export default App;
