import '../App.css'
import Header from '../components/Header';
import PerfilUsuario from '../components/PerfilUsuario';
import SecaoAeronaves from '../components/SecaoAeronaves';

function HomeAdm() {
    return(
        <>
            <Header/>
            <div className='conteiner d-flex flex-column align-items-center mt-4'>
                <PerfilUsuario/>
                <div className='container d-flex justify-content-evenly mt-3'>
                    <SecaoAeronaves/>
                </div>
            </div>
        </>
    );
}

export default HomeAdm;