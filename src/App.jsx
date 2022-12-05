import { Navbar, Welcome, Footer, Transactions } from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="bg-slate-800">
      <Navbar />
      <Welcome />
    </div>
    <Transactions />
    <Footer />
  </div>
);

export default App;