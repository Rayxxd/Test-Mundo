import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Calles = () => {
    const [regiones, setRegiones] = useState([]);
    const [provincias, setProvincias] = useState([]);
    const [ciudades, setCiudades] = useState([]);
    const [calles, setCalles] = useState([]);

    useEffect(() => {
        async function cargaRegiones() {
            const res = await axios.get('http://127.0.0.1:8000/api/regiones');

            if (res.data.status === 200) {
                setRegiones(res.data.regiones)
            }
        }
        cargaRegiones()

    }, []);

    const cambioregion = async (event) => {
        let x = event.target.value;
        let pro = await axios.get('http://127.0.0.1:8000/api/provincias/' + x)

        if (pro.data.status === 200) {
            setProvincias(pro.data.provincias)
            setCiudades([])
            setCalles([])
        }
    }

    const cambioprov = async (event) => {
        let x = event.target.value;
        let ciu = await axios.get('http://127.0.0.1:8000/api/ciudades/' + x)

        if (ciu.data.status === 200) {
            setCiudades(ciu.data.ciudades)
            setCalles([])
        }
    }

    const cambiociudad = async (event) => {
        let x = event.target.value;
        let call = await axios.get('http://127.0.0.1:8000/api/calles/' + x)

        if (call.data.status === 200) {
            setCalles(
                call.data.calles
            )
        }
    }

    return (
        <div className="container">
            <div className="form-group">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Calles
                                <Link to={'add-calle'} className="btn btn-primary btn-sm float-end">Agregar Calle</Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                            <Row>
                                <Col md={3}>
                                    <select name="regiones" id="selRegiones" defaultValue={'DEFAULT'} onChange={cambioregion} className="form-control">
                                        <option value="DEFAULT" >Seleccione una region</option>
                                        {regiones.map(item => (
                                            <option key={item.id} value={item.id}>{item.nombre}</option>
                                        ))}
                                    </select>
                                </Col>
                                <Col md={3}>
                                    <select name="provincias" id="selProvincias" defaultValue={'DEFAULT'} onChange={cambioprov} className="form-control">
                                        <option value="DEFAULT" >Seleccione una provincia</option>
                                        {provincias.map(item => (
                                            <option key={item.id} value={item.id}>{item.nombre}</option>
                                        ))}
                                    </select>
                                </Col>
                                <Col md={3}>
                                    <select name="ciudades" id="selCiudades" defaultValue={'DEFAULT'} onChange={cambiociudad} className="form-control">
                                        <option value="DEFAULT" >Seleccione una ciudad</option>
                                        {ciudades.map(item => (
                                            <option key={item.id} value={item.id}>{item.nombre}</option>
                                        ))}
                                    </select>
                                </Col>

                            </Row>
                            </div>
                            <br></br>
                            <table className="table table-bordered table-striped" >
                                <thead>
                                    <tr>
                                        <th>Calle</th>
                                        <th>Editar</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        calles.map(item => (
                                            <tr key={item.id}>
                                                <td>{item.nombre}</td>
                                                <td>
                                                    <Link to={`edit-calle/${item.id}`} className="btn btn-success btn-sm">Editar</Link>
                                                </td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Calles;