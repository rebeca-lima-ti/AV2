import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { lazy } from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";

const Login = lazy(() => import ("./pages/Login"))
const Home = lazy(() => import ("./pages/Home"))
const Funcionarios = lazy(() => import ("./pages/Funcionarios"))

function RouteParticular() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Carregando...</div>;
  }

  return user ? <Outlet /> : <Navigate to="/login" replace />;
}

function App() {
	return (
		<AuthProvider>
			<Router>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/" element={<RouteParticular />}>
						<Route index element={<Home />} />
						<Route path="/funcionarios" element={<Funcionarios />} />
					</Route>
				</Routes>
			</Router>
		</AuthProvider>
	);
}

export default App;
