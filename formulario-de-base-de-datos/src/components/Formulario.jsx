import { useState } from "react";
import Button from 'react-bootstrap/Button';
import './Formulario.css';
import { Tabla } from "./Listado";

const Formulario = ( {setAlert} ) => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [edad, setEdad] = useState('');
    const [cargo, setCargo] = useState('');
    const [fono, setFono] = useState('');
    const [tabla, setTabla] = useState(Tabla);

    const validarDatos = (e) => {
        e.preventDefault();

        if ( nombre === '' || correo === '' || edad === '' || cargo === '' || fono === '') {
            
            setAlert('Debe completar todos los campos.');
        } else if (!correoRegistro(correo)) {
            setAlert('Formato de correo inválido');
        } else {
            setAlert('¡Felicitaciones, te registraste exitosamente!')

            setNombre('');
            setCorreo('');
            setEdad('');
            setCargo('');
            setFono('');
        };
    };

    const handleNombre = (e) => {
        const name = e.target.value
        setNombre(name)
    };

    const handleCorreo = (e) => {
        const email = e.taerget.value
        setCorreo(email)
    };

    const handleEdad = (e) => {
        const age = e.taerget.value
        setEdad(age)
    };

    const handleCargo = (e) => {
        const job = e.taerget.value
        setCargo(job)
    };

    const handleFono = (e) => {
        const phone = e.target.value
        setFono(phone)
    };

    const handleSubit = () => {
        setTabla ([...tabla, {
            td: id,
            td: nombre,
            correo: correo,
            edad: edad,
            cargo: cargo,
            fono: fono,
        }])
    };

    const inputData = [
        {handler: handleNombre},
        {handler: handleCorreo},
        {handler: handleEdad},
        {handler: handleCargo},
        {handler: handleFono},
    ];
    /*const [addColab, setAddColab] = useState('');
    setAddColab(ev.Listado.add.value);*/

    const correoRegistro = (correo) => {
        const expresionCorreo = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        return expresionCorreo.test(correo);
    };

    return (
        <>
            <form onSubmit={validarDatos}>
                <div className="form-content">
                    {inputData.map ((inputElement) =>
                    <input
                    type="text"
                    placeholder="Nombre Completo"
                    onChange={(e) => setNombre(e.target.value)}
                    value={nombre}
                    handler={inputElement.handler}/>
                    )};

                    <input type="text"
                    placeholder="Correo"
                    onChange={(e) => setCorreo(e.target.value)}
                    value={correo}/>
                    
                    <input type="text"
                    placeholder="Edad"
                    onChange={(e) => setEdad(e.target.value)}
                    value={edad}/>
                    
                    <input type="text"
                    placeholder="Cargo"
                    onChange={(e) => setCargo(e.target.value)}
                    value={cargo}/>
                    
                    <input type="text"
                    placeholder="Teléfono"
                    onChange={(e) => setFono(e.target.value)}
                    value={fono}/>

                    <Button variant="Send" type="submit" onClick={handleSubit}>Enviar</Button>
                </div>
            </form>
        </>
    );
};

export default Formulario;