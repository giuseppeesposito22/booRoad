import { viaggi } from "../data/data";
import TravelCard from "../components/TravelCard";

export default function TravelsPage() {
  return (
    <>
      <div className="container my-5">
        <div className="row row-cols-3 g-3">
          {viaggi.map((viaggio) => (
            <TravelCard key={viaggio.id_viaggio} viaggio={viaggio} />
          ))}
        </div>
      </div>
    </>
  );
}
