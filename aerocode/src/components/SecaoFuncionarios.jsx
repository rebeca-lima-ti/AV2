import { PeopleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "../App.css"

function SecaoFuncionarios() {
    return (
        <div className="card col-md-5 align-items-center text-center p-5">
            <PeopleFill className="fs-8"/>
            <h3>Funcionários</h3>
            <Link to="/funcionarios" className="btn bg-blue-primary py-1 px-3">Gerenciar funcionários</Link>
        </div>
    )
}

export default SecaoFuncionarios;