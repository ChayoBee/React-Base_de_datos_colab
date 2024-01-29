import { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import Alert from './components/Alertas/Alert';
import { Buscador } from './components/Buscador';
import { baseColab } from './Lista';
import { Tabla } from './components/Listado';


function App() {
  const [filtro, setFiltro] = useState(baseColab);
  const [alert, setAlert] = useState(''); 
  const [colab, setColab] = useState(baseColab); 
console.log(filtro);
    return (
      <>
    <main className='content-all'>
        <div>
          <h2 className='title2'>Buscador</h2>
          <Buscador data={baseColab} setFiltro ={setFiltro}/>
          <Tabla data={filtro}/>
        </div>

        <div className='content-style'>
          <h2 className='title'>Ingresa Nuevos Datos</h2>
          <Alert alert = {alert} />
          <Formulario 
          setAlert = {setAlert}
          colab={colab}
          setColab={setColab}/>
        </div>
    </main>
    </>
  );
};

export default App;
