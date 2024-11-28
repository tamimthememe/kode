import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <body className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </body>
  );
}

export default App;
