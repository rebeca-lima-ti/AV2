export const users = [
  { email: "adm@teste.com", password: "123", role: "adm" },
  { email: "operador@teste.com", password: "123", role: "operador" },
  { email: "engenheiro@teste.com", password: "123", role: "engenheiro" },
];

export function login(email, password) {
  const user = users.find(
    (u) => u.email === email && u.password === password
  );
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  }
  return null;
}

export function getUser() {
  const data = localStorage.getItem("user");
  return data ? JSON.parse(data) : null;
}

export function logout() {
  localStorage.removeItem("user");
}
