import "./App.css";
import React, {useState} from "react";
import Card from "./components/Card";

function App() {
  const [cabello, setcabello] = useState({
    textura: "",
    color: "",
    largo: "",
  });


  const [error, setError] = useState({error: false, mensaje: ""});
  const [valid, setvalid] = useState(false);

  const handleChange = (e, valor) => {
    setcabello({...cabello, [valor]: e.target.value.trim()});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(cabello.textura === "" || 
        cabello.color === "" || 
        cabello.largo === ""){
      setError({error: true, mensaje: "Todos los campos son obligatorios"});
      return;

    }else if(cabello.textura.length < 3){
      setError({error: true, mensaje: "La textura debe tener al menos 3 caracteres"});
      return;

    }else if(cabello.color.length < 6){
      setError({error: true, mensaje: "El color debe tener al menos 6 caracteres"});
      return;

    }else{
      setError({error: false, mensaje: ""});
      setvalid(true);
    }
  };

  return (
    <div className="App">
      <div className="form">
        <h1>Tipo de cabello</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label>textura</label>
          <input type="text" name="textura" onChange={(e) => handleChange(e, "textura")}/>
          <label>largo</label>
          <input type="text" name="largo" onChange={(e) => handleChange(e, "largo")}/>
          <label>Color</label>
          <input type="text" name="color" onChange={(e) => handleChange(e, "color")}
          />
          <button type="submit">guardar</button>
        </form>
         {error.error && (
          <p className="error">
            Por favor chequea que la información sea correcta: <br/>
            {error.mensaje}
          </p>
        )}

        {valid && (
          <Card textura={cabello.textura} color={cabello.color} largo={cabello.largo}></Card>
        )}
      </div>
    </div>
  );
}

export default App;
