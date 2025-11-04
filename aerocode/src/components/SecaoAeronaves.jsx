import { AirplaneFill } from "react-bootstrap-icons";
import "../App.css"

function SecaoAeronaves() {
    return (
        <div className="card align-items-center text-center p-5">
            <AirplaneFill className="fs-8"/>
            <h3>Aeronaves</h3>
            <button className="btn bg-blue-primary py-1 px-3">Gerenciar aeronaves</button>
        </div>
    )
}

export default SecaoAeronaves;