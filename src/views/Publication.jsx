

const Publication = () => {

    return (
    <div className="main-publication">
        <div className="publication-section">
            <label>TITULO</label>
            <input type="text" placeholder=" Agrega un título inspirador"></input>
        </div>
        <div className="publication-section">
            <label>CONDICION</label>
            <input type="radio" id="used" name="used" value="used" />
            <label for="used">Usado</label>

            <input type="radio" id="new" name="new" value="new" />
            <label for="new">Nuevo</label>
        </div>
        <div className="publication-section">
            <label>PRECIO</label>
            <input type="text" placeholder=" Agrega el precio del producto"></input>
        </div>
        <div className="publication-section">
            <label>MODELO</label>
            <input type="text" placeholder=" Indica el modelo del producto"></input>
        </div>
        <div className="publication-section">
            <label>DESCRIPCION</label>
            <input type="text" placeholder=" Agrega la descripciòn del producto y especificaciones técnicas"></input>
        </div>
        <button className="btn-filter">Publicar</button>
    </div>
    )
}

export default Publication