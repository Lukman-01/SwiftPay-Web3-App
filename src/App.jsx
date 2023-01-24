import { Navbar, Footer, MainPage, } from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="bg-slate-800">
      <Navbar />
      <MainPage />
      <Footer />
    </div>
  </div>
);

export default App;
