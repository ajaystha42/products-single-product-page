import Footer from "home/Footer";
import Header from "home/Header";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  {
    /* No need to setup routes here to make work on home page */
  }
  return (
    <>
      <Header />
      <Dashboard />
      {/* <Routes>
        <Route path="/product/:id" element={<PDPContent />} />
      </Routes> */}
      <Footer />
    </>
  );
}

export default App;
