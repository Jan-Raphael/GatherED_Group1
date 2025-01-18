import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForyoupageNonuser from "./components/Parts/ForyoupageNonuser";
import Login from "./components/Fullpages/Login";
import Signup from "./components/Fullpages/Signup";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<ForyoupageNonuser />} />
        <Route index path="/login" element={<Login />} />
        <Route index path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;