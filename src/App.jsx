import { Navbar, Footer, MultiSendTable, MainPage, } from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="bg-slate-800">
      <Navbar />
      <MainPage />
      <MultiSendTable />
      <Footer />
    </div>
  </div>
);

export default App;
