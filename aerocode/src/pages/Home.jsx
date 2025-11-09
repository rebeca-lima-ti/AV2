import { Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PerfilUsuario from '../components/home/PerfilUsuario';
import SecaoAeronaves from '../components/home/SecaoAeronaves';
import SecaoFuncionarios from '../components/home/SecaoFuncionarios';
import { useAuth } from '../context/AuthContext';
import '../App.css'

function Home() {
    const { user, loading } = useAuth()
    if (loading){
        return(
            <div >Carregando...</div>
        )
    }
    if (!user) return <Navigate to="/login" replace></Navigate>
    return(
        <>
            <Header/>
            <div className='container d-flex flex-column align-items-center mt-4'>
                <PerfilUsuario/>
                <div className='col-md-7 container d-flex justify-content-evenly mt-3 p-0'>
                    {user.role === "adm" && (
                        <SecaoFuncionarios/>
                    )}
                    <SecaoAeronaves/>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Home;