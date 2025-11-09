import { Person } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import "../../App.css"
import { useAuth } from "../../context/AuthContext";

function PerfilUsuario() {
    const navigate = useNavigate();
    const { user, loading } = useAuth()
    
    if (!loading) null
    if (!user) null

    return (
        <div className="card col-md-7 p-5">
            <div className="d-flex flex-row justify-content-between">
                <Person className="fs-10" />
                <h2 className="fw-bold">
                    {user ? (
                        <>
                            Bem-vindo,{" "}
                            {user.role === "adm"
                                ? "Administrador"
                                : user.role === "operador"
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