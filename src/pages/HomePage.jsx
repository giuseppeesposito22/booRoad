import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100 body-home">
        <h1 className="text-center title my-5">Welcome to BooRoad</h1>
        <Link to="/travels" className="btn btn-danger btn-lg">
          Vai ai nostri viaggi
        </Link>
      </div>
    </>
  );
}
