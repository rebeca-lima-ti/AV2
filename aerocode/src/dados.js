export const funcionarios = [
  { id: 1, nome: "Rebeca Lima", telefone: "00000-0000", usuario: "adm", senha: "123", role: "adm" },
  { id: 2, nome: "Rafael Sette", telefone: "11111-1111", usuario: "operador", senha: "123", role: "operador" },
  { id: 3, nome: "Gerson ", telefone: "22222-2222", usuario: "engenheiro", senha: "123", role: "engenheiro" },
];

export function login(usuario, senha) {
  const funcionario = funcionarios.find(
    (u) => u.usuario === usuario && u.senha === senha
  );
  if (funcionario) {
    localStorage.setItem("funcionario", JSON.stringify(funcionario));
    return funcionario;
  }
  return null;
}

export function getFuncionario() {
  const data = localStorage.getItem("funcionario");
  return data ? JSON.parse(data) : null;
}

export function logout() {
  localStorage.removeItem("funcionario");
}
