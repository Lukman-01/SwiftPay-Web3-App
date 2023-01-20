import { Navbar, Welcome, Footer, Transactions, TestTable } from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="bg-slate-800">
      <Navbar />
      <Welcome />
      <TestTable />
    </div>
    <Transactions />
    <Footer />
  </div>
);

export default App;
