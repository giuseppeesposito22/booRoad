// Import

import { Link, useParams } from "react-router";
import { viaggi } from "../data/data";
import React, { useState, useEffect } from "react";
import GuestForm from "../components/GuestForm";
import GuestFilterSelect from "../components/GuestFilterSelect";
import GuestAccordion from "../components/GuestAccordion";

function TravelDetailPage() {
  // ID per prendere il post selezioanto
  const { id } = useParams();
  const viaggio = viaggi.find((viaggio) => viaggio.id_viaggio === id);

  // Stati
  const [option, setOption] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(viaggio.partecipanti);
  const [partecipanti, setPartecipanti] = useState(viaggio.partecipanti);
  const [show, setShow] = useState(false);

  // UseEffect per visualizzare i partecipanti filtrati
  useEffect(() => {
    const filter = partecipanti.filter((currentPerson) => {
      const fullName = currentPerson.nome + " " + currentPerson.cognome;
      return option === "" || fullName === option;
    });

    setSelectedPerson(filter);
  }, [option, partecipanti]);

  return (
    <div className="container my-5">
      <div className="d-flex flex-column justify-content-center align-items-center border my-5 p-3 bg-body-secondary rounded-3">
        <h1>{viaggio.destinazione}</h1>
        <p>
          Dal {viaggio.data_inizio} al {viaggio.data_fine}
        </p>
        <p>
          <strong>€{viaggio.costo}</strong>
        </p>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <h2>Partecipanti</h2>
        <Link onClick={() => setShow(true)} className="btn btn-primary">
          Aggiungi partecipante
        </Link>
      </div>
      {show && (
        <GuestForm
          show={setShow}
          onAddGuest={(newGuest) =>
            setPartecipanti([...partecipanti, newGuest])
          }
        />
      )}

      {partecipanti.length > 1 && (
        <GuestFilterSelect
          partecipanti={partecipanti}
          setOption={setOption}
          option={option}
        />
      )}

      <GuestAccordion selectedPerson={selectedPerson} />
    </div>
  );
}
export default TravelDetailPage;
