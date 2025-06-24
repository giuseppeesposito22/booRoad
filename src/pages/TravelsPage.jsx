import { viaggi } from "../data/data";
import TravelCard from "../components/TravelCard";
import { Link } from "react-router-dom";

export default function TravelsPage() {
  return (
    <>
      <div className="container my-5">
        <div className="d-flex justify-content-between align-items-center my-5">
          <h1>I NOSTRI VIAGGI</h1>
          <Link className="btn btn-primary" to="/newtravel">
            Aggiungi viaggio
          </Link>
        </div>
        <div className="row row-cols-3 g-3">
          {viaggi.map((viaggio) => (
            <TravelCard key={viaggio.id_viaggio} viaggio={viaggio} />
          ))}
        </div>
      </div>
    </>
  );
}
