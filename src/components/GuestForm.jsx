import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { viaggi } from "../data/data";

export default function GuestForm({ onAddGuest, show }) {
  const [guest, setGuest] = useState({
    nome: "",
    cognome: "",
    mail: "",
    codice_fiscale: "",
    numero_di_telefono: "",
  });

  //   const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddGuest(guest);
    show(false);

    // console.log(travel, viaggi);

    // navigate("/travels");
  };

  return (
    <>
      <h1 className="my-3">Nuovo partecipante</h1>
      <form
        onSubmit={handleSubmit}
        className="row g-2 border rounded-3 p-3 my-3"
      >
        <label className="form-label">Nome</label>
        <input
          className="form-control"
          type="text"
          placeholder="Nome"
          value={guest.nome}
          onChange={(e) =>
            setGuest({
              ...guest,
              nome: e.target.value,
            })
          }
          required
        />

        <label className="form-label">Cognome</label>
        <input
          className="form-control"
          type="text"
          placeholder="Cognome"
          value={guest.cognome}
          onChange={(e) =>
            setGuest({
              ...guest,
              cognome: e.target.value,
            })
          }
          required
        />

        <label className="form-label">Email</label>
        <input
          className="form-control"
          type="email"
          placeholder="Email"
          value={guest.mail}
          onChange={(e) =>
            setGuest({
              ...guest,
              mail: e.target.value,
            })
          }
          required
        />

        <label className="form-label">CF</label>
        <input
          className="form-control"
          type="text"
          value={guest.codice_fiscale}
          placeholder="CF"
          onChange={(e) =>
            setGuest({
              ...guest,
              codice_fiscale: e.target.value,
            })
          }
          required
        />

        <label className="form-label">Numero di telefono</label>
        <input
          className="form-control"
          type="text"
          value={guest.numero_di_telefono}
          placeholder="+39..."
          onChange={(e) =>
            setGuest({
              ...guest,
              numero_di_telefono: e.target.value,
            })
          }
        />

        <div className="d-flex justify-content-center">
          <button className="btn btn-success my-3" type="submit">
            Aggiungi partecipante
          </button>
        </div>
      </form>
    </>
  );
}
