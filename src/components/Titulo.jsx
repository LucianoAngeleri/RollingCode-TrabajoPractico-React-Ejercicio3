import { useState } from "react";

const Titulo = ({ textoTitulo }) => {
    const [msj, setMsj] = useState("");

    const handleClick = () => {
        setMsj("from changed state");
    };

    return (
        <section className='container p-5 my-3 border rounded-5'>
            <h1 className='display-1 text-center'>Hello {textoTitulo}!, {msj}</h1>
            <div class="d-grid gap-2 p-5">
            <button type="button" class="btn btn-primary" onClick={handleClick}>Hacer Click!</button>
            </div>
        </section>

    );
};

export default Titulo;