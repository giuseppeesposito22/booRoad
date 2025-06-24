import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import TravelsPage from "./pages/TravelsPage";
import TravelDetailPage from "./pages/TravelDetailPage";
import NewTravelPage from "./pages/NewTravelPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/travels" element={<TravelsPage />} />
            <Route path="/travels/:id" element={<TravelDetailPage />} />
            <Route path="/newtravel" element={<NewTravelPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
