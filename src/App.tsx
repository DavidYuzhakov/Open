import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/HomePage";
import { SignUp } from "./pages/SignUpPage";
import { SignIn } from "./pages/SignInPage";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
