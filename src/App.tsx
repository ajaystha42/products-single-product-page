import Dashboard from "./components/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import PDPContent from "./components/PDPContent/PDPContent";

function App() {
  {
    /* No need to setup routes here to make work on home page */
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product/:id" element={<PDPContent />} />
      </Routes>
    </>
  );
}

export default App;
