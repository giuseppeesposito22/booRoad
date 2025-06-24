import { Link } from "react-router-dom";

export default function TravelCard({ viaggio }) {
  const formatDate = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString("it-IT");
  };

  return (
    <>
      <div className="col">
        <div className="card h-100">
          <img src={viaggio.immagine} className="card-img-top h-75" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{viaggio.destinazione}</h5>
            <p className="card-text">
              <span>
                <strong>Data partenza: </strong>
                {formatDate(viaggio.data_inizio)}
              </span>
              <br />
              <span>
                <strong>Data ritorno: </strong>
                {formatDate(viaggio.data_fine)}
              </span>
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
