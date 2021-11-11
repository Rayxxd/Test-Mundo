import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const Editcalles = () => {

    const [form, setForm] = useState({
        name: '',
        region: '',
        provincia: '',
        ciudad: ''
    });

    const [regiones, setRegiones] = useState([]);
    const [provincias, setProvincias] = useState([]);
    const [ciudades, setCiudades] = useState([]);

    async function cargaRegiones() {
        const res = await axios.get('http://localhost:8000/api/regiones');

        if (res.data.status === 200) {
            setRegiones(res.data.regiones)
        } else {
            console.log(res.data.status)
        }
    }

    const cambioRegion = async (event) => {
        let x = event.target.value;
        let pro = await axios.get('http://localhost:8000/api/provincias/' + x)

        if (pro.data.status === 200) {
            const data = {
                ...form,
                region: x,
                provincia: '',
                ciudad: '',

            }
            setForm(data)
            setProvincias(pro.data.provincias)
            setCiudades([])

        } else {
            console.log(pro.data.status)
        }
    }

    const cambioProvincia = async (event) => {
        let x = event.target.value;
        let ciu = await axios.get('http://localhost:8000/api/ciudades/' + x)

        if (ciu.data.status === 200) {
            setCiudades(ciu.data.ciudades)
            const data = {
                ...form,
                provincia: x,
                ciudad: '',

            }
            setForm(data)
        } else {
            console.log(ciu.data.status)
        }
    }

    const cambioCiudad = async (event) => {
        let x = event.target.value;
        const data = {
            ...form,
            ciudad: x,

        }
        setForm(data)
    }

    const cambioNombre = (nombre) => {
        const data = {
            ...form,
            name: nombre
        }
        setForm(data)
    }

    async function addCalle(e) {
        e.preventDefault();
        const data = { ...form }
        console.log(data);
        if (data.ciudad === '' || data.provincia === '' || !data.name.trim() || data.name === null) {
            return swal({
                text: "Por favor, rellena todos los campos",
                icon: "error"
            });
        }

        let x = await axios.post('http://localhost:8000/api/add-calle', form)

        if (x.data.status === 200) {
            return swal({
                text: "Calle agregada",
                icon: "success",
                button: null,
                timer: "1000"
            });

        } else {
            console.log(x.data.error)
            return swal({
                text: x.data.error,
                icon: "error"
            });
        }

    }


    useEffect(() => {

        cargaRegiones()

    }, []);

    return (

        <div className="container">
            <div className="form-group">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Agregar Calle
                                <Link to={'/'} className="btn btn-primary btn-sm float-end">Atrás</Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={addCalle}>
                                <div className="form-group mb-3">
                                    <label>Nombre</label>
                                    <input type="text" name="name" defaultValue={form.name} className="form-control" onChange={(e) => cambioNombre(e.target.value)} required />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Región</label>
                                    <select className="form-control" defaultValue={form.region} onChange={cambioRegion} >
                                        <option>Seleccione una región</option>
                                        {regiones.map(item =>
                                            <option key={item.id} value={item.id}>{item.nombre}</option>
                                        )}
                                    </select>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Provincia</label>
                                    <select className="form-control" value={form.provincia} onChange={cambioProvincia}>
                                        <option>Seleccione una provincia</option>
                                        {provincias.map(item =>
                                            <option key={item.id} value={item.id}>{item.nombre}</option>
                                        )}
                                    </select>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Ciudad</label>
                                    <select className="form-control" value={form.ciudad} onChange={cambioCiudad}>
                                        <option>Seleccione una ciudad</option>
                                        {ciudades.map(item =>
                                            <option key={item.id} value={item.id}>{item.nombre}</option>
                                        )}
                                    </select>
                                </div>

                                <div className="form-group mb-3">
                                    <button type="submit" className="btn btn-primary">Agregar</button>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Editcalles;