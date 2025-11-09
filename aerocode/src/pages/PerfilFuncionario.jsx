import { Header } from '../components/Header'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'

function PerfilFuncionario() {
    const { user, loading } = useAuth()
        if (loading){
            return(
                <div >Carregando...</div>
            )
        }
        if (!user) return <Navigate to="/login" replace></Navigate>
    return(
        <Header/>
    )
}

export default PerfilFuncionario;