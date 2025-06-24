export default function GuestAccordion({ selectedPerson }) {
  return (
    <>
      <div className="row row-cols-2 g-5">
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
    </>
  );
}
