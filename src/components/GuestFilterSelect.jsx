export default function GuestFilterSelect({ partecipanti, setOption, option }) {
  return (
    <>
      <select
        value={option}
        onChange={function (event) {
          setOption(event.target.value);
        }}
        className="form-select my-5"
        aria-label="Default select example"
      >
        <option value="">Filtra per nome e cognome</option>
        {partecipanti &&
          partecipanti.map((partecipante, index) => {
            const fullName = partecipante.nome + " " + partecipante.cognome;
            return (
              <option key={index} value={fullName}>
                {fullName}
              </option>
            );
          })}
      </select>
    </>
  );
}
