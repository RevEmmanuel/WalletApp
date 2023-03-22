import WebLogin from "./components/WebLogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import OTPInput from "./components/Otpinput";
import CompleteReg from "./components/CompleteReg";
import CompleteReg2 from "./components/CompleteReg2";
import DefaultPageDashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<WebLogin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/otpinput" element={<OTPInput />} />
          <Route path="/completereg" element={<CompleteReg />} />
          <Route path="/completereg2" element={<CompleteReg2 />} />
          <Route path="/dashboard" element={<DefaultPageDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
