import { createContext, useState, useEffect, type ReactNode, useContext } from "react";
import { funcionarios } from "../dados"

interface Funcionario {
    usuario: string
    role: "adm" | "engenheiro" | "operador"
}

interface AuthContextType {
    user: Funcionario | null;
    login: (usuario: string, senha: string) => string;
    logout: () => void;
    loading: boolean;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<Funcionario | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const parsedUser: Funcionario = JSON.parse(storedUser);
            setUser(parsedUser);
        }
        setLoading(false);
    }, []);

    const login = (usuario: string, senha: string) => {
        const funcionario = funcionarios.find(
            (u) => u.usuario === usuario && u.senha === senha
        );
        if (!funcionario) return "Usuário ou senha incorretos!"
        const func = {
            usuario: funcionario.usuario,
            role: funcionario.role
        } as Funcionario
        localStorage.setItem("user", JSON.stringify(func));
        setUser(func);
        return ""
    };

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    return context
}