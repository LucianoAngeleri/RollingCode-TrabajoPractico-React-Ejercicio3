import { useState } from "react";
const Boton = () => {
    const [msj, setMsj] = useState("");

    const handleClick = () => {
        setMsj("from changed state");
      };
    return (
        <div class="d-grid gap-2 p-5">
          <button type="button" class="btn btn-primary" onClick={handleClick}>Hacer Click!</button>
        </div>
    );
};

export default Boton;