import { Person } from "react-bootstrap-icons";
import "../App.css"

function Perfilusuario() {
    return (
        <div className="card col-md-7 p-5">
            <div className="d-flex flex-row justify-content-between">
                <Person className="fs-10"/>
                <h3></h3>
            </div>
        </div>
    )
}

export default Perfilusuario;