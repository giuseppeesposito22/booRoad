import { Link, useParams } from "react-router";
import { viaggi } from "../data/data";
import React, { useState, useEffect } from "react";
import GuestForm from "../components/GuestForm";

function TravelDetailPage() {
  const { id } = useParams();
  const viaggio = viaggi.find((viaggio) => viaggio.id_viaggio === id);

  const [option, setOption] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(viaggio.partecipanti);
  const [partecipanti, setPartecipanti] = useState(viaggio.partecipanti);

  useEffect(() => {
    const filter = partecipanti.filter((currentPerson) => {
      const fullName = currentPerson.nome + " " + currentPerson.cognome;
      return option === "" || fullName === option;
    });

    setSelectedPerson(filter);
  }, [option, partecipanti]);

  return (
    <div className="container">
      <h1>{viaggio.destinazione}</h1>
      <p>
        Dal {viaggio.data_inizio} al {viaggio.data_fine}
      </p>
      <p>Costo: €{viaggio.costo}</p>
      <h2>Partecipanti</h2>
      <Link className="btn btn-primary">Aggiungi partecipante</Link>

      <GuestForm
        onAddGuest={(newGuest) => setPartecipanti([...partecipanti, newGuest])}
      />

      <select
        value={option}
        onChange={function (event) {
          setOption(event.target.value);
        }}
        className="form-select my-5"
        aria-label="Default select example"
      >
        <option value="">Filtra per nome e cognome</option>
        {viaggio.partecipanti &&
          viaggio.partecipanti.map((partecipante, index) => {
            const fullName = partecipante.nome + " " + partecipante.cognome;
            return (
              <option key={index} value={fullName}>
                {fullName}
              </option>
            );
          })}
      </select>

      <div className="row">
        {selectedPerson &&
          selectedPerson.map((partecipante, index) => (
            <div key={index} className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="true"
                    aria-controls={`collapse${index}`}
                  >
                    {`${partecipante.nome} ${partecipante.cognome}`}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>Codice Fiscale: {partecipante.codice_fiscale}</p>
                    <p>Email: {partecipante.mail}</p>
                    <p>Numero di telefono: {partecipante.numero_di_telefono}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default TravelDetailPage;
