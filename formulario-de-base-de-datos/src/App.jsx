import { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import Alert from './components/Alertas/Alert';
import { Buscador } from './components/Buscador';
import { baseColab } from './Lista';
import { Tabla } from './components/Listado';
import { Container, Col, Row } from 'react-bootstrap';
//import { useForm } from 'react-hook-form';

function App() {
  const [filtro, setFiltro] = useState(baseColab);
  const [alert, setAlert] = useState('');  

 /* const { register, handleSubit } = useForm();

  const onSubmit = (data) => {
      console.log(data);
  };*/

    return (
      <>
    <Container >
      <Row >
        <Col md={8}>
          <h2 className='title2'>Buscador</h2>
          <Buscador data={baseColab} setFiltro ={setFiltro}/>
          <Tabla data={filtro}/>
        </Col>

        <Col md={4} className='content-style'>
          <h2 className='title'>Ingresa Nuevos Datos</h2>
          <Alert alert = {alert} />
          <Formulario setAlert = {setAlert}/>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default App;
