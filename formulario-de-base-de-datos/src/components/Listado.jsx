import React from 'react';
import PropTypes from 'prop-types';
import Alert from './Alertas/Alert';
import Table from 'react-bootstrap/Table';
import './Listado.css';

export const Tabla = ( {data} ) => {
  return (
    <Table striped bordered hover variant="dark" className='tabla-container'>
      <thead className='tabla-head'>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Cargo</th>
        </tr>
      </thead>
      <tbody className='tabla-body'>
        {data.length ? (
            data.map((user, index) => (
                <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.nombre}</td>
                    <td>{user.edad}</td>
                    <td>{user.correo}</td>
                    <td>{user.fono}</td>
                    <td>{user.cargo}</td>
                </tr>
            ))
        ) : (
            <tr>
                <td colSpan={6}>
                    <Alert 
                    alert={'Data not Found'}/>
                </td>
            </tr>
        )}
      </tbody>
    </Table>
  );
};

Tabla.propTypes = {
    data: PropTypes.array.isRequired,
};