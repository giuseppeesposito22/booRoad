import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { viaggi } from "../data/data";

export default function NewTravelPage() {
  const travelId = (viaggi.length + 1).toString();

  console.log(travelId);

  const [travel, setTravel] = useState({
    id_viaggio: travelId,
    destinazione: "asd",
    data_inizio: "",
    data_fine: "",
    costo: "213423",
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
    <>
      <h1>New Travel</h1>
      <form onSubmit={handleSubmit}>
        <label className="form-label">Destinazione</label>
        <input
          className="form-control"
          type="text"
          placeholder="Destinazione"
          value={travel.destinazione}
          onChange={(e) =>
            setTravel({
              ...travel,
              destinazione: e.target.value,
            })
          }
          required
        />

        <label className="form-label">Data Inizio</label>
        <input
          className="form-control"
          type="date"
          placeholder="Data Inizio"
          value={travel.data_inizio}
          onChange={(e) =>
            setTravel({
              ...travel,
              data_inizio: e.target.value,
            })
          }
          required
        />

        <label className="form-label">Data Fine</label>
        <input
          className="form-control"
          type="date"
          placeholder="Data Fine"
          value={travel.data_fine}
          onChange={(e) =>
            setTravel({
              ...travel,
              data_fine: e.target.value,
            })
          }
          required
        />

        <label className="form-label">Costo</label>
        <input
          className="form-control"
          type="number"
          value={travel.costo}
          onChange={(e) =>
            setTravel({
              ...travel,
              costo: e.target.value,
            })
          }
          required
        />

        <input
          className="form-control"
          type="text"
          placeholder="Immagine"
          value={travel.immagine}
          onChange={(e) =>
            setTravel({
              ...travel,
              immagine: e.target.value,
            })
          }
        />

        <button type="submit">Create New Travel</button>
      </form>
    </>
  );
}
