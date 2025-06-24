import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { viaggi } from "../data/data";
import TravelForm from "../components/TravelForm";

export default function NewTravelPage() {
  const travelId = (viaggi.length + 1).toString();

  const [travel, setTravel] = useState({
    id_viaggio: travelId,
    destinazione: "",
    data_inizio: "",
    data_fine: "",
    costo: "",
    partecipanti: [],
    immagine: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (travel.data_fine < travel.data_inizio) {
      return alert("La data di fine deve essere successiva a quella di inizio");
    }

    const addTravel = travel.immagine
      ? travel
      : { ...travel, immagine: "src/assets/img/placeholder.jpg" };

    viaggi.push(addTravel);

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
