import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { viaggi } from "../data/data";

export default function GuestForm({ onAddGuest }) {
  const [guest, setGuest] = useState({
    nome: "Mario",
    cognome: "Rossi",
    mail: "mario.rossi@example.com",
    codice_fiscale: "RSSMRA80A01H501J",
    numero_di_telefono: "+393331234567",
  });

  //   const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddGuest(guest);
    // console.log(travel, viaggi);

    // navigate("/travels");
  };

  return (
    <>
      <h1>New Guest</h1>
      <form onSubmit={handleSubmit}>
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
          onChange={(e) =>
            setGuest({
              ...guest,
              codice_fiscale: e.target.value,
            })
          }
          required
        />

        <input
          className="form-control"
          type="text"
          value={guest.numero_di_telefono}
          onChange={(e) =>
            setGuest({
              ...guest,
              numero_di_telefono: e.target.value,
            })
          }
        />

        <button type="submit">Create New Guest</button>
      </form>
    </>
  );
}
