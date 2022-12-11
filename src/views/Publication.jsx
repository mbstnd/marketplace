import { useState } from "react"

const Publication = () => {
    const [nombre, setNombre] = useState("")
    const [condicion, setCondicion] = useState("")
    const [precio,setPrecio ] = useState("")
    const [modelo, setModelo ] = useState("")
    const [descripcion, setDescripcion ] = useState("")


    const handleEnviar = ()=> {
        const data = 
        { 
            nombre: nombre, 
            precio: precio, 
            modelo: modelo, 
            condicion: condicion,
            descripcion: descripcion}

        console.log (data)
    }


    return (
    <div className="main-publication">
        <h3>Completa el siguiente formulario:</h3>
        <div className="publication-section">
            <form>NOMBRE</form>
            <input type="text" placeholder="Nombre del Vendedor" onChange={(e)=> setNombre(e.target.value)}></input>
        </div>
        <div className="publication-section">
            <form>ESTADO DEL PRODUCTO</form>
            <input type="text" placeholder="Estado del Instrumento" onChange={(e)=> setCondicion(e.target.value)} />

        </div>
        <div className="publication-section">
            <form>PRECIO</form>
            <input type="text" placeholder="Precio del Producto" onChange={(e)=> setPrecio(e.target.value)}></input>
        </div>
        <div className="publication-section">
            <form>MODELO</form>
            <input type="text" placeholder="Indica el Modelo" onChange={(e)=> setModelo(e.target.value)}></input>
        </div>
        <div className="publication-section">
            <form>DESCRIPCIÓN</form>
            <input type="text" placeholder="Agrega una Descripción" onChange={(e)=> setDescripcion(e.target.value)}></input>
        </div>
        <button className="btn-filter" onClick={()=> handleEnviar()}>Publicar</button>
    </div>
    )
}

export default Publication