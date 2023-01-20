import { Navbar, Welcome, Footer, Transactions, MultiSendTable } from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="bg-slate-800">
      <Navbar />
      <Welcome />
      <MultiSendTable />
    </div>
    <Transactions />
    <Footer />
  </div>
);

export default App;
