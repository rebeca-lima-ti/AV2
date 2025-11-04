import '../App.css'
import Header from '../components/Header';
import Perfilusuario from '../components/PerfilUsuario';
import SecaoAeronaves from '../components/SecaoAeronaves';
import SecaoFuncionarios from '../components/SecaoFuncionarios';

function HomeAdm() {
    return(
        <>
            <Header/>
            <div className='conteiner d-flex flex-column align-items-center mt-4'>
                <Perfilusuario/>
                <div className='container d-flex justify-content-evenly mt-3'>
                    <SecaoFuncionarios/>
                    <SecaoAeronaves/>
                </div>
            </div>
        </>
    );
}

export default HomeAdm;