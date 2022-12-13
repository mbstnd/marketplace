import { useState } from "react"
import { useNavigate } from "react-router-dom"



const Publication = ({ submit }) => {
    
const [name, setName] = useState('')
const [status, setStatus] = useState('')
const [price, setPrice] = useState('')
const [model, setModel] = useState('')
const [desc, setDesc] = useState('')

const navigate = useNavigate();

const validate = () => {
    return name.length & status.length & price.length & model.length & desc.length;
}

const handleClick = (e) => {
    e.preventDefault();
    submit(e)
    navigate("/mypublications")
}
  

    return (
    <div className="main-publication">
        <h3>Completa el siguiente formulario:</h3>
        <form className="publication-form"  onSubmit={(e) => handleClick(e)}>
       
            <div className="publication-section">
                <label>NOMBRE</label>
                <input type="text" placeholder="Nombre del Vendedor" value={name} onChange={e=> setName(e.target.value) }></input>
            </div>
            <div className="publication-section">
                <label>ESTADO DEL PRODUCTO</label>
                <input type="text" placeholder="Estado del Instrumento" value={status} onChange={e=> setStatus(e.target.value)}></input>

            </div>
            <div className="publication-section">
                <label>PRECIO</label>
                <input type="text" placeholder="Precio del Producto" value={price} onChange={e=> setPrice(e.target.value)} ></input>
            </div>
            <div className="publication-section">
                <label>MODELO</label>
                <input type="text" placeholder="Indica el Modelo" value={model} onChange={e=> setModel(e.target.value)}></input>
            </div>
            <div className="publication-section">
                <label>DESCRIPCIÓN</label>
                <input type="text" placeholder="Agrega una Descripción" value={desc} onChange={e=> setDesc(e.target.value)}></input>
            </div>
            <button  className="btn-filter" disabled={!validate()}>Publicar</button>
        </form>
    </div>
    )
}

export default Publication