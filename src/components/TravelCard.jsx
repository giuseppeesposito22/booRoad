import { Link } from "react-router-dom";

export default function TravelCard({ viaggio }) {
  return (
    <>
      <div className="col">
        <div className="card">
          <img src={viaggio.immagine} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{viaggio.destinazione}</h5>
            <p className="card-text">
              <span>{viaggio.data_inizio}</span> <br />
              <span>{viaggio.data_fine}</span>
            </p>
            <Link
              to={`/travels/${viaggio.id_viaggio}`}
              className="btn btn-primary"
            >
              Vai al dettaglio
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
