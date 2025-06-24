import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { viaggi } from "../data/data";
import TravelForm from "../components/TravelForm";

export default function NewTravelPage() {
  const travelId = (viaggi.length + 1).toString();

  console.log(travelId);

  const [travel, setTravel] = useState({
    id_viaggio: travelId,
    destinazione: "",
    data_inizio: "",
    data_fine: "",
    costo: "",
    partecipanti: [],
    immagine: "src/assets/img/placeholder.jpg",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    viaggi.push(travel);
    console.log(travel, viaggi);

    navigate("/travels");
  };

  return (
    <TravelForm
      handleSubmit={handleSubmit}
      setTravel={setTravel}
      travel={travel}
    />
  );
}
