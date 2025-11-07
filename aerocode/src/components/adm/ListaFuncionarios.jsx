import "../../App.css"
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Pencil, Trash } from "react-bootstrap-icons";
import { funcionarios } from "../../dados"
import ModalFuncionario from './ModalFuncionario';

function ListaFuncionarios() {
    const [funcionariosLista, setFuncionarios] = useState(funcionarios);
    const [busca, setBusca] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [funcionarioSelecionado, setFuncionarioSelecionado] = useState(null);

    const handleBusca = (e) => setBusca(e.target.value);

    const funcionariosFiltrados = funcionariosLista.filter((f) =>
        f.nome.toLowerCase().includes(busca.toLowerCase())
    );

    const handleSalvar = (novo) => {
        if (novo.id) {
            setFuncionarios((prev) =>
                prev.map((f) => (f.id === novo.id ? novo : f))
            );
        } else {
            const novoId = funcionariosLista.length
                ? Math.max(...funcionariosLista.map((f) => f.id)) + 1
                : 1;
            setFuncionarios((prev) => [...prev, { ...novo, id: novoId }]);
        }
    };

    const handleExcluir = (id) => {
        if (window.confirm("Deseja realmente excluir este funcionário?")) {
            setFuncionarios(funcionariosLista.filter((f) => f.id !== id));
        }
    };

    const handleEditar = (funcionario) => {
        setFuncionarioSelecionado(funcionario);
        setShowModal(true);
    };

    const handleNovo = () => {
        setFuncionarioSelecionado(null);
        setShowModal(true);
    };
    return (
        <>
            <div className="row align-items-center my-4">
                <div className="col-md-8">
                    <h3 className="fw-bold mb-0">Gerenciamento de Funcionários</h3>
                </div>
                <div className="col-md-4 text-end">
                    <button className="btn bg-blue-primary" onClick={handleNovo}>
                        + Novo Funcionário
                    </button>
                </div>
            </div>
            <Form.Control
                type="text"
                placeholder="Pesquisar por nome..."
                value={busca}
                onChange={handleBusca}
                className="mb-3"
            />
            <table className="table table-hover table-bordered table-responsive text-center">
                <thead className="table-secondary">
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Usuário</th>
                        <th>Função</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {funcionariosFiltrados.length > 0 ? (
                        funcionariosFiltrados.map((f) => (
                            <tr key={f.id}>
                                <td>{f.id}</td>
                                <td>{f.nome}</td>
                                <td>{f.telefone}</td>
                                <td>{f.usuario}</td>
                                <td>
                                    {f.role === "adm"
                                        ? "Administrador"
                                        : f.role === "operador"
                                            ? "Operador"
                                            : "Engenheiro"}
                                </td>
                                <td>
                                    <button
                                        className="me-2 btn btn-sm btn-outline-warning"
                                        onClick={() => handleEditar(f)}
                                    >
                                        <Pencil/>
                                    </button>
                                    <button
                                        className="me-2 btn btn-sm btn-outline-danger"
                                        onClick={() => handleExcluir(f.id)}
                                    >
                                        <Trash/>
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center text-muted">
                                Nenhum funcionário encontrado
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <ModalFuncionario
                show={showModal}
                onHide={() => setShowModal(false)}
                onSave={handleSalvar}
                funcionarioSelecionado={funcionarioSelecionado}
            />
        </>
    )
}

export default ListaFuncionarios;