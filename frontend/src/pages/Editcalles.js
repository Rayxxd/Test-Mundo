import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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

    const { id } = useParams();

    async function cargaDatos() {
            
        const res = await axios.get('http://127.0.0.1:8000/api/calle/' + id);
        
        if (res.data.status === 200) {
            setForm(
                {
                    name: res.data.calle.nombre,
                    region: res.data.region.id,
                    provincia: res.data.provincia.id,
                    ciudad: res.data.ciudad.id
                }
            )
           
            cargaRegiones()
            cargaProvincias(res.data.region.id)
            cargaCiudades(res.data.provincia.id)
        }else{
            console.log(res.data.status)
        }
    }
    
    async function cargaRegiones() {
        const res = await axios.get('http://127.0.0.1:8000/api/regiones');

        if (res.data.status === 200) {
            setRegiones(
                res.data.regiones
            )
        }else{
            console.log(res.data.status)
        }
    }

    async function cargaProvincias(id) {

        let pro = await axios.get('http://127.0.0.1:8000/api/provincias/' + id)
        if (pro.data.status === 200) {
            setProvincias(pro.data.provincias)
            setCiudades([])
          
        }else{
            console.log(pro.data.status)
        }
    }
    
    async function cargaCiudades(id) {

        let ci = await axios.get('http://127.0.0.1:8000/api/ciudades/' + id)
        if (ci.data.status === 200) {
            setCiudades(ci.data.ciudades)

        }else{
            console.log(ci.data.status)
        }
    }

    async function cambioRegion(id) {
        cargaProvincias(id)
        const data = {
            ...form,
            region: id,
            provincia: '',
            ciudad: '',
            
        }
        setForm(data)
        

    }

    async function cambioProvincia(id) {
        cargaCiudades(id)
        const data = {
            ...form,
            provincia: id,
            ciudad: ''
        }
        setForm(data)
    }

    async function cambioCiudad(id) {
        const data = {
            ...form,
            ciudad: id
        }
        setForm(data)
    }

    const cambioNombre = (nombre) => {
        const data = {
            ...form,
            name: nombre
        }
        setForm(data)
        console.log(data)
    }

    async function updateCalle(e) {
        e.preventDefault();
        const data = {...form}
        if(data.ciudad === '' || data.provincia === '' || !data.name.trim() || data.name === null){
            return swal({
                text: "por favor, rellena todos los campos",
                icon: "error"
            });
        } 
        
        let x = await axios.post('http://127.0.0.1:8000/api/update-calle/' + id, form)
        if (x.data.status === 200) {
            return swal({
                text: "Datos actualizados",
                icon: "success",
                button: null,
                timer:"1000"
            });
        }else {
            console.log(x.data.error)
            return swal({
                text: x.data.error,
                icon: "error"

            });
        }
    }
   

    useEffect(() => {
        
        cargaDatos()
       
    }, []);

    return (
        
        <div className="container">
            <div className="form-group">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Editar Calle
                                <Link to={'/'} className="btn btn-primary btn-sm float-end">Atrás</Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={updateCalle}>
                                <div className="form-group mb-3">
                                    <label>Nombre</label>
                                    <input type="text" name="name" defaultValue={form.name} className="form-control" onChange={(e) => cambioNombre(e.target.value)} required/>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Region</label>
                                    <select className="form-control" value={form.region} onChange={(e) => cambioRegion(e.target.value)} >
                                        {regiones.map(item =>
                                            <option key={item.id} value={item.id}>{item.nombre}</option>
                                        )}
                                    </select>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Provincia</label>
                                    <select className="form-control" value={form.provincia} onChange={(e) => cambioProvincia(e.target.value)}>
                                        <option>Seleccione una provincia</option>
                                        {provincias.map(item =>
                                            <option key={item.id} value={item.id}>{item.nombre}</option>
                                        )}
                                    </select>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Ciudad</label>
                                    <select className="form-control" value={form.ciudad} onChange={(e) => cambioCiudad(e.target.value)}>
                                        <option value="">Seleccione una ciudad</option>
                                        {ciudades.map(item =>
                                            <option key={item.id} value={item.id}>{item.nombre}</option>
                                        )}
                                    </select>
                                </div>

                                <div className="form-group mb-3">
                                    <button type="submit" className="btn btn-primary">Actualizar Calle</button>
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