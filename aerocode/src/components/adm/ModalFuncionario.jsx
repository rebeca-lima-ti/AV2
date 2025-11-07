import { useState, useEffect } from "react";
import { Modal, Form } from "react-bootstrap";
import "../../App.css";

function ModalFuncionario({ show, onHide, onSave, funcionarioSelecionado }) {
  const [formData, setFormData] = useState({
    id: "",
    nome: "",
    telefone: "",
    usuario: "",
    senha: "",
    role: "",
  });

  useEffect(() => {
    if (funcionarioSelecionado) {
      setFormData(funcionarioSelecionado);
    } else {
      setFormData({ id: "", nome: "", telefone: "", usuario: "", senha: "", role: "" });
    }
  }, [funcionarioSelecionado]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(formData);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {funcionarioSelecionado ? "Editar Funcionário" : "Novo Funcionário"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Digite o nome"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              placeholder="Digite o telefone"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Usuário</Form.Label>
            <Form.Control
              name="usuario"
              value={formData.usuario}
              onChange={handleChange}
              placeholder="Digite o nome de usuário"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              type="password"
              placeholder="Digite a senha"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Função (Role)</Form.Label>
            <Form.Select name="role" value={formData.role} onChange={handleChange}>
              <option value="">Selecione...</option>
              <option value="adm">Administrador</option>
              <option value="operador">Operador</option>
              <option value="engenheiro">Engenheiro</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <button className="btn btn-secondary" onClick={onHide}>
          Cancelar
        </button>
        <button className="btn bg-blue-primary" onClick={handleSubmit}>
          Salvar
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalFuncionario;