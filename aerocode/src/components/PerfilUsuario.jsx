import { useEffect, useState } from "react";
import { getFuncionario } from "../dados";
import { Person } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import "../App.css"

function PerfilUsuario() {
    const navigate = useNavigate();
    const [funcionario, setFuncionario] = useState(null);

    useEffect(() => {
        const loggedUser = getFuncionario();
        if (!loggedUser) {
            navigate("/login");
        } else {
            setFuncionario(loggedUser);
        }
    }, [navigate]);

    return (
        <div className="card col-md-7 p-5">
            <div className="d-flex flex-row justify-content-between">
                <Person className="fs-10" />
                <h2 className="fw-bold">
                    {funcionario ? (
                        <>
                            Bem-vindo,{" "}
                            {funcionario.role === "adm"
                                ? "Administrador"
                                : funcionario.role === "operador"
                                    ? "Operador"
                                    : "Engenheiro"}
                        </>
                    ) : (
                        "Carregando..."
                    )}
                </h2>
            </div>
        </div>
    )
}

export default PerfilUsuario;