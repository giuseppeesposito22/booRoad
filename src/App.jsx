import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import TravelsPage from "./pages/TravelsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/travels" element={<TravelsPage />} />
            <Route path="/travels/:id" element={""} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
