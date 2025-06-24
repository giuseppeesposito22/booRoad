export default function TravelForm({ handleSubmit, setTravel, travel }) {
  return (
    <>
      <div className="container my-5">
        <h1 className="text-center mb-5">NUOVO VIAGGIO</h1>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-12">
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
          </div>

          <div className="col-6">
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
          </div>

          <div className="col-6">
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
          </div>

          <div className="col-2">
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
          </div>

          <div className="col-10">
            <label className="form-label">Immagine</label>
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
          </div>

          <div className="d-flex justify-content-center">
            <button className="btn btn-success" type="submit">
              Aggiungi viaggio
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
