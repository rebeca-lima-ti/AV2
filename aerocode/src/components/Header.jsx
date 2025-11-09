import "../App.css"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };
    return (
        <div className="bg-darker-blue d-flex justify-content-between px-3 p-2">
            <h2 className="fw-bold">AEROCODE</h2>
            <button className="btn btn-outline-danger py-1 px-3" onClick={handleLogout}>SAIR</button>
        </div>
    );
}

export default Header;