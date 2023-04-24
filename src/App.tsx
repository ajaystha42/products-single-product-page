import Header from "home/Header";
import Footer from "home/Footer";
import PDPContent from "./PDPContent";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/product/:id" element={<PDPContent />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
