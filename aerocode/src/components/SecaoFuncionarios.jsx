import { PeopleFill } from "react-bootstrap-icons";
import "../App.css"

function SecaoFuncionarios() {
    return (
        <div className="card align-items-center text-center p-5">
            <PeopleFill className="fs-8"/>
            <h3>Funcionários</h3>
            <button className="btn bg-blue-primary py-1 px-3">Gerenciar funcionários</button>
        </div>
    )
}

export default SecaoFuncionarios;