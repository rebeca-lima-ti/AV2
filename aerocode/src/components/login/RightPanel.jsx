import { useState } from "react";
import { Form } from "react-bootstrap";
import { Person, Lock } from "react-bootstrap-icons";
import "../../App.css"
import { useNavigate } from "react-router-dom";
import { login } from "../../dados";

function RightPanel() {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const funcionario = login(usuario, senha);

        if (funcionario) {
            if (funcionario.role === "adm") navigate("/homeadm");
            else if (funcionario.role == "operador" || funcionario.role == "engenheiro") navigate("/homeengope");
        } else {
            setError("Usuário ou senha inválidos!");
        }
    };
    return (
        <div className="right-panel w-75">
            <h4 className="fw-bold mb-2">Olá!</h4>
            <p className="text-muted mb-4">Seja bem-vindo à Aerocode</p>

            <Form onSubmit={handleSubmit}>
                <div className="mb-3 position-relative">
                    <Form.Control type="text" placeholder="insira seu usuario" className="rounded-pill ps-5 py-2" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
                    <Person className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
                </div>

                <div className="mb-3 position-relative">
                    <Form.Control type="password" placeholder="insira sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} className="rounded-pill ps-5 py-2" />
                    <Lock className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
                </div>

                <button type="submit" className="w-100 rounded-pill py-2 fw-semibold bg-blue-primary">
                    Entrar
                </button>
            </Form>
        </div>
    );
}

export default RightPanel;
