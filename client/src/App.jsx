import { Routes, BrowserRouter,Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Menu from "./pages/Menu";


function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={ <Menu/> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
