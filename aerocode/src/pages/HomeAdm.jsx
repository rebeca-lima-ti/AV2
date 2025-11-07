import '../App.css'
import Header from '../components/Header';
import PerfilUsuario from '../components/PerfilUsuario';
import SecaoAeronaves from '../components/SecaoAeronaves';
import SecaoFuncionarios from '../components/SecaoFuncionarios';

function HomeAdm() {
    return(
        <>
            <Header/>
            <div className='conteiner d-flex flex-column align-items-center mt-4'>
                <PerfilUsuario/>
                <div className='col-md-7 container d-flex justify-content-between mt-3 p-0'>
                    <SecaoFuncionarios/>
                    <SecaoAeronaves/>
                </div>
            </div>
        </>
    );
}

export default HomeAdm;